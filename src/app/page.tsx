import { Credentials, ExpertisePreview, FeaturedProjects, HomeHero, Legacy } from "@/components/home-sections";
import { Journey } from "@/components/journey";
import { ContactCTA } from "@/components/ui";

export default function Home() {
  return <>
    <HomeHero />
    <FeaturedProjects />
    <Journey />
    <Legacy />
    <ExpertisePreview />
    <Credentials />
    <ContactCTA />
  </>;
}
