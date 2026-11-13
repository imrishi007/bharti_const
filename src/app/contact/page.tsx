import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Icon } from "@/components/icon";
import { PageIntro } from "@/components/ui";
import { company } from "@/content/site";
import { deliverySettings } from "@/lib/enquiry-delivery";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bharti Construction Company in Banswara for project enquiries and business partnerships.",
};

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return <>
    <PageIntro title="Get in Touch" label="Contact" description="For project enquiries, partnerships and company information." />
    <section className="section-space"><div className="container contact-layout">
      <div className="contact-card details-panel">
        <h2>Office Location</h2>
        <p className="with-icon"><Icon name="pin" />{company.location}</p>
        {company.officeAddress && <p>{company.officeAddress}</p>}
        {company.phone && <p><a href={`tel:${company.phone}`}>{company.phone}</a></p>}
        {company.email && <p><a href={`mailto:${company.email}`}>{company.email}</a></p>}
        {company.businessHours && <p>{company.businessHours}</p>}
        {company.mapUrl && <iframe className="contact-map" title="Office location map" src={company.mapUrl} loading="lazy" />}
        {!company.officeAddress && <p className="form-privacy">Street address, official phone number and email are pending confirmation.</p>}
      </div>
      <EnquiryForm deliveryEnabled={!!deliverySettings()} />
    </div></section>
  </>;
}
