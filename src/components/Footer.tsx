import React from "react";
import { Container } from "./Container";

export const Footer = () => {
  const data = [
    {
      title: "Google Awards",
      items: [
        {
          title: "Awards",
          link: "https://awards.gdsc-usls.live/awards",
        },
        {
          title: "Ticket",
          link: "https://awards.gdsc-usls.live/ticket",
        },
        {
          title: "Homepage",
          link: "https://awards.gdsc-usls.live",
          route: false,
        },
      ],
    },

    {
      title: "Projects",
      items: [
        {
          title: "Landing Page",
          link: "https://github.com/gdsc-usls/landing",
        },
        {
          title: "Google Awards",
          link: "https://github.com/gdsc-usls/google-awards",
        },
        {
          title: "ID Generator",
          link: "https://github.com/gdsc-usls/id-generator",
        },
        {
          title: "Certificate Generator",
          link: "https://github.com/gdsc-usls/certificate-generator",
        },
      ],
    },

    {
      title: "Contact",
      items: [
        {
          title: "Github",
          link: "https://github.com/gdsc-usls",
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/dsc.usls",
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/gdsc_usls/",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#181A1B] font-neue-roman  contain flex w-full flex-col justify-between border-t-[1px] border-t-gray-500 pt-16 font-montserrat ">
      <Container className="flex w-full flex-col justify-between gap-20 whitespace-nowrap lg:flex-row lg:gap-40 xl:gap-96">
        <div className="text-white">
          <div className="block text-3xl font-medium">
            <p className="font-merchant-thin-condensed">Regal Foliage</p>
            <p className="text-xl font-light text-gray-400">
              Transforming spaces <br />
              with nature's opulence.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between">
          {data.map((data) => {
            const { title, items } = data;

            return (
              <div key={title} className="space-y-2 text-sm md:text-base">
                <h3 className="font-neue-roman text-white">{title}</h3>
                <ul className="flex flex-col  space-y-2 font-normal text-gray-400 [&>li>a:hover]:text-gray-500 [&>li>a:hover]:transition-all">
                  {items.map((item) => (
                    <li key={item.title}>
                      {item.route ? (
                        <button className="font-neue-light" type="button">
                          {item.title}
                        </button>
                      ) : (
                        <a
                          target="_blank"
                          rel="noreferrer noopener"
                          href={item.link}
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
      <p className="mt-28 pb-8 text-center text-xs text-gray-400 md:text-base">
        &copy; 2023 OMSIMOS&copy;, Regal Foliage. All Rights Reserved.
      </p>
    </footer>
  );
};
