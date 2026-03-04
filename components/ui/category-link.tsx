"use client";
import { Category } from "@/types/products-json";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function CategoryLink({ category }: { category: Category }) {
  const searchParams = useSearchParams();

  // Active check for conditional styling
  const currentCategory = searchParams.get("category");
  const isActive = currentCategory === category.id.toString();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const params = new URLSearchParams(searchParams.toString());
  params.set("category", category.id.toString());
  params.set("page", "1");

  return (
    <Link
    /* Old style to keep for later */
      // className={`border-2 px-4 py-3 font-bold hover:bg-amber-300 hover:border-white
      //    hover:text-black transition-colors font-oswald uppercase
      //    ${isActive ? "underline scale-105 bg-amber-300 text-black border-white" : ""}`}
      key={category.id}
      aria-current={isActive ? "page" : undefined}
      href={`${pathName}?${params.toString()}`}
    >
      {category.name}
    </Link>
  );
}
