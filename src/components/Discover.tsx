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
    <section className="flex min-h-screen flex-col gap-20 bg-secondary py-56 font-neue-roman">
      <Container>
        <h2 className="font-neue-roman text-[11rem] leading-none tracking-tight text-primary">
          discover.
        </h2>
      </Container>

      <div className="h-[1px] w-full bg-[#B1B1B1]" />

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

          <div className="sdf flex gap-5 text-3xl [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:border [&>*]:border-black [&>*]:p-2 [&>*]:text-5xl">
            <PiArrowLeftLight />
            <PiArrowRightLight />
          </div>
        </div>

        <div className="col-span-2 flex gap-10">
          {plants.map(({ name, image, price }) => (
            <div
              key={name}
              className="flex flex-col gap-4 rounded-sm bg-white p-3"
            >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full cursor-pointer object-cover object-center  transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex cursor-pointer items-center gap-1  text-xl">
                  <h4>{name}</h4>
                  <PiArrowUpRightLight />
                </div>
                <p className="whitespace-nowrap rounded-full border-[1.5px] border-primary px-4 text-base text-primary">
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
