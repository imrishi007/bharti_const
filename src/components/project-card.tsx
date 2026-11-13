import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "./icon";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <article className={`project-card${compact ? " project-card--compact" : ""}`}>
    <Link href={`/projects/${project.slug}`}>
      <div className="project-media">
        {project.image
          ? <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 600px) 92vw, (max-width: 960px) 46vw, 31vw" />
          : <div className="image-placeholder"><Icon name="file" /><span>Project photo pending</span></div>}
        {!compact && <span className="image-tag">{project.status}</span>}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-location with-icon"><Icon name="pin" />{project.location}</p>
        {!compact && <p className="project-description">{project.summary}</p>}
        {!compact && <span className="text-link">View details <Icon name="arrow" /></span>}
      </div>
    </Link>
  </article>;
}
