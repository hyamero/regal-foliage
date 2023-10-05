import { Container } from "./Container";
import potd from "../assets/images/potd.png";
import { IoCartOutline } from "react-icons/io5";

export const Potd = () => {
  return (
    <section className="min-h-screen bg-secondary text-primary border-b-[2px] border-primary">
      <Container className="pt-56">
        <h2 className="text-9xl md:text-[9.5rem] lg:text-[11rem] tracking-tight font-neue-roman leading-none">
          POTD
        </h2>
        <p className="font-neue-light text-3xl ml-1">( plant of the day )</p>

        <div className="flex justify-between lg:flex-row flex-col items-end gap-0 lg:gap-36">
          <div className="flex flex-col gap-12 mt-36 xl:mt-0">
            <div>
              <div className="mb-5 flex gap-3 font-neue-light items-center justify-between">
                <h3 className="2xl:text-8xl sm:text-7xl text-6xl lg:text-7xl font-neue-light">
                  regal bonsai
                </h3>
                <p className="py-1 whitespace-nowrap font-neue-roman px-6 text-xl border-[2px] rounded-full border-primary">
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

            <div className="w-full h-[1px] bg-primary" />

            <div className="flex justify-between sm:flex-row flex-col gap-5 pb-44 font-neue-roman">
              <div className="flex sm:gap-5 gap-3 [&>p]:py-2 [&>p]:whitespace-nowrap [&>p]:px-6 [&>p]:sm:text-2xl text-lg [&>p]:border-[2px] [&>p]:border-primary [&>p]:rounded-full">
                <p>bonsai</p>
                <p>regal</p>
              </div>

              <button
                className="py-2 flex gap-2 items-center whitespace-nowrap px-6 sm:text-2xl text-lg border-[2px] rounded-full bg-primary text-white justify-center"
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
