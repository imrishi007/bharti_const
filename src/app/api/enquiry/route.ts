import { NextResponse } from "next/server";
import { enquiryText, validateEnquiry } from "@/lib/enquiry";
import { deliverySettings } from "@/lib/enquiry-delivery";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && origin !== "null" && origin !== new URL(request.url).origin && origin !== `https://${host}` && origin !== `http://${host}`) {
    return NextResponse.json({ message: "This enquiry request is not allowed." }, { status: 403 });
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ message: "This enquiry request is not allowed." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length")) > 24_000) {
    return NextResponse.json({ message: "This enquiry is too large." }, { status: 413 });
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ message: "The enquiry could not be read." }, { status: 400 });
  }

  const result = validateEnquiry(data);
  if ("error" in result) return NextResponse.json({ message: result.error }, { status: 400 });
  if (data.get("website")) return NextResponse.json({ message: "The enquiry could not be submitted." }, { status: 400 });
  const settings = deliverySettings();
  if (!settings) {
    return NextResponse.json({ message: "Online delivery is pending setup. Download your enquiry to keep a copy." }, { status: 503 });
  }
  if (request.headers.get("accept") !== "application/json") {
    return NextResponse.json({ message: "Return to the contact page and enable JavaScript to send your enquiry." }, { status: 400 });
  }

  const { enquiry } = result;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${settings.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: settings.from, to: [settings.to], reply_to: enquiry.email, subject: `Website enquiry · ${enquiry.type}`, text: enquiryText(enquiry) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (response.ok) return NextResponse.json({ message: "Your enquiry was submitted. Thank you for getting in touch." });
  } catch {
    // Preserve the draft in the browser if the delivery service cannot be reached.
  }

  return NextResponse.json({ message: "Delivery failed. Your draft is still here. Try again or download a copy." }, { status: 502 });
}
