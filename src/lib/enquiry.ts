export const enquiryTypes = ["Project enquiry", "Business partnership", "Company information", "Other"] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  type: EnquiryType;
  message: string;
};

export function validateEnquiry(data: FormData): { enquiry: Enquiry } | { error: string } {
  const read = (key: string) => {
    const value = data.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  const name = read("name");
  const email = read("email");
  const phone = read("phone");
  const requestedType = read("type");
  const message = read("message");
  const type = enquiryTypes.find((item) => item === requestedType);

  if (name.length < 2 || name.length > 100) return { error: "Enter a name between 2 and 100 characters." };
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Enter a valid email address." };
  if (phone && (!/^[+\d ()-]{7,30}$/.test(phone) || phone.replace(/\D/g, "").length < 7)) return { error: "Enter a valid phone number or leave it blank." };
  if (!type) return { error: "Choose an enquiry type." };
  if (message.length < 10 || message.length > 3000) return { error: "Enter a message between 10 and 3,000 characters." };
  return { enquiry: { name, email, phone, type, message } };
}

export function enquiryText({ name, email, phone, type, message }: Enquiry) {
  return [`Name: ${name}`, `Email: ${email}`, ...(phone ? [`Phone: ${phone}`] : []), `Enquiry type: ${type}`, "", message].join("\n");
}
