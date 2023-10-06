import showcase from "../assets/images/showcase.jpg";
import { Container } from "./Container";

export const Showcase = () => {
  return (
    <section className="border-b-[2px] border-primary bg-white">
      <Container className="py-56">
        <div className="text-center">
          <p className="font-neue-light text-xl sm:text-2xl md:text-3xl">
            ( Royal Bonsai Elegance )
          </p>
          <h2 className="font-neue-roman leading-none tracking-tight text-primary [fontSize:clamp(3rem,20vw,12rem)]">
            exqiusite.
          </h2>
        </div>

        <img
          className="mx-auto my-16 w-full rounded-md border-[1.5rem] border-primary sm:border-[3rem] lg:border-[4rem]"
          src={showcase}
          alt="Bonsai Showcase Image"
        />

        <p className="text-left font-neue-roman text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Regal Foliage Co. offers rare and luxurious plants, transforming
          spaces with nature's opulence, and empowering you to create an
          environment of unmatched elegance.
        </p>

        <div className="grid grid-cols-2">
          <div className="col-span-2 flex w-5/6 flex-col gap-10 pl-10 pt-28 text-left md:col-span-1 md:col-start-2 md:w-full lg:w-3/4">
            <p className="font-neue-light text-xl sm:text-2xl md:text-3xl">
              Elevating spaces with rare and luxurious plants, embracing
              nature's elegance through uncompromising quality and service.{" "}
            </p>

            <p className="font-neue-light text-xl sm:text-2xl md:text-3xl">
              Redefining luxury in botany, curating captivating plants and
              empowering patrons to infuse life with refined opulence.
            </p>

            <button
              type="button"
              className="self-start whitespace-nowrap rounded-full  border-[2px] border-black px-6 py-2 font-neue-roman text-xl md:text-2xl"
            >
              Discover
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
