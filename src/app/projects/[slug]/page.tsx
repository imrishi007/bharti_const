import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA, Divider, SectionHeading } from "@/components/ui";
import { publishedProjects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = publishedProjects.filter((item) => item.slug !== project.slug)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 3);

  return <>
    <section className="page-intro"><div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/projects">Projects</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav>
      <h1>{project.title}</h1><Divider /><p>{project.summary}</p>
    </div></section>
    <section className="section-space"><div className="container detail-layout">
      <div className="content-copy">
        <figure className="detail-figure">
          {project.image ? <Image src={project.image.src} width={466} height={134} sizes="(max-width: 760px) 92vw, 56vw" alt={project.image.alt} />
            : <div className="image-placeholder"><Icon name="file" />Project photograph pending</div>}
          {project.image?.illustrative && <figcaption>Illustrative image · Site photography pending</figcaption>}
        </figure>
        <h2>Scope of Work</h2><ul className="scope-list">{project.scope.map((item) => <li key={item}>{item}</li>)}</ul>
        {project.source && <a href={project.source.href} className="text-link"><Icon name="file" />{project.source.label}</a>}
      </div>
      <aside className="details-panel" aria-labelledby="project-details">
        <h2 id="project-details">Project Details</h2>
        <dl className="detail-list">
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Location</dt><dd>{project.location}</dd></div>
          <div><dt>Portfolio status</dt><dd>{project.status}</dd></div>
          {project.year && <div><dt>Record year</dt><dd>{project.year}</dd></div>}
          {project.client && <div><dt>Department</dt><dd>{project.client}</dd></div>}
          {project.startYear && <div><dt>Start year</dt><dd>{project.startYear}</dd></div>}
          {project.completionYear && <div><dt>Completion year</dt><dd>{project.completionYear}</dd></div>}
          {!project.startYear && !project.completionYear && <div><dt>Construction dates</dt><dd>Pending confirmation</dd></div>}
        </dl>
      </aside>
    </div></section>
    {!!project.gallery?.length && <section className="section-space" aria-labelledby="gallery-heading"><div className="container">
      <SectionHeading id="gallery-heading">Project Gallery</SectionHeading>
      <div className="project-grid">{project.gallery.map((photo) => <figure className="detail-figure" key={photo.src}>
        <Image src={photo.src} alt={photo.alt} width={800} height={450} sizes="(max-width: 540px) 92vw, (max-width: 960px) 46vw, 31vw" />
        {(photo.caption || photo.illustrative) && <figcaption>{photo.caption}{photo.caption && photo.illustrative && " · "}{photo.illustrative && "Illustrative imagery"}</figcaption>}
      </figure>)}</div>
    </div></section>}
    {!!related.length && <section className="related-section section-space" aria-labelledby="related-heading"><div className="container">
      <SectionHeading id="related-heading">Related Projects</SectionHeading>
      <div className="project-grid">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div>
    </div></section>}
    <ContactCTA />
  </>;
}
