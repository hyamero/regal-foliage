import landingImage from "./assets/images/landing-image.jpg";

function App() {
  return (
    <>
      <section className="relative h-screen w-screen">
        <img
          className="z-[-1] absolute left-0 top-0 h-screen w-screen"
          src={landingImage}
          alt="Landing Background Image"
        />
        <div className="relative top-32 left-32 space-y-10 inline-block gap-10">
          <h1 className="text-white text-9xl font-neue-light">Regal Foliage</h1>

          <div className="w-full h-[1px] bg-white" />

          <div className="gap-10 flex font-neue-light text-white items-center justify-between">
            <p className=" text-3xl">
              Transforming spaces with nature's opulence.
            </p>
            <button
              type="button"
              className="inline py-2 whitespace-nowrap px-6 text-2xl border-[2px] rounded-full"
            >
              Shop now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
