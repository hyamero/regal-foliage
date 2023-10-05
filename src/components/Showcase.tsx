import showcase from "../assets/images/showcase.jpg";
import { Container } from "./Container";

export const Showcase = () => {
  return (
    <section className="border-b-[2px] border-primary bg-white">
      <Container className="py-56">
        <div className="text-center">
          <p className="font-neue-light text-3xl">( Royal Bonsai Elegance )</p>
          <h2 className="tracking-tight text-[12rem] leading-none  text-primary font-neue-roman">
            exqiusite.
          </h2>
        </div>

        <img
          className="border-[4rem] border-primary rounded-xl my-16 w-full mx-auto"
          src={showcase}
          alt="Bonsai Showcase Image"
        />

        <p className="text-5xl font-neue-roman text-left leading-tight">
          Regal Foliage Co. offers rare and luxurious plants, transforming
          spaces with nature's opulence, and empowering you to create an
          environment of unmatched elegance.
        </p>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-10 w-3/4 col-start-2 text-left pt-28">
            <p className="text-3xl font-neue-light">
              Elevating spaces with rare and luxurious plants, embracing
              nature's elegance through uncompromising quality and service.{" "}
            </p>

            <p className="text-3xl font-neue-light">
              Redefining luxury in botany, curating captivating plants and
              empowering patrons to infuse life with refined opulence.
            </p>

            <button
              type="button"
              className="self-start py-2 font-neue-roman  whitespace-nowrap px-6 text-2xl border-[2px] border-black rounded-full"
            >
              Discover
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
