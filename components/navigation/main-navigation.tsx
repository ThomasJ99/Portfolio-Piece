import Link from "next/link";
import SearchForm from "../ui/search";

// Array of objects
const menu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Products", href: "/products" },
];

export default function MainNavigation() {
  return (
    <nav className="flex justify-between px-6 py-3 text-2xl font-bold sticky top-0 z-50 bg-black/80 backdrop-blur-xs border-b">
      <Link href="/" className="hover:opacity-85 transition-opacity">
        <span>Company x</span>
      </Link>

      <SearchForm />

      <ul className="flex gap-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              className="text-white hover:text-slate-400 hover:underline underline-offset-2 transition-colors px-2 font-oswald"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
