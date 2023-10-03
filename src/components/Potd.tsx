import { Container } from "./Container";
import potd from "../assets/images/potd.png";

export const Potd = () => {
  return (
    <section className="min-h-screen bg-secondary text-primary border-b-[2px] border-primary">
      <Container className="pt-56">
        <h2 className="text-[11rem] tracking-tight font-neue-roman leading-none">
          POTD
        </h2>
        <p className="font-neue-light text-3xl">( plant of the day )</p>

        <div className="flex justify-between items-end gap-36">
          <div className="flex flex-col gap-12">
            <div>
              <div className="mb-5 flex gap-3 font-neue-light items-center justify-between">
                <h3 className="text-8xl font-neue-light">regal bonsai</h3>
                <p className="py-1 whitespace-nowrap font-neue-roman px-6 text-xl border-[2px] rounded-full border-primary">
                  $269
                </p>
              </div>
              <p className="font-neue-light text-2xl">
                Meticulously crafted masterpiece boasts delicate branches,
                sculpted over years to perfection. Its regal charm and timeless
                grace make it a centerpiece of opulence and sophistication in
                any space.
              </p>
            </div>

            <div className="w-full h-[1px] bg-primary" />

            <div className="flex justify-between pb-44 font-neue-roman">
              <div className="flex gap-5">
                <p className="py-2 whitespace-nowrap px-6 text-2xl border-[2px] border-primary rounded-full">
                  bonsai
                </p>
                <p className="py-2 whitespace-nowrap px-6 text-2xl border-[2px] border-primary rounded-full">
                  regal
                </p>
              </div>

              <button
                className="py-2 whitespace-nowrap px-6 text-2xl border-[2px] rounded-full bg-primary text-white"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <img src={potd} alt="Regal Bonsai: Plant of the day" />
        </div>
      </Container>
    </section>
  );
};
