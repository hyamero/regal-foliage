import { Container } from "./Container";
import potd from "../assets/images/potd.png";
import { IoCartOutline } from "react-icons/io5";

export const Potd = () => {
  return (
    <section
      id="potd"
      className="min-h-screen overflow-y-hidden border-b-[2px] border-primary bg-secondary text-primary"
    >
      <Container className="pt-56">
        <div className="overflow-hidden">
          <h2 className="font-neue-roman leading-none tracking-tight [fontSize:clamp(3rem,25vw,11rem)]">
            POTD
          </h2>
        </div>
        <p id="potd-desc" className="ml-1 font-neue-light text-2xl md:text-3xl">
          ( plant of the day )
        </p>

        <div className="flex flex-col items-end justify-between gap-0 lg:flex-row lg:gap-36">
          <div className="mt-36 flex flex-col gap-12 xl:mt-0">
            <div>
              <div className="potd-details mb-5 flex items-center justify-between gap-3 font-neue-light">
                <h3 className="font-neue-light text-6xl sm:text-7xl lg:text-7xl 2xl:text-8xl">
                  regal bonsai
                </h3>
                <p className="whitespace-nowrap rounded-full border-[2px] border-primary px-6 py-1 font-neue-roman text-xl">
                  $269
                </p>
              </div>
              <p className="potd-details font-neue-light text-2xl">
                Meticulously crafted masterpiece boasts delicate branches,
                sculpted over years to perfection. Its regal charm and timeless
                grace make it a centerpiece of opulence and sophistication in
                any space.
              </p>
            </div>

            <div id="potd-line" className="h-[1px] bg-primary" />

            <div className="flex flex-col justify-between gap-5 pb-44 font-neue-roman sm:flex-row">
              <div className="flex gap-3 text-lg sm:gap-5 [&>p]:whitespace-nowrap [&>p]:rounded-full [&>p]:border-[2px] [&>p]:border-primary [&>p]:px-6 [&>p]:py-2 [&>p]:sm:text-2xl">
                <p className="potd-tags">bonsai</p>
                <p className="potd-tags">regal</p>
              </div>

              <button
                className="potd-tags flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[2px] bg-primary px-6 py-2 text-lg text-white sm:text-2xl"
                type="button"
              >
                <IoCartOutline className="text-3xl" />
                <p>Add to Cart</p>
              </button>
            </div>
          </div>

          <img
            id="bonsai-img"
            src={potd}
            alt="Regal Bonsai: Plant of the day"
            className="mx-auto"
          />
        </div>
      </Container>
    </section>
  );
};
