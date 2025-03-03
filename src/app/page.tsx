"use client"
import Cursor from "@/components/Cursors/Cursor";
import Landingpage from "@/components/LandingPage/Landingpage";
import NavHeader from "@/components/NavHeader";
import ShortPromo from "@/components/LandingPage/ShortPromo";
import { useRef } from "react";
import WhatWeDo from "@/components/LandingPage/WhatWeDo";
import FeaturedProjects from "@/components/LandingPage/FeaturedProjects";
import OurPhilosophy from "@/components/LandingPage/OurPhilosophy";
import Resources from "@/components/LandingPage/Resources";

export default function Home() {

  const stickyElement = useRef(null);

  return (
    <div className="w-full">
      <NavHeader ref={stickyElement} />
      <Landingpage />
      <ShortPromo />
      <WhatWeDo />
      <FeaturedProjects />
      <OurPhilosophy />
      <Resources />
      {/* <Cursor stickyElement={stickyElement} /> */}
    </div>
  );
}
