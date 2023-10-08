import { scrollTrig } from "./ScrollAnimation";

export const DiscoverScrollTrigger = () => {
  scrollTrig("#discover", "100px bottom", false).fromTo(
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

  scrollTrig("#discover", "30% bottom", true, "", "center 30%").fromTo(
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
};
