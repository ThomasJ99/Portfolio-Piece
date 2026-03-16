"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Category } from "@/types/products-json";

export default function CategoryLink({
  category,
  onClick,
  hoverColor,
}: {
  category: Category;
  onClick?: () => void;
  hoverColor?: boolean;
}) {
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
      onClick={onClick}
      className={`block underline-offset-2 w-[15ch] 
      ${hoverColor ? "hover:text-slate-400" : ""}
      ${isActive ? " text-slate-400 hover:cursor-default" : ""}`}
      aria-current={isActive ? "page" : undefined}
      href={`${pathName}?${params.toString()}`}
    >
      {category.name}
    </Link>
  );
}
