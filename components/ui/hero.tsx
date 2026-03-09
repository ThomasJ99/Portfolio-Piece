import Image from "next/image";
import Link from "next/link";

// https://jsdoc.app/tags-returns
/**
 * Use only once, contains h1 and main header of the page
 */

export default function Hero() {
  return (
    <header className="bg-black text-white">
      <section className="container mx-auto grid lg:grid-cols-2 gap-6 items-center py-24">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold font-oswald uppercase">
            New Season.
            <span className="block">New Favorites.</span>
          </h1>

          <p className="text-lg text-white/80 max-w-lg">
            Discover fresh arrivals, lighter layers, and everyday essentials
            made for the new season. Explore trending styles designed for
            brighter days and warmer weather.
          </p>

          <Link
            className="border-2 border-slate-200 px-6 py-3 uppercase font-bold font-oswald
            hover:bg-slate-800 transition-colors inline-block"
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
