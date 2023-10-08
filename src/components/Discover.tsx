import { Container } from "./Container";
import { plant1, plant2, plant3 } from "../assets/images";
import {
  PiArrowUpRightLight,
  PiArrowRightLight,
  PiArrowLeftLight,
} from "react-icons/pi";
import { useState } from "react";
import ProductModal from "./modals/ProductModal";

export const Discover = () => {
  const plants = [
    {
      name: "Regal Bonsai",
      image: plant1,
      price: 269,
    },
    {
      name: "Swiss Jade",
      image: plant2,
      price: 299,
    },
    {
      name: "Obliqua",
      image: plant3,
      price: 249,
    },
  ];

  const plantsTag = [
    "Bonsai",
    "Jade",
    "Saffron",
    "Obliqua",
    "Bonsa",
    "Jadei",
    "Saffro",
    "Obliua",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: 0,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(name: string, price: number) {
    setProductDetails({ name, price });
    setIsOpen(true);
  }

  return (
    <>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        {...productDetails}
      />

      <section
        id="discover"
        className="flex min-h-screen flex-col gap-20 bg-secondary py-56 font-neue-roman text-primary"
      >
        <Container className="overflow-hidden">
          <h2 className="font-neue-roman leading-none tracking-tight [fontSize:clamp(3rem,20vw,12rem)]">
            discover.
          </h2>
        </Container>

        <div className="h-[1px] w-full bg-[#B1B1B1]" />

        <Container className="flex grid-cols-3 flex-col gap-8 xl:grid">
          <div className="flex flex-col gap-10">
            <h3 className="discover-nav-stagger text-2xl md:text-3xl">
              Transforming spaces with nature's opulence.
            </h3>

            <div className="flex flex-row items-center justify-between gap-8 xl:flex-col">
              <ul className="discover-nav-stagger flex flex-wrap gap-4 xl:flex-col xl:flex-nowrap xl:gap-2 xl:self-start">
                {plantsTag.map((plant) => (
                  <li key={plant} className="cursor-pointer ">
                    {plant}
                  </li>
                ))}
              </ul>

              <div className="discover-nav-stagger flex gap-5 self-end text-3xl sm:self-start md:justify-normal md:px-0 [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:border [&>*]:border-black [&>*]:p-2 [&>*]:text-5xl">
                <PiArrowLeftLight />
                <PiArrowRightLight />
              </div>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
            {plants.map(({ name, image, price }) => (
              <div
                key={name}
                onClick={() => openModal(name, price)}
                className="discover-product flex flex-col gap-4 rounded-sm bg-white p-3 sm:w-auto"
              >
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full cursor-pointer object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex cursor-pointer items-center gap-1 text-xl">
                    <h4>{name}</h4>
                    <PiArrowUpRightLight />
                  </div>
                  <p className="whitespace-nowrap rounded-full border-[1.5px] border-primary px-4 text-base">
                    ${price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
