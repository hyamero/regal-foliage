import React from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

import {
  PotdScrollTrigger,
  ShowcaseScrollTrigger,
  DiscoverScrollTrigger,
} from "./scrollTriggers";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fn for creating a new scrollTrigger instance
 */
export function scrollTrig(
  trigger: string,
  start: string,
  scrub: number | boolean,
  toggleActions?: string,
  end?: string,
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      scrub,
      toggleActions: toggleActions || "restart none none reset",
      end,
      markers: import.meta.env.DEV,
    },
  });

  return tl;
}

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const comp = React.useRef<HTMLDivElement>(null);
  /**
   * Lenis Smooth Scrolling
   */
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      PotdScrollTrigger();
      ShowcaseScrollTrigger();
      DiscoverScrollTrigger();
    }, comp);
    return () => ctx.revert();
  }, []);

  return <div ref={comp}>{children}</div>;
};
