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
        <h1 className="p-20 text-white text-9xl font-neue-light">
          Regal Foliage
        </h1>
      </section>
    </>
  );
}

export default App;
