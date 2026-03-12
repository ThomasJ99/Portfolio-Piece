"use client";

import { useEffect, useRef, useState } from "react";
import type { Category } from "@/types/products-json";
import CategoryLink from "./category-link";

export default function CategoryDropdown({
  categories,
}: {
  categories: Category[];
}) {
  const [open, setOpen] = useState(false);

  // Entire section below is from price-slider-dropdown, this could be made into a utility component
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Logic for closing the button if you click outside
  useEffect(() => {
    // Triggers on mouse click if the dropdown exists and is outside it
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    // Can turn on and off our function by listening to all our mouseclicks
    // Theres definitely some better solution for this...
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`border-2 px-4 py-2 font-bold hover:bg-slate-800 hover:border-slate-200
        transition-colors w-40 h-12 cursor-pointer
        ${open ? "border-b-0" : ""}`}
      >
        <span className="flex gap-3">
          Categories{" "}
          {open ? (
            <svg
              className="mt-1.5"
              viewBox="0 0 24 24"
              width="1.85em"
              height="1em"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M2.64 15.994c0-.192.073-.384.219-.53l7.55-7.55a2.25 2.25 0 0 1 3.181 0l7.551 7.55a.75.75 0 1 1-1.06 1.06l-7.551-7.55a.75.75 0 0 0-1.06 0l-7.55 7.55a.75.75 0 0 1-1.28-.53" />
            </svg>
          ) : (
            <svg
              className="mt-1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="1.85em"
              height="1em"
              fill="none"
              focusable="false"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-40 bg-black border-2 border-slate-200 z-100">
          <ul
            className={`flex flex-col max-h-50 group overflow-y-auto 
          [&::-webkit-scrollbar]:w-[0.4rem]
        [&::-webkit-scrollbar-thumb]:bg-slate-500 
          [&::-webkit-scrollbar-thumb]:rounded-[3px]`}
          >
            {categories.map((category) => (
              <li key={category.id} className="hover:bg-slate-800">
                <CategoryLink
                  category={category}
                  onClick={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
