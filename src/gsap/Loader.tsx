import { useRef } from "react";
import { gsap } from "gsap";
import { useStore } from "../hooks/useStore";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

export const Loader = () => {
  const { unmountLoader, setUnmountLoader } = useStore();

  const comp = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1,
      ease: "power3.inOut",
    });

    tl.fromTo(
      "#loader-text span",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.6,
        stagger: 0.2,
        ease: "power3.inOut",
      },
    )
      .to(
        "#loader-text span",
        {
          opacity: 0,
        },
        "+=1",
      )
      .to("#loader-bg", {
        duration: 1.5,
        ease: "power3.inOut",
        opacity: 0,
        delay: 0.5,
      })
      .fromTo(
        "#main-line",
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=1",
      )
      .fromTo(
        "#main-text span",
        {
          opacity: 0,
          skewY: 10,
          y: 160,
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "<",
      )
      .fromTo(
        "#main-content p, #main-content button",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=1",
      )
      .fromTo(
        ".nav-item",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "<",
      )
      .to("body", {
        overflowY: "auto",
        onComplete: () => setUnmountLoader(),
      });
  }, [setUnmountLoader, unmountLoader]);

  return (
    <div
      ref={comp}
      id="loader-bg"
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-secondary"
    >
      <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center">
        <h1
          id="loader-text"
          className="font-neue-light text-4xl text-primary md:text-6xl lg:text-7xl [&>span]:inline-block"
        >
          <span>Regal</span> <span>Foliage</span>
          <span>.</span>
        </h1>
      </div>
    </div>
  );
};
