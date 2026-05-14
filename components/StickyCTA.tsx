"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./ui/CTAButton";
import content from "@/lib/content";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 px-4 transition-all duration-300 sm:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!show}
    >
      <CTAButton
        size="lg"
        className="w-full justify-center"
      >
        {content.sticky.cta}
      </CTAButton>
    </div>
  );
}
