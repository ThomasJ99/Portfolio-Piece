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
  // State if the dropdown is open or closed, closed by default
  const [open, setOpen] = useState(false);

  // Ref that points to the dropdown container element in the DOM
  // Used to detect clicks outside of the dropdown
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
  });

  return (
    // Knows our div is the one we refer to on useEffect to mimic a dropdown menu
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
        transition-colors font-oswald uppercase
        ${open ? "border-b-0" : ""}`}
      >
        <span className="flex gap-3">
          Price{" "}
          {open ? (
            <svg
              className="mt-1"
              viewBox="0 0 24 24"
              width="0.85em"
              height="1em"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M2.64 15.994c0-.192.073-.384.219-.53l7.55-7.55a2.25 2.25 0 0 1 3.181 0l7.551 7.55a.75.75 0 1 1-1.06 1.06l-7.551-7.55a.75.75 0 0 0-1.06 0l-7.55 7.55a.75.75 0 0 1-1.28-.53" />
            </svg>
          ) : (
            <svg
              className="mt-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="0.85em"
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
        <div className="absolute left-0 w-85 bg-black border-2 border-slate-200 z-100">
          <div className="p-6 ">
            <PriceSliderDual min={min} max={max} />
          </div>

          <div className="flex justify-between border-t-2 p-0">
            <button
              className="p-3 border-e grow cursor-pointer hover:bg-slate-800 font-bold"
              onClick={() => setOpen(false)}
            >
              Reset
            </button>

            <button
              className="p-3 border-s grow cursor-pointer bg-slate-200 text-black hover:bg-slate-800 hover:text-white font-bold"
              onClick={() => setOpen(false)}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
