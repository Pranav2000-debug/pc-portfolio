import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { ProjectsSkeleton, ContactSkeleton, SectionSkeleton } from "@/components/ui/skeletons";

export default function Home() {
  return (
    <>
      {/* Critical above-the-fold content - loads immediately */}
      <Hero />
      <About />

      {/* Below-the-fold content - can be streamed */}
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>

      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </>
  );
}
