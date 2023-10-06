import showcase from "../assets/images/showcase.jpg";
import { Container } from "./Container";

export const Showcase = () => {
  return (
    <section className="border-b-[2px] border-primary bg-white">
      <Container className="py-56">
        <div className="text-center">
          <p className="font-neue-light text-3xl">( Royal Bonsai Elegance )</p>
          <h2 className="font-neue-roman text-[12rem] leading-none  tracking-tight text-primary">
            exqiusite.
          </h2>
        </div>

        <img
          className="mx-auto my-16 w-full rounded-xl border-[4rem] border-primary"
          src={showcase}
          alt="Bonsai Showcase Image"
        />

        <p className="text-left font-neue-roman text-5xl leading-tight">
          Regal Foliage Co. offers rare and luxurious plants, transforming
          spaces with nature's opulence, and empowering you to create an
          environment of unmatched elegance.
        </p>

        <div className="grid grid-cols-2">
          <div className="col-start-2 flex w-3/4 flex-col gap-10 pt-28 text-left">
            <p className="font-neue-light text-3xl">
              Elevating spaces with rare and luxurious plants, embracing
              nature's elegance through uncompromising quality and service.{" "}
            </p>

            <p className="font-neue-light text-3xl">
              Redefining luxury in botany, curating captivating plants and
              empowering patrons to infuse life with refined opulence.
            </p>

            <button
              type="button"
              className="self-start whitespace-nowrap rounded-full  border-[2px] border-black px-6 py-2 font-neue-roman text-2xl"
            >
              Discover
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
