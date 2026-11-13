import type { Metadata } from "next";
import { Journey } from "@/components/journey";
import { ContactCTA, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Journey",
  description: "Company milestones since 1982, including the Chauli agreement and bridge and road engineering records.",
};

export default function JourneyPage() {
  return <>
    <PageIntro title="Our Journey" description="Four decades of civil construction, from the founding partnership in Banswara to documented road, bridge and irrigation works." />
    <Journey expanded />
    <ContactCTA />
  </>;
}
