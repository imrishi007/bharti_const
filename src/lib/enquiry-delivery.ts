export function deliverySettings() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;
  return apiKey && from && to ? { apiKey, from, to } : undefined;
}
