"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { enquiryText, enquiryTypes, validateEnquiry, type Enquiry } from "@/lib/enquiry";
import { Icon } from "./icon";

function downloadEnquiry(enquiry: Enquiry) {
  const blob = new Blob([`Bharti Construction Company — Enquiry draft\n\n${enquiryText(enquiry)}\n`], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "bharti-construction-enquiry.txt";
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function EnquiryForm({ deliveryEnabled }: { deliveryEnabled: boolean }) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ message: string; success: boolean }>();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const result = validateEnquiry(data);
    if ("error" in result) {
      setStatus({ message: result.error, success: false });
      return;
    }
    if (!deliveryEnabled) {
      downloadEnquiry(result.enquiry);
      setStatus({ message: "Your draft was downloaded. Online delivery is pending setup.", success: true });
      return;
    }

    setPending(true);
    setStatus(undefined);
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { Accept: "application/json" }, body: data });
      const body: { message?: string } = await response.json();
      setStatus({ message: body.message ?? "Your enquiry status is unavailable.", success: response.ok });
      if (response.ok) form.reset();
    } catch {
      setStatus({ message: "The delivery service could not be reached. Your draft is still here. Try again or download a copy.", success: false });
    } finally {
      setPending(false);
    }
  }

  function saveDraft(event: MouseEvent<HTMLButtonElement>) {
    const form = event.currentTarget.form;
    if (!form?.reportValidity()) return;
    const result = validateEnquiry(new FormData(form));
    if ("error" in result) {
      setStatus({ message: result.error, success: false });
      return;
    }
    downloadEnquiry(result.enquiry);
    setStatus({ message: "Your enquiry draft was downloaded.", success: true });
  }

  return <form className="details-panel enquiry-form" aria-labelledby="enquiry-title" onSubmit={submit} action="/api/enquiry" method="post">
    <h2 id="enquiry-title">Business Enquiry</h2>
    {!deliveryEnabled && <p className="form-privacy">Online delivery is pending setup. Fill in the form to download a copy of your enquiry.</p>}
    <div className="form-grid">
      <label className="field">Name<input name="name" required minLength={2} maxLength={100} autoComplete="name" /></label>
      <label className="field">Email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label className="field">Phone (optional)<input name="phone" type="tel" minLength={7} maxLength={30} autoComplete="tel" /></label>
      <label className="field">Enquiry type<select name="type" required defaultValue=""><option value="" disabled>Choose a type</option>{enquiryTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    <label className="field">Message<textarea name="message" required minLength={10} maxLength={3000} rows={5} /></label>
    <div className="form-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-actions">
      <button className="action action--primary" type="submit" disabled={pending}>{pending ? "Submitting…" : deliveryEnabled ? "Send Enquiry" : "Download Enquiry Draft"}<Icon name={deliveryEnabled ? "arrow" : "file"} /></button>
      {deliveryEnabled && <button className="action action--outline" type="button" onClick={saveDraft}>Download Draft</button>}
    </div>
    <p className={status?.success ? "form-status form-success" : "form-status"} aria-live="polite">{status?.message}</p>
  </form>;
}
