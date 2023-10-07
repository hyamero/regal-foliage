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

  useLayoutEffect(() => {
    /**
     * Responsible for onScroll (intersection) animation
     */

    /**
     * POTD SECTION
     */
    scrollTrig("#potd", "top bottom", false)
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

    scrollTrig("#potd", "180px bottom", 0.5).fromTo(
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

    /**
     * SHOWCASE SECTION
     */
    scrollTrig("#showcase", "top bottom", false)
      .fromTo(
        "#showcase h2",
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
        "#showcase-desc",
        {
          opacity: 0,
        },
        {
          duration: 0.7,
          opacity: 1,
          ease: "power2.inOut",
        },
        "-=0.5",
      );

    scrollTrig("#showcase", "60% bottom", true, "", "65% top").fromTo(
      ".showcase-desc-stagger",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.inOut",
      },
    );

    /**
     * DISCOVER SECTION
     */
    scrollTrig("#discover", "top bottom", false).fromTo(
      "#discover h2",
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
    );

    scrollTrig("#discover", "40% bottom", false, "play none none none")
      .fromTo(
        ".discover-nav-stagger",
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.inOut",
        },
      )
      .fromTo(
        ".discover-product",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.inOut",
        },
        "-=0.9",
      );
  }, []);

  return <div>{children}</div>;
};
