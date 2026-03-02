import Link from "next/link";

export default function Footer() {
    return (
      <footer role="content-info" className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Disclaimer */}
          <p className="text-xs text-white/60 leading-relaxed max-w-xl">
            This is Link non-commercial fan project inspired by the manga
            <span className="italic"> Chainsaw Man</span>. All characters and
            related content belong to Tatsuki Fujimoto and their respective
            rights holders.
          </p>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <Link
              href="/#Manga-volumes"
              className="hover:text-white transition-colors"
            >
              Volumes
            </Link>

            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>
      </footer>
    );
}