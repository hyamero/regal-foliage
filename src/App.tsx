import landingImage from "./assets/images/landing-image.jpg";
import {
  Container,
  Discover,
  Footer,
  Navbar,
  Potd,
  Showcase,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <img
        className="absolute left-0 top-0 z-[-1] h-screen w-screen object-cover object-left"
        src={landingImage}
        alt="Landing Background Image"
      />
      <Container className="relative h-screen">
        <div className="mt-52 inline-block gap-10 space-y-10 text-xl">
          <h1 className="font-neue-light text-6xl text-white md:text-8xl lg:text-9xl">
            <div
              id="main-text"
              className="relative overflow-hidden pb-2 [&>span]:inline-block"
            >
              <span>Regal</span> <span>Foliage</span>
            </div>
          </h1>

          <div id="main-line" className="h-[1px] bg-white" />

          <div
            id="main-content"
            className="items-left flex flex-col justify-between gap-10 font-neue-light text-white"
          >
            <p className="text-2xl md:text-3xl">
              Transforming spaces with nature's opulence.
            </p>
            <button
              type="button"
              className="self-start whitespace-nowrap rounded-full border-[2px] px-6 py-2 text-xl md:text-2xl"
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
