import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  gsap.registerPlugin(ScrollTrigger);
  /**
   * Fn for creating a new scrollTrigger instance
   */
  function scrollTrig(
    trigger: string,
    start: string,
    scrub: number | boolean,
    toggleActions?: string,
  ) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        scrub,
        toggleActions: toggleActions || "restart none none reset",
        markers: import.meta.env.DEV,
      },
    });

    return tl;
  }

  useLayoutEffect(() => {
    /**
     * Responsible for onScroll (intersection) animation
     */

    scrollTrig("#potd", "200px bottom", false)
      .fromTo(
        "#potd h2",
        {
          y: 250,
          skewY: 7,
        },
        {
          y: 0,
          skewY: 0,
          duration: 1.3,
          ease: "power2.inOut",
        },
      )
      .fromTo(
        "#potd-desc",
        {
          opacity: 0,
          y: -10,
        },
        {
          duration: 0.7,
          opacity: 1,
          y: 0,
          ease: "power2.inOut",
        },
        "-=0.5",
      );

    scrollTrig("#potd", "200px bottom", 0.5).fromTo(
      "#bonsai-img",
      {
        y: 350,
      },
      {
        y: 0,
      },
    );

    scrollTrig("#potd", "50% bottom", false, "play none none none")
      .fromTo(
        "#potd-details",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.inOut",
        },
      )
      .fromTo(
        "#potd-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.5",
      )
      .fromTo(
        ".potd-tags",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.inOut",
        },
        "<",
      );
  }, []);

  return <div>{children}</div>;
};
