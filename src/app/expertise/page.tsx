import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { Action, ContactCTA, PageIntro } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Civil contracting expertise in roads and highways, bridges and structures, irrigation and canals, and dams and civil works.",
};

export default function ExpertisePage() {
  return <>
    <PageIntro title="Our Expertise" label="Expertise" description="Civil engineering capabilities across transport links, irrigation and water infrastructure." />
    {services.map((service) => <section key={service.slug} id={service.slug} className="section-space service-row" aria-labelledby={`service-${service.slug}`}>
      <div className="container split-layout">
        <div>
          <Icon name={service.icon} className="service-icon" />
          <h2 id={`service-${service.slug}`}>{service.title}</h2>
          <p className="mt-3">{service.summary}</p>
          <ul className="scope-list">{service.scope.map((item) => <li key={item}>{item}</li>)}</ul>
          <Action variant="outline" href={`/projects?category=${encodeURIComponent(service.category)}`}>Explore {service.category} Entries</Action>
        </div>
        <figure className="detail-figure">
          <Image src={service.image} width={466} height={134} sizes="(max-width: 760px) 92vw, 45vw" alt={service.alt} />
          <figcaption>Illustrative imagery</figcaption>
        </figure>
      </div>
    </section>)}
    <ContactCTA />
  </>;
}
