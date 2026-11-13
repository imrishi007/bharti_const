import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { services } from "@/content/services";
import { company, heritageImages, sources, stats } from "@/content/site";
import { Icon } from "./icon";
import { ProjectCard } from "./project-card";
import { Action, Divider, SectionHeading } from "./ui";

export function HomeHero() {
  const { props: desktop } = getImageProps({ src: heritageImages.hero, alt: "", width: 1672, height: 515, sizes: "100vw" });
  const { props: mobile } = getImageProps({ src: heritageImages.mobileHero, alt: "", width: 794, height: 425, sizes: "100vw", fetchPriority: "high" });
  return <div className="home-masthead">
    <section className="home-hero" aria-labelledby="hero-title">
      <picture className="hero-picture">
        <source media="(min-width: 761px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
        {/* getImageProps keeps the art-directed sources optimized for each screen. */}
        <img {...mobile} alt="" />
      </picture>
      <div className="hero-inner">
        <h1 id="hero-title">Building Infrastructure.<br />Connecting Communities.</h1>
        <Divider />
        <p>Civil Contractors &amp; Engineers <span className="hero-separator" aria-hidden="true">|</span> <span>Established {company.foundingYear}</span></p>
        <div className="hero-actions"><Action href="/projects">Explore Our Projects</Action><Action href="/contact" variant="outline">Get in Touch</Action></div>
      </div>
    </section>
    <dl className="stats-strip" aria-label="Company at a glance">
      {stats.map(({ icon, value, label }) => <div className="stat" key={icon}><Icon name={icon} /><div><dt>{value}</dt><dd>{label}</dd></div></div>)}
    </dl>
  </div>;
}

export function FeaturedProjects() {
  return <section className="featured-projects" aria-labelledby="featured-heading">
    <div className="container">
      <SectionHeading id="featured-heading" action={<Action href="/projects" variant="outline">View All Projects</Action>}>Our Projects</SectionHeading>
      <div className="project-grid">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} compact />)}</div>
      <p className="image-note">Bridge, road and water imagery is illustrative. Sample entries are marked.</p>
    </div>
  </section>;
}

export function Legacy() {
  return <section className="legacy-section section-space" aria-labelledby="legacy-heading"><div className="container split-layout">
    <figure className="legacy-image">
      <Image src={heritageImages.bridge} width={466} height={134} sizes="(max-width: 760px) 92vw, 46vw" alt="Illustrative bridge spanning a river" />
      <figcaption>Illustrative infrastructure imagery</figcaption>
    </figure>
    <div><h2 id="legacy-heading">Built on Trust.<br />Strengthened by Experience.</h2><Divider />
      <p>Founded in Banswara by Lalit Sanghavi and Suresh Sanghavi, Bharti Construction Company has a history of civil works in roads, bridges, irrigation and dams.</p>
      <Action href="/about" variant="outline">Discover Our Story</Action>
    </div>
  </div></section>;
}

export function ExpertisePreview() {
  return <section className="expertise-preview section-space" aria-labelledby="expertise-heading"><div className="container">
    <SectionHeading id="expertise-heading" action={<Action href="/expertise" variant="outline">View Our Expertise</Action>}>Our Expertise</SectionHeading>
    <div className="expertise-grid">{services.map((service) => <Link href={`/expertise#${service.slug}`} className="expertise-card" key={service.slug}>
      <Icon name={service.icon} /><h3>{service.title}</h3><p>{service.summary}</p><span className="text-link">Explore capability <Icon name="arrow" /></span>
    </Link>)}</div>
  </div></section>;
}

export function Credentials() {
  return <section className="credentials-section section-space" aria-labelledby="credentials-heading"><div className="container">
    <SectionHeading id="credentials-heading">A Foundation of Trust</SectionHeading>
    <div className="credentials-grid">
      <article><Icon name="file" /><h3>Company Profile</h3><p>Public records document the partnership’s founding in Banswara in 1982 and its work in civil contracting.</p><a href={sources.care.href} className="text-link">{sources.care.label}<Icon name="arrow" /></a></article>
      <article><Icon name="bridge" /><h3>Engineering References</h3><p>SVNIT Surat’s consultancy records describe bridge and elevated-road design reviews associated with the firm.</p><Link href="/projects?status=Historical+reference" className="text-link">View documented references<Icon name="arrow" /></Link></article>
    </div>
  </div></section>;
}
