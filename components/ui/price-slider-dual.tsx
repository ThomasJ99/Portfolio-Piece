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
    <div>
      <label htmlFor="min-text">Minimum value</label>
      <input
        className="bg-pink-400"
        type="text"
        id="min-text"
        name="min"
        value={min.value}
        onChange={(e) => min.setValue(Number(e.target.value))}
      />

      <label htmlFor="max-text">Maximum value</label>
      <input
        className="bg-pink-400"
        type="text"
        id="max-text"
        name="max"
        value={max.value}
        onChange={(e) => max.setValue(Number(e.target.value))}
      />
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
    <>
      <div className="my-5">
        <label htmlFor="DualSlider">Min/Max Price</label>
        <Slider
          id="DualSlider"
          value={priceRange}
          onValueChange={setPriceRangeAndUpdateURL}
          min={0}
          max={100000}
          step={100}
        />
        <PriceInputFields min={min} max={max} />
      </div>
    </>
  );
}
