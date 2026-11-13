export const company = {
  name: "Bharti Construction Company",
  foundingYear: 1982,
  location: "Banswara, Rajasthan, India",
  description: "Civil contractors and engineers based in Banswara, Rajasthan. Established in 1982, with a history in roads, bridges and water infrastructure.",
  founders: ["Lalit Sanghavi", "Suresh Sanghavi"],
  officeAddress: "",
  phone: "",
  email: "",
  mapUrl: "",
  businessHours: "",
};

export const sources = {
  care: { label: "CARE Ratings company profile (2024)", href: "https://www.careratings.com/upload/CompanyFiles/PR/202407130731_Bharti_Construction_Company.pdf" },
  svnit: { label: "SVNIT Surat consultancy records (2022–23)", href: "https://www.svnit.ac.in/web/r%26c/pdf/22-23.pdf" },
  chauli: { label: "Rajasthan High Court judgment (2024)", href: "https://indiankanoon.org/doc/185563675/" },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export const journeyLink = { label: "Our Journey", href: "/journey" };

export const stats = [
  { icon: "calendar", value: "40+ Years", label: "Established 1982" },
  { icon: "road", value: "Roads", label: "& Highways" },
  { icon: "bridge", value: "Bridges", label: "& Structures" },
  { icon: "water", value: "Water Works", label: "Irrigation & Civil Works" },
] as const;

export const heritageImages = {
  hero: "/images/heritage/heritage-hero.webp",
  mobileHero: "/images/heritage/hero-bridge-mobile.webp",
  bridge: "/images/heritage/project-bridge-reference.webp",
  road: "/images/heritage/project-road-reference.webp",
  water: "/images/heritage/project-water-reference.webp",
  mark: "/images/heritage/chhatri-mark.png",
};
