import gsap from "gsap";
import showcase from "../assets/images/showcase.jpg";
import { Container } from "./Container";

export const Showcase = () => {
  const scrollTo = (scrollElement: string, offsetY: number) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${scrollElement}`, offsetY },
      ease: "power2.easeOut",
    });
  };

  return (
    <section
      id="showcase"
      className="border-b-[2px] border-primary bg-white text-primary"
    >
      <Container className="py-56">
        <div className="text-center">
          <p
            id="showcase-desc"
            className="font-neue-light text-xl sm:text-2xl md:text-3xl"
          >
            ( Royal Bonsai Elegance )
          </p>
          <div className="overflow-hidden">
            <h2 className="font-neue-roman leading-none tracking-tight [fontSize:clamp(3rem,20vw,12rem)]">
              exquisite.
            </h2>
          </div>
        </div>

        <div className="my-16 overflow-hidden rounded-md border-[1.5rem] border-primary bg-primary sm:border-[3rem] lg:border-[4rem]">
          <img
            id="showcase-img"
            className="w-full scale-125 rounded-md object-cover object-center"
            src={showcase}
            alt="Bonsai Showcase Image"
          />
        </div>

        <p className="showcase-desc-stagger text-left font-neue-roman text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Regal Foliage Co. offers rare and luxurious plants, transforming
          spaces with nature's opulence, and empowering you to create an
          environment of unmatched elegance.
        </p>

        <div className="grid grid-cols-2">
          <div className="col-span-2 flex w-5/6 flex-col gap-10 pl-10 pt-28 text-left md:col-span-1 md:col-start-2 md:w-full lg:w-3/4">
            <p className="showcase-desc-stagger font-neue-light text-xl sm:text-2xl md:text-3xl">
              Elevating spaces with rare and luxurious plants, embracing
              nature's elegance through uncompromising quality and service.{" "}
            </p>

            <p className="showcase-desc-stagger font-neue-light text-xl sm:text-2xl md:text-3xl">
              Redefining luxury in botany, curating captivating plants and
              empowering patrons to infuse life with refined opulence.
            </p>

            <button
              type="button"
              onClick={() => scrollTo("discover", 0)}
              className="showcase-desc-stagger self-start whitespace-nowrap rounded-full border-[2px] border-primary px-6 py-2 font-neue-roman text-xl md:text-2xl"
            >
              Discover
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
