import type { Metadata } from "next";
import { company, sources } from "@/content/site";
import { Icon } from "@/components/icon";
import { Journey } from "@/components/journey";
import { Action, ContactCTA, PageIntro, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "The history and founding partners of Bharti Construction Company, established in Banswara in 1982.",
};

const values = [
  { title: "Workmanship", description: "Attention to construction details and the practical requirements of each site." },
  { title: "Engineering Discipline", description: "A focus on clear drawings, coordinated site work and structures built for their intended use." },
  { title: "Public Infrastructure", description: "Civil works that support transport, irrigation and access to essential infrastructure." },
];

export default function AboutPage() {
  return <>
    <PageIntro title="About Bharti Construction Company" label="About Us" description="A civil construction partnership with roots in Banswara, Rajasthan, since 1982." />
    <section className="section-space"><div className="container content-copy">
      <h2>Our History</h2>
      <p>Brothers Lalit Sanghavi and Suresh Sanghavi founded Bharti Construction Company as a partnership in 1982. Its documented work includes road, canal and dam contracts, along with engineering references for bridges and elevated roads.</p>
      <p>The firm’s public record includes a 1997 agreement for earthen dam works at the Chauli Irrigation Project and 2022–23 consultancy entries for the Lasada bridge and an elevated road in Kota.</p>
      <a className="text-link mt-4" href={sources.care.href}><Icon name="file" />{sources.care.label}</a>
    </div></section>
    <section className="values-section section-space" aria-labelledby="values-heading"><div className="container">
      <SectionHeading id="values-heading">Our Approach</SectionHeading>
      <div className="values-grid">{values.map(({ title, description }) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>
    <section className="section-space" aria-labelledby="founders-heading"><div className="container">
      <SectionHeading id="founders-heading">Founding Partners</SectionHeading>
      <div className="founder-grid">{company.founders.map((founder) => <article className="founder-card" key={founder}><span><Icon name="person" /></span><div><h3>{founder}</h3><p>Founding partner · Portrait pending</p></div></article>)}</div>
      <p className="image-note">Current leadership details are pending company confirmation.</p>
    </div></section>
    <Journey />
    <section className="section-space"><div className="container content-copy">
      <h2>Our Commitment to Quality</h2>
      <p>Quality starts with understanding the drawings, materials and conditions that shape each site. Our infrastructure capabilities span roads, structures and water works.</p>
      <Action href="/expertise" variant="outline" className="mt-4">View Our Expertise</Action>
    </div></section>
    <ContactCTA />
  </>;
}
