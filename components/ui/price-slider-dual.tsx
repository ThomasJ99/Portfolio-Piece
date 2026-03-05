"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Slider } from "./slider";
import { ProductCtx } from "@/context/product-context";

// Getter and Setter definition of the price value state
type PriceValue = {
  value: number; //Getter
  setValue: (value: number) => void; //Setter - arrow function definition
};
// Min Max Props required for PriceInput/PriceSliderDual
interface PriceInputProps {
  min: PriceValue;
  max: PriceValue;
}

interface PriceSliderDualProps {
  min: number;
  max: number;
}

function PriceInputFields({ min, max }: PriceInputProps) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <label
          className="border w-25 text-xs py-1 text-center"
          htmlFor="min-text"
        >
          Lowest price
        </label>
        <input
          className="border-2 p-2 w-30"
          type="text"
          id="min-text"
          name="min"
          value={min.value}
          onChange={(e) => min.setValue(Number(e.target.value))}
        />
      </div>

      <span className="mt-auto pb-2">&mdash;</span>

      <div className="flex flex-col">
        <label
          className="border w-25 text-xs p-1 text-center"
          htmlFor="max-text"
        >
          Highest price
        </label>
        <input
          className="border-2 p-2 w-30"
          type="text"
          id="max-text"
          name="max"
          value={max.value}
          onChange={(e) => max.setValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default function PriceSliderDual(props: PriceSliderDualProps) {
  const { min, max, priceRange, setPriceRange } = useContext(ProductCtx);

  // Reads the searchParams - URL
  const searchParams = useSearchParams();

  // I need the current path to rebuild the URL correctly
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  function updateValue(min: number, max: number) {
    // Clones my current URL so i dont lose it later later on if I have categories selected already
    const params = new URLSearchParams(searchParams.toString());
    params.set("price_min", min.toString());
    params.set("price_max", max.toString());
    params.set("page", "1");

    // Updates URL
    router.push(`${pathName}?${params.toString()}`);
  }

  const setPriceRangeAndUpdateURL = useDebouncedCallback((value: number[]) => {
    // Update url
    updateValue(value[0], value[1]);

    // Apply changes
    setPriceRange(value);
  }, 5);

  return (
    <div className="my-5">
      <label htmlFor="DualSlider" hidden>
        Min/Max Price
      </label>

      <PriceInputFields min={min} max={max} />

      <Slider
        id="DualSlider"
        className="my-10"
        value={priceRange}
        onValueChange={setPriceRangeAndUpdateURL}
        min={0}
        max={100000}
        step={100}
      />

      <div className="flex justify-between">
        <span className="block font-bold">Deals</span>
        <div className="relative inline-block w-11 h-5">
          <input
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-12 h-5 border-2 border-white rounded-full checked:bg-slate-200 cursor-pointer transition-colors duration-300"
          />

          <label
            htmlFor="switch-component"
            className="absolute -top-1 -left-2 w-7 h-7 bg-white rounded-full border-2 border-black shadow-sm transition-transform duration-300 peer-checked:translate-x-9 peer-checked:border-slate-800 cursor-pointer"
          ></label>
        </div>
      </div>

      <div className="flex justify-between my-10">
        <span className="font-bold">Free delivery</span>
        <div className="relative inline-block w-11 h-5">
          <input
            id="switch-component-2"
            type="checkbox"
            className="peer appearance-none w-12 h-5 border-2 border-white rounded-full checked:bg-slate-200 cursor-pointer transition-colors duration-300"
          />
          
          <label
            htmlFor="switch-component-2"
            className="absolute -top-1 -left-2 w-7 h-7 bg-white rounded-full border-2 border-black shadow-sm transition-transform duration-300 peer-checked:translate-x-9 peer-checked:border-slate-800 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
}
