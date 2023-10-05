import { Container } from "./Container";
import { plant1, plant2, plant3 } from "../assets/images";
import {
  PiArrowUpRightLight,
  PiArrowRightLight,
  PiArrowLeftLight,
} from "react-icons/pi";
// import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

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
    "Bonsai",
    "Jade",
    "Saffron",
    "Obliqua",
  ];

  return (
    <section className="font-neue-roman flex flex-col gap-20 py-56 bg-secondary min-h-screen">
      <Container>
        <h2 className="text-primary text-[11rem] tracking-tight font-neue-roman leading-none">
          discover.
        </h2>
      </Container>

      <div className="w-full h-[1px] bg-[#B1B1B1]" />

      <Container className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-10">
          <h3 className="text-3xl">
            Transforming spaces with nature's opulence.
          </h3>

          <ul className="flex flex-col gap-2">
            {plantsTag.map((plant) => (
              <li key={plant} className="cursor-pointer">
                {plant}
              </li>
            ))}
          </ul>

          <div className="flex gap-5 text-3xl [&>*]:border [&>*]:p-2 [&>*]:rounded-full [&>*]:text-5xl [&>*]:border-black [&>*]:cursor-pointer">
            <PiArrowLeftLight />
            <PiArrowRightLight />
          </div>
        </div>

        <div className="flex gap-10 col-span-2">
          {plants.map(({ name, image, price }) => (
            <div
              key={name}
              className="bg-white p-3 gap-4 rounded-sm flex flex-col"
            >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out  object-cover object-center h-full w-full"
                />
              </div>
              <div className="flex justify-between">
                <div className="text-xl flex gap-1 cursor-pointer  items-center">
                  <h4>{name}</h4>
                  <PiArrowUpRightLight />
                </div>
                <p className="whitespace-nowrap px-4 text-base border-[1.5px] rounded-full border-primary text-primary">
                  ${price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
