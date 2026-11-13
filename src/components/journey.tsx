import Image from "next/image";
import Link from "next/link";
import { publishedMilestones } from "@/content/timeline";
import { Action, SectionHeading } from "./ui";
import { Icon } from "./icon";

export function Journey({ expanded = false }: { expanded?: boolean }) {
  return <section id="journey" className={`journey-section section-space${expanded ? " journey-section--expanded" : ""}`} aria-labelledby="journey-heading">
    <div className="container">
      <SectionHeading id="journey-heading" action={!expanded && <Action href="/journey" variant="outline">Explore Our Journey</Action>}>{expanded ? "Milestones Since 1982" : "Our Journey"}</SectionHeading>
      {!expanded && <p className="section-lede">Four decades of civil construction, from our beginnings in Banswara to infrastructure works across Rajasthan.</p>}
      <ol className="timeline">
        {publishedMilestones.map((milestone) => <li className="timeline-item" key={milestone.id} id={`milestone-${milestone.id}`}>
          <p className="timeline-year">{milestone.year}</p>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-card">
            <h3>{milestone.title}</h3>
            <p>{expanded ? milestone.detail : milestone.description}</p>
            {expanded && milestone.image && <figure className="timeline-image"><Image src={milestone.image.src} alt={milestone.image.alt} width={520} height={280} /><figcaption>{milestone.image.caption}</figcaption></figure>}
            {expanded && milestone.source && <a className="text-link" href={milestone.source.href}><Icon name="file" />{milestone.source.label}</a>}
            {expanded && milestone.project && <Link className="text-link" href={`/projects/${milestone.project}`}>Project reference<Icon name="arrow" /></Link>}
          </div>
        </li>)}
      </ol>
    </div>
  </section>;
}
