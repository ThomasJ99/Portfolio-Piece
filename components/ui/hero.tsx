import Image from "next/image";

// *******   FIX:image src, colors, text    ********** //

export default function Hero() {
  return (
    <header className="">
      <div className="bg-gray-600">
        <section
          aria-label="Company hero section"
          className="container mx-auto px-50 grid items-center lg:grid-cols-2 gap-2 font-oswald drop-shadow-2xl pt-10"
        >
          <div>
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-balance tracking-wide grid col-auto uppercase">
              New Balance ellipse.
            </h1>
            <p className="text-white/90 text-2xl">
              Fresh Foam X midsole delivers lightweight cushioning for
              comfortable, everyday running.
            </p>
          </div>

          <div className="flex">
            <Image
              className="shadow-2xl"
              src="https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"
              alt="Banner image of the first volume of Chainsaw Man featuring Denji as the chainsaw devil, slaugthering zombies in stylized fashion"
              width={300}
              height={200}
              preload={true}
              loading="eager"
            />

            <Image
              className="shadow-2xl"
              src="https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp"
              alt="Banner image of the first volume of Chainsaw Man featuring Denji as the chainsaw devil, slaugthering zombies in stylized fashion"
              width={300}
              height={200}
              preload={true}
              loading="eager"
            />
          </div>
        </section>
      </div>
    </header>
  );
}
