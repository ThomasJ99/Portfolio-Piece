import Image from "next/image";

// *******   FIX:image src, colors, text    ********** //

export default function Hero() {
  return (
    <header className="py-16 px-4 bg-linear-to-b from-red-600  via-blue-500 to-white">
      <section
        aria-label="Company hero section"
        className="container mx-auto px-4 grid items-center lg:grid-cols-2 gap-8 font-oswald drop-shadow-2xl"
      >
        <div>
          <span className="text-white/95 text-2xl italic font-bold">
            placeholder{" "}
          </span>
          <h1 className="text-6xl xl:text-7xl font-bold leading-tight text-balance tracking-wide grid col-auto uppercase">
            Company X
          </h1>
          <p className="text-white/90 text-2xl">By me </p>
        </div>

        <Image
          className="border-3 border-black rounded-2xl shadow-2xl"
          src="https://placehold.co/600x400"
          alt="Banner image of the first volume of Chainsaw Man featuring Denji as the chainsaw devil, slaugthering zombies in stylized fashion"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={1500}
          height={843}
          preload={true}
          loading="eager"
          unoptimized
        />
      </section>
    </header>
  );
}
