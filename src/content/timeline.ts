import { sources } from "./site";

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  detail: string;
  verification: "Documented" | "Company statement" | "Pending";
  published: boolean;
  source?: { label: string; href: string };
  project?: string;
  image?: { src: string; alt: string; caption: string };
}

const milestones: Milestone[] = [
  {
    id: "1982", year: "1982", title: "The Beginning",
    description: "Lalit Sanghavi and Suresh Sanghavi established Bharti Construction Company in Banswara, Rajasthan.",
    detail: "The brothers founded the firm as a civil construction partnership. Roads, canals and dams are among the areas documented in its company profile.",
    verification: "Documented", published: true, source: sources.care,
  },
  {
    id: "1997", year: "1997", title: "Chauli Irrigation Project",
    description: "A contract signed in March records the firm’s involvement in earth dam works in Jhalawar.",
    detail: "Rajasthan High Court records identify a 28 March 1997 agreement for an earthen dam section at the Chauli Irrigation Project in Pirawa, Jhalawar district.",
    verification: "Documented", published: true, source: sources.chauli, project: "chauli-irrigation-project",
  },
  {
    id: "2022-23", year: "2022–23", title: "Bridge and Road Design Reviews",
    description: "SVNIT Surat records design and drawing reviews for the Lasada bridge and an elevated road in Kota.",
    detail: "The consultancy entries name Bharti Construction Company in connection with design and drawing proof-checking for the high-level bridge across the Mahi River and the elevated road on Borkheda–Baran Road.",
    verification: "Documented", published: true, source: sources.svnit, project: "lasada-high-level-bridge",
  },
  {
    id: "present", year: "Present", title: "Continuing the Legacy",
    description: "Four decades of civil contracting and engineering heritage, rooted in Banswara.",
    detail: "Additional milestones will be added as historical photographs, project records and dates become available.",
    verification: "Company statement", published: true,
  },
];

export const publishedMilestones = milestones.filter((milestone) => milestone.published);
