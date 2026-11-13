"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { heritageImages, journeyLink, navigation } from "@/content/site";
import { Icon } from "./icon";

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand${footer ? " brand--footer" : ""}`} aria-label="Bharti Construction Company home">
    <Image src={heritageImages.mark} width={88} height={79} unoptimized alt="" />
    <span>Bharti Construction<br />Company</span>
  </Link>;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    links.current?.querySelector("a")?.focus();
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="header-arch header-arch--left" aria-hidden="true" />
    <div className="header-arch header-arch--right" aria-hidden="true" />
    <div className="header-inner">
      <Brand />
      <button type="button" ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
      <nav ref={links} id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? " is-open" : ""}`}>
        {[...navigation.slice(0, 2), journeyLink, ...navigation.slice(2)].map(({ href, label }) => {
          const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
          return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} className={href === journeyLink.href ? "mobile-journey" : undefined}>{label}</Link>;
        })}
      </nav>
    </div>
  </header>;
}
