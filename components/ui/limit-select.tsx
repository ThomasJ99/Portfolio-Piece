"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ITEMLIMITS } from "@/data/constants";

export default function LimitSelect() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // This function handles our change when we use the dropdown and select a new "value"
  const handleChange = (limit: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", limit);
    params.set("page", "1");

    router.push(`${pathName}?${params.toString()}`);
  };

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
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
        transition-colors w-30 h-12 cursor-pointer
        ${open ? "border-b-0" : ""}`}
      >
        <span className="flex gap-3">
          Show{" "}
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
        <div className="absolute left-0 w-30 bg-black border-2 border-slate-200 z-100">
          <ul className="flex flex-col">
            {ITEMLIMITS.map((limit) => (
              <li
                key={limit}
                onClick={() => handleChange(limit.toString())}
                className="p-3 cursor-pointer hover:bg-slate-800 font-bold"
              >
                {limit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    // <form
    //   className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
    //     transition-colors w-30 h-12 cursor-pointer`}
    // >
    //   <label className={`font-oswald`} htmlFor="limit-select">
    //     Show
    //   </label>

    //   <select
    //     name="limit"
    //     id="limit-select"
    //     onChange={handleChange}
    //     // https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
    //     defaultValue={currentLimit ?? 4}
    //   >
    //     {ITEMLIMITS.map((item) => (
    //       <option
    //         key={`limit-select${item}`}
    //         value={item}
    //         className="bg-black text-base text-white"
    //       >
    //         {item}
    //       </option>
    //     ))}
    //   </select>
    // </form>
  );
}
