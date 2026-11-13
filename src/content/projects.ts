import { heritageImages, sources } from "./site";

export const categories = ["Roads", "Bridges", "Irrigation", "Dams", "Other Civil Works"] as const;
export const statuses = ["Historical reference", "Sample entry", "Completed", "Ongoing"] as const;

interface ProjectImage { src: string; alt: string; illustrative?: boolean; caption?: string }

interface Project {
  slug: string;
  title: string;
  location: string;
  category: (typeof categories)[number];
  status: (typeof statuses)[number];
  verification: "Documented" | "Sample" | "Needs confirmation";
  published: boolean;
  featured?: boolean;
  image?: ProjectImage;
  gallery?: ProjectImage[];
  startYear?: number;
  completionYear?: number;
  summary: string;
  scope: string[];
  year?: string;
  client?: string;
  source?: { label: string; href: string };
}

const projects: Project[] = [
  {
    slug: "lasada-high-level-bridge", title: "Lasada High-Level Bridge",
    location: "Mahi River, SH-32, Rajasthan", category: "Bridges",
    status: "Historical reference", verification: "Documented", published: true, featured: true,
    image: { src: heritageImages.bridge, alt: "Illustration of a high-level bridge crossing a wide river", illustrative: true },
    summary: "SVNIT Surat lists design and drawing proof-checking for a high-level bridge across the Mahi River on the Udaipur–Banswara Road.",
    scope: ["High-level river crossing at kilometre 218 on SH-32", "Design and drawing proof-checking recorded in the SVNIT consultancy register", "Construction dates, current status and site photographs are pending company confirmation"],
    year: "2022–23", source: sources.svnit,
  },
  {
    slug: "road-strengthening-widening", title: "Road Strengthening & Widening",
    location: "Banswara, Rajasthan · Sample entry", category: "Roads",
    status: "Sample entry", verification: "Sample", published: true, featured: true,
    image: { src: heritageImages.road, alt: "Illustration of a paved highway curving through rocky hills", illustrative: true },
    summary: "An illustrative portfolio entry for pavement strengthening and road widening. A verified road contract and its details will replace this sample.",
    scope: ["Example scope includes pavement strengthening and shoulder improvements", "Alignment, location and construction dates to be supplied with the approved project record"],
  },
  {
    slug: "irrigation-water-infrastructure", title: "Irrigation & Water Infrastructure",
    location: "Rajasthan · Sample entry", category: "Irrigation",
    status: "Sample entry", verification: "Sample", published: true, featured: true,
    image: { src: heritageImages.water, alt: "Illustration of water flowing down a dam spillway", illustrative: true },
    summary: "An illustrative portfolio entry covering civil works for irrigation and water management. An approved project record will replace this sample.",
    scope: ["Example scope includes irrigation channels and associated hydraulic structures", "Project specifications, department and construction dates to be confirmed"],
  },
  {
    slug: "chauli-irrigation-project", title: "Chauli Irrigation Project",
    location: "Pirawa, Jhalawar, Rajasthan", category: "Dams",
    status: "Historical reference", verification: "Documented", published: true,
    summary: "A Rajasthan High Court judgment records a 1997 agreement with Bharti Construction Company for part of an earthen dam at the Chauli Irrigation Project.",
    scope: ["Earthen dam section in Jhalawar district", "Agreement recorded on 28 March 1997", "Construction dates, completion status and site photographs are pending company confirmation"],
    year: "1997", client: "Irrigation Circle, Jhalawar", source: sources.chauli,
  },
  {
    slug: "kota-elevated-road", title: "Borkheda–Baran Elevated Road",
    location: "Kota, Rajasthan", category: "Other Civil Works",
    status: "Historical reference", verification: "Documented", published: true,
    summary: "The SVNIT Surat consultancy register records detailed design and drawing proof-checking for an elevated road on Borkheda–Baran Road, Kota.",
    scope: ["Elevated-road design and drawing proof-checking", "Construction dates, completion status and site photographs are pending company confirmation"],
    year: "2022–23", source: sources.svnit,
  },
];

export const publishedProjects = projects.filter((project) => project.published);
export const featuredProjects = publishedProjects.filter((project) => project.featured);
export type { Project };
