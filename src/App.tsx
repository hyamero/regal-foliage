import landingImage from "./assets/images/landing-image.jpg";
import { Container } from "./components/Container";
import { Discover } from "./components/Discover";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Potd } from "./components/Potd";
import { Showcase } from "./components/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <img
        className="z-[-1] absolute left-0 top-0 h-screen w-screen object-cover object-left"
        src={landingImage}
        alt="Landing Background Image"
      />
      <Container className="relative h-screen">
        <div className="mt-52 space-y-10 inline-block gap-10 text-xl">
          <h1 className="text-white md:text-8xl text-6xl lg:text-9xl font-neue-light">
            Regal Foliage
          </h1>

          <div className="w-full h-[1px] bg-white" />

          <div className="gap-10 flex font-neue-light text-white flex-col items-left justify-between">
            <p className="text-2xl md:text-3xl">
              Transforming spaces with nature's opulence.
            </p>
            <button
              type="button"
              className="py-2 self-start whitespace-nowrap px-6 text-xl md:text-2xl border-[2px] rounded-full"
            >
              Shop now
            </button>
          </div>
        </div>
      </Container>

      <Potd />
      <Showcase />
      <Discover />
      <Footer />
    </>
  );
}

export default App;
