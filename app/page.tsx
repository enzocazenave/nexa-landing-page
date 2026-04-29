import { Navbar } from "@/components/Navbar";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Agitation } from "@/components/sections/Agitation";
import { Solution } from "@/components/sections/Solution";
import { Timeline } from "@/components/sections/Timeline";
import { Deliverables } from "@/components/sections/Deliverables";
import { Results } from "@/components/sections/Results";
import { ForWhom } from "@/components/sections/ForWhom";
import { Authority } from "@/components/sections/Authority";
import { Guarantee } from "@/components/sections/Guarantee";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Agitation />
        <Solution />
        <Timeline />
        <Deliverables />
        <Results />
        <ForWhom />
        <Authority />
        <Guarantee />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
