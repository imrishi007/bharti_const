import { Action, PageIntro } from "@/components/ui";

export default function NotFound() {
  return <>
    <PageIntro title="Page Not Found" description="This address does not match a page on the Bharti Construction Company website." />
    <div className="container section-space"><Action href="/">Back to Home</Action></div>
  </>;
}
