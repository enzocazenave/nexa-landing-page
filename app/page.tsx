import { Navbar } from "@/components/Navbar";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Authority } from "@/components/sections/Authority";
import { Results } from "@/components/sections/Results";
import { Timeline } from "@/components/sections/Timeline";
import { Process } from "@/components/sections/Process";
import { ForWhom } from "@/components/sections/ForWhom";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <>
      <AnalyticsTracker />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Authority />
        <Results />
        <Timeline />
        <ForWhom />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
