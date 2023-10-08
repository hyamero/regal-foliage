import { scrollTrig } from "./ScrollAnimation";

/**
 * POTD SECTION
 */
export const PotdScrollTrigger = () => {
  scrollTrig("#potd", "100px bottom", false)
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

  scrollTrig("#potd", "40% bottom", true, "", "40% top")
    .fromTo(
      ".potd-details",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.inOut",
        stagger: 0.2,
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
};
