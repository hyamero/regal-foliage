import { scrollTrig } from "./ScrollAnimation";

export const ShowcaseScrollTrigger = () => {
  scrollTrig("#showcase", "100px bottom", false)
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

  scrollTrig("#showcase", "60% bottom", true, "", "70% top").fromTo(
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
};
