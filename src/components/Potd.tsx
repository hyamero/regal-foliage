import { Container } from "./Container";
import potd from "../assets/images/potd.png";
import { IoCartOutline } from "react-icons/io5";

export const Potd = () => {
  return (
    <section className="min-h-screen border-b-[2px] border-primary bg-secondary text-primary">
      <Container className="pt-56">
        <h2 className="font-neue-roman text-9xl leading-none tracking-tight md:text-[9.5rem] lg:text-[11rem]">
          POTD
        </h2>
        <p className="ml-1 font-neue-light text-3xl">( plant of the day )</p>

        <div className="flex flex-col items-end justify-between gap-0 lg:flex-row lg:gap-36">
          <div className="mt-36 flex flex-col gap-12 xl:mt-0">
            <div>
              <div className="mb-5 flex items-center justify-between gap-3 font-neue-light">
                <h3 className="font-neue-light text-6xl sm:text-7xl lg:text-7xl 2xl:text-8xl">
                  regal bonsai
                </h3>
                <p className="whitespace-nowrap rounded-full border-[2px] border-primary px-6 py-1 font-neue-roman text-xl">
                  $269
                </p>
              </div>
              <p className="font-neue-light text-2xl">
                Meticulously crafted masterpiece boasts delicate branches,
                sculpted over years to perfection. Its regal charm and timeless
                grace make it a centerpiece of opulence and sophistication in
                any space.
              </p>
            </div>

            <div className="h-[1px] w-full bg-primary" />

            <div className="flex flex-col justify-between gap-5 pb-44 font-neue-roman sm:flex-row">
              <div className="flex gap-3 text-lg sm:gap-5 [&>p]:whitespace-nowrap [&>p]:rounded-full [&>p]:border-[2px] [&>p]:border-primary [&>p]:px-6 [&>p]:py-2 [&>p]:sm:text-2xl">
                <p>bonsai</p>
                <p>regal</p>
              </div>

              <button
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[2px] bg-primary px-6 py-2 text-lg text-white sm:text-2xl"
                type="button"
              >
                <IoCartOutline className="text-3xl" />
                <p>Add to Cart</p>
              </button>
            </div>
          </div>

          <img
            src={potd}
            alt="Regal Bonsai: Plant of the day"
            className="mx-auto"
          />
        </div>
      </Container>
    </section>
  );
};
