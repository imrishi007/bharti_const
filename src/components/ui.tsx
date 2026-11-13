import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, Ornament } from "./icon";

export function Action({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "light"; className?: string }) {
  return <Link href={href} className={`action action--${variant} ${className}`}>{children}<Icon name="arrow" /></Link>;
}

export function Divider() {
  return <div className="ornament-divider" aria-hidden="true"><span /><Ornament /><span /></div>;
}

export function SectionHeading({ id, children, action }: { id?: string; children: ReactNode; action?: ReactNode }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2><span aria-hidden="true" />{action}</div>;
}

export function PageIntro({ title, description, label }: { title: string; description: string; label?: string }) {
  return <section className="page-intro"><div className="container">
    <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{label ?? title}</span></nav>
    <h1>{title}</h1><Divider /><p>{description}</p>
  </div></section>;
}

export function ContactCTA() {
  return <section className="contact-cta"><div className="container contact-cta__inner">
    <div><h2>Let’s Build Something That Lasts.</h2><p>For project enquiries and business partnerships, connect with Bharti Construction Company.</p></div>
    <Action href="/contact" variant="light">Contact Us</Action>
  </div></section>;
}
