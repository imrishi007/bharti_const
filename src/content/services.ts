import { heritageImages } from "./site";

export const services = [
  {
    slug: "roads", icon: "road", title: "Roads & Highways", image: heritageImages.road,
    alt: "Illustrative highway in hilly terrain",
    summary: "Road construction, pavement strengthening and widening for regional transport corridors.",
    scope: ["Road formation and pavement works", "Strengthening and widening", "Drainage and roadside civil works"],
    category: "Roads",
  },
  {
    slug: "bridges", icon: "bridge", title: "Bridges & Structures", image: heritageImages.bridge,
    alt: "Illustrative bridge crossing a river",
    summary: "Bridge and elevated-road works that support reliable regional connections.",
    scope: ["River crossings and bridge approaches", "Bridge substructures and superstructures", "Elevated-road and associated civil works"],
    category: "Bridges",
  },
  {
    slug: "irrigation", icon: "water", title: "Irrigation & Canals", image: heritageImages.water,
    alt: "Illustrative water infrastructure with a spillway",
    summary: "Civil works for irrigation channels, canals and associated hydraulic structures.",
    scope: ["Canal and channel works", "Hydraulic and drainage structures", "Earthworks for water infrastructure"],
    category: "Irrigation",
  },
  {
    slug: "dams", icon: "dam", title: "Dams & Civil Works", image: heritageImages.water,
    alt: "Illustrative concrete dam and spillway",
    summary: "Civil construction for dams and associated infrastructure across water-resource projects.",
    scope: ["Dam and embankment earthworks", "Outlet and associated civil structures", "Site preparation and infrastructure works"],
    category: "Dams",
  },
] as const;
