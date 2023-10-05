import { Container } from "./Container";
import { plant1, plant2, plant3 } from "../assets/images";

export const Discover = () => {
  const plants = [
    {
      name: "Regal Bonsai",
      image: plant1,
      price: 269,
    },
    {
      name: "Swiss Jade",
      image: plant2,
      price: 299,
    },
    {
      name: "Obliqua",
      image: plant3,
      price: 249,
    },
  ];

  return (
    <section className="bg-secondary min-h-screen">
      <Container>
        <h2 className="text-primary text-[11rem] tracking-tight font-neue-roman leading-none">
          discover
        </h2>

        <div className="w-full h-[1px] bg-white" />

        <div>
          <div>
            <h3>Transforming spaces with nature's opulence.</h3>

            <ul>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
              <li>plant</li>
            </ul>

            <button>arrow</button>
            <button>arrow</button>
          </div>

          <div>
            {plants.map(({ name, image, price }) => (
              <div key={name}>
                <img src={image} alt={name} />
                <div>
                  <div>
                    <h4></h4>
                    <p>arrow icon</p>
                  </div>
                  <p className="py-1 whitespace-nowrap font-neue-roman px-6 text-xl border-[2px] rounded-full border-primary">
                    ${price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
