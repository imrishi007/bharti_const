import type { Metadata } from "next";
import Link from "next/link";
import { categories, publishedProjects, statuses } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore documented civil engineering references and sample portfolio entries for roads, bridges and water infrastructure.",
};

type ProjectSearch = { category?: string | string[]; status?: string | string[] };

function selectOption<T extends string>(value: ProjectSearch[keyof ProjectSearch], options: readonly T[]) {
  return options.find((option) => option === value) ?? "";
}

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<ProjectSearch> }) {
  const search = await searchParams;
  const category = selectOption(search.category, categories);
  const status = selectOption(search.status, statuses);
  const results = publishedProjects.filter((project) => (!category || project.category === category) && (!status || project.status === status));
  return <>
    <PageIntro title="Our Projects" label="Projects" description="Explore documented engineering references and sample portfolio entries across transport and water infrastructure." />
    <section className="section-space" aria-label="Project portfolio"><div className="container">
      <form method="get" action="/projects" className="portfolio-filter" aria-label="Filter projects">
        <label className="field">Category<select name="category" defaultValue={category}><option value="">All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="field">Status<select name="status" defaultValue={status}><option value="">All statuses</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select></label>
        <button className="action action--primary" type="submit">Apply Filters</button>
        {(category || status) && <Link href="/projects" className="action action--outline">Clear Filters</Link>}
      </form>
      <p className="results-count">{results.length} {results.length === 1 ? "entry" : "entries"}</p>
      {results.length ? <div className="project-grid">{results.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p className="empty-state">No portfolio entries match these filters. Choose a different category or status.</p>}
      <p className="image-note">Portfolio illustrations are visual placeholders. Project photographs will be added as they become available.</p>
    </div></section>
    <ContactCTA />
  </>;
}
