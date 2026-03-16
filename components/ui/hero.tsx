import Image from "next/image";
import Link from "next/link";

// https://jsdoc.app/tags-returns
/**
 * Use only once, contains h1 and main header of the page
 */

export default function Hero() {
  return (
    <header className="bg-black text-white">
      <section className="container mx-auto grid lg:grid-cols-2 gap-6 items-center py-24 px-4 2xl:px-0">
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
            className="border-2 border-slate-200 px-6 py-3 uppercase font-bold
            hover:bg-slate-800 transition-colors inline-block"
            href={"/products"}
          >
            Shop now
          </Link>
        </div>

        <div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={800}
            height={400}
            alt=""
            className="aspect-[2] object-cover"
          />
        </div>
      </section>
    </header>
  );
}
