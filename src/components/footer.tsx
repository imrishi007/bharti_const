import Link from "next/link";
import { company, journeyLink, navigation } from "@/content/site";
import { services } from "@/content/services";
import { Brand } from "./header";
import { Icon } from "./icon";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand"><Brand footer /><p>Civil Contractors &amp; Engineers<br />Established {company.foundingYear}</p></div>
      <div><h2>Explore</h2><ul>{[...navigation.slice(0, 2), journeyLink, ...navigation.slice(2)].map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>
      <div><h2>Expertise</h2><ul>{services.map((service) => <li key={service.slug}><Link href={`/expertise#${service.slug}`}>{service.title}</Link></li>)}</ul></div>
      <div><h2>Find Us</h2><p className="with-icon"><Icon name="pin" />{company.location}</p>
        {company.email && <p><a href={`mailto:${company.email}`}>{company.email}</a></p>}
        {company.phone && <p><a href={`tel:${company.phone}`}>{company.phone}</a></p>}
      </div>
    </div>
    <div className="container footer-bottom">© {new Date().getFullYear()} {company.name}</div>
  </footer>;
}
