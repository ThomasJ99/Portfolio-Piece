import Link from "next/link";

export default function Footer() {
  return (
    <footer role="content-info" className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Brand Info */}
        <div className="text-xs text-white/60 leading-relaxed max-w-xl">
          <p className="font-semibold text-white text-sm mb-2">Company x</p>
          <p>
            Company x is a modern online store offering carefully selected
            products with quality and affordability in mind. Browse our
            collection and discover items designed to fit your everyday needs.
          </p>
          <p className="mt-3 text-white/40">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-white/70">
          <Link
            href="/"
            className="hover:text-slate-400 hover:underline underline-offset-2 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-slate-400 hover:underline underline-offset-2 transition-colors"
          >
            About
          </Link>

          <Link
            href="/products"
            className="hover:text-slate-400 hover:underline underline-offset-2 transition-colors"
          >
            Products
          </Link>
        </nav>
      </div>
    </footer>
  );
}
