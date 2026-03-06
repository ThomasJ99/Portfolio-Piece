import Image from "next/image";
import Link from "next/link";

// *******   FIX:image src, colors, text    ********** //

export default function Hero() {
  return (
    <header className="bg-black text-white">
      <section className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-24">
        <div>
          <h1 className="text-5xl font-bold font-oswald uppercase">
            New Season.
            <span className="block">New Favorites.</span>
          </h1>

          <p className="text-lg text-white/80 mt-6 max-w-lg mb-10">
            Discover trending products, best sellers, and fresh arrivals curated
            for everyday style and comfort.
          </p>

          <Link
            className="border-2 border-slate-200 px-6 py-3 uppercase font-bold font-oswald
            hover:bg-slate-800 transition"
            href={"/products"}
          >
            Shop now
          </Link>
        </div>

        <div>
          {/* TODO: Swap img to Image when I find a good image */}
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2558636193/display_1500/stock-photo-woman-shopping-bag-and-travel-for-fashion-in-street-city-and-sunglasses-for-discount-on-commute-2558636193.jpg"
            alt=""
          />
        </div>
      </section>
    </header>
  );
}
