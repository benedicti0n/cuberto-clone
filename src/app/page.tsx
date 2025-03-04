"use client";
import { useRef, useState } from "react";
import Cursor from "@/components/Cursors/Cursor";
import Landingpage from "@/components/LandingPage/Landingpage";
import NavHeader from "@/components/NavHeader";
import ShortPromo from "@/components/LandingPage/ShortPromo";
import WhatWeDo from "@/components/LandingPage/WhatWeDo";
import FeaturedProjects from "@/components/LandingPage/FeaturedProjects";
import OurPhilosophy from "@/components/LandingPage/OurPhilosophy";
import Resources from "@/components/LandingPage/Resources";
import UiProjectSection from "@/components/LandingPage/UiProjectSection";
import Socials from "@/components/LandingPage/Socials";
import SideNav from "@/components/SideNav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const stickyElement = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full min-h-screen">
      <NavHeader ref={stickyElement} onClick={() => setIsOpen((prev) => !prev)} />
      <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Landingpage />
      <ShortPromo />
      <WhatWeDo />
      <FeaturedProjects />
      <OurPhilosophy />
      <Resources />
      <UiProjectSection />
      <Socials />
      <Cursor stickyElement={stickyElement} />
    </div>
  );
}
