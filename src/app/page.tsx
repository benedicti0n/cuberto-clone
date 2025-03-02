"use client"
import Cursor from "@/components/Cursors/Cursor";
import Landingpage from "@/components/Landingpage";
import NavHeader from "@/components/NavHeader";
import ShortPromo from "@/components/ShortPromo";
import { useRef } from "react";

export default function Home() {

  const stickyElement = useRef(null);

  return (
    <div className="h-screen w-full">
      <NavHeader ref={stickyElement} />
      <Landingpage />
      <ShortPromo />
      <Cursor stickyElement={stickyElement} />
    </div>
  );
}
