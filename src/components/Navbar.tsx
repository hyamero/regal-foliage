/* eslint-disable no-param-reassign */
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import useLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

const navItems = [
  {
    text: "Home",
    href: "home",
  },
  {
    text: "Featured",
    href: "potd",
  },
  {
    text: "Showcase",
    href: "showcase",
  },
  {
    text: "Discover",
    href: "discover",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen: GSAPTimeline = gsap.timeline();
  const menuClose: GSAPTimeline = gsap.timeline();

  const handleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    menuOpen
      .to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.easeInOut",
        duration: 0.5,
      })
      .to(
        "body",
        {
          overflowY: "hidden",
        },
        "<",
      )
      .fromTo(
        ".menu-item",
        {
          y: -150,
          opacity: 0,
          skewX: -10,
        },
        {
          y: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.7,
          stagger: -0.2,
          ease: "power4.out",
        },
        "-=0.1",
      );
  };

  const closeMenu = () => {
    menuClose
      .fromTo(
        ".menu-item",
        {
          y: 0,
          opacity: 1,
          skewX: 0,
        },
        {
          skewX: -10,
          opacity: 0,
          y: -150,
          duration: 0.7,
          stagger: 0.1,
          ease: "power4.out",
        },
      )
      .to(
        "body",
        {
          overflowY: "auto",
        },
        "<",
      )
      .to(
        ".menu",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power2.easeInOut",
          duration: 0.5,
        },
        "-=0.4",
      );
  };

  const scrollTo = (scrollElement: string, offsetY: number) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${scrollElement}`, offsetY },
      ease: "power2.easeOut",
    });
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 mx-auto mt-10 flex w-[90%] max-w-screen-xl justify-between text-white mix-blend-difference">
        <button
          className="nav-item font-neue-roman text-2xl"
          onClick={() => {
            scrollTo("home", 0);
          }}
        >
          Regal Foliage.
        </button>

        <button
          type="button"
          className="nav-item menu-burger group flex w-8 cursor-pointer flex-col items-center justify-center space-y-1 py-3 [&>span]:block [&>span]:h-[1.5px] [&>span]:w-full [&>span]:transform [&>span]:bg-white [&>span]:transition [&>span]:duration-300"
          onClick={() => handleMenu()}
        >
          <span
            className={`${
              isOpen
                ? "translate-y-[3px] rotate-45 opacity-100 group-hover:opacity-50"
                : "opacity-100 group-hover:opacity-50"
            }`}
          />
          <span
            className={`${
              isOpen
                ? "-translate-y-[3px] -rotate-45 opacity-100 group-hover:opacity-50"
                : "opacity-100 group-hover:opacity-50"
            }`}
          />
        </button>
      </nav>
      {/**
       * MENU COMPONENT
       */}
      <Menu handleMenu={handleMenu} />
    </>
  );
};

const Menu = ({ handleMenu }: { handleMenu: () => void }) => {
  useLayoutEffect(() => {
    const menuItems = [...document.querySelectorAll(".menu-item")];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menuItems.forEach((item: any) => {
      console.log(item);
      const word = item.children[0].innerText.split("");
      item.children[0].innerHTML = "";
      word.forEach((letter: string, idx: number) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
      });

      const cloneDiv = item.children[0].cloneNode(true);
      cloneDiv.style.position = "absolute";
      cloneDiv.style.left = "0";
      cloneDiv.style.top = "0";
      item.appendChild(cloneDiv);
    });
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (scrollElement: string, offsetY: number) => {
    handleMenu();

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${scrollElement}`, offsetY },
      ease: "power2.easeOut",
    });
  };

  return (
    <div className="menu fixed left-0 top-0 z-30 grid h-screen w-screen place-items-center justify-center space-y-1 bg-primary text-secondary [clipPath:polygon(0%_0%,_100%_0%,_100%_0%,_0%_0%)]">
      <div className="flex flex-col gap-5">
        {navItems.map(({ text, href }) => (
          <button
            type="button"
            key={text}
            className="menu-item font-neue-light text-5xl opacity-0"
            onClick={() => {
              scrollToSection(href, 0);
            }}
          >
            <div className="col-start-2 row-start-2 flex">
              <span className="menu-item-text">{text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
