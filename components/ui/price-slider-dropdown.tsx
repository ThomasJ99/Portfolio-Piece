"use client";

import { useState, useRef, useEffect } from "react";
import PriceSliderDual from "./price-slider-dual";

// Need min/max from my price slider
export default function PriceFilterDropdown({
  min,
  max,
}: {
  min: number;
  max: number;
}) {
  const [open, setOpen] = useState(false);
  // Look up useRef to understand why it works
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Logic for closing the button if you click outside,
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    // Can turn on and off our function
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    // Knows our div is the one we refer to on useEffect to mimic a dropdown menu
    <div ref={dropdownRef}>
      <button
      onClick={() => setOpen(!open)}
        className={`border-2 px-4 py-3 font-bold hover:bg-gray-900 hover:border-white
        transition-colors font-oswald uppercase`}
      >
        <span className="flex">
          Price{" "}
          {open ? (
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M2.64 15.994c0-.192.073-.384.219-.53l7.55-7.55a2.25 2.25 0 0 1 3.181 0l7.551 7.55a.75.75 0 1 1-1.06 1.06l-7.551-7.55a.75.75 0 0 0-1.06 0l-7.55 7.55a.75.75 0 0 1-1.28-.53"></path>
            </svg>
          ) : (
            <svg
              className="w-4 h-4 ms-1.5 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-105 bg-white text-black p-6 shadow-xl border z-50">
          <PriceSliderDual min={min} max={max} />

          <div>
            <button onClick={() => setOpen(false)}>Reset</button>

            <button onClick={() => setOpen(false)}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
