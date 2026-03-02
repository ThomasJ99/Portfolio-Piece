"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Slider } from "./slider";
import { ProductCtx } from "@/context/product-context";
import { getProducts2 } from "@/data/product";

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

    // Updates URL
    router.push(`${pathName}?${params.toString()}`);
  }

  const setPriceRangeAndUpdateURL = useDebouncedCallback((value: number[]) => {
    // Update url
    updateValue(value[0], value[1]);

    // Apply changes
    setPriceRange(value);
  }, 5);

  // const priceChange = useDebouncedCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newVal = event.target.value;

  //     // Clones my current URL so i dont lose it later later on if I have categories selected already
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set(, newVal); // TODO: NEEDS FIX
  //     setVal(Number(newVal));

  //     // Updates URL
  //     router.push(`${pathName}?${params.toString()}`);
  //   },
  //   200,
  // );

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
        {/*TODO: Use an object maybe*/}
        <PriceInputFields min={min} max={max} />
        {/* <span className="border-2 p- mx-2">{val}</span>
      <label htmlFor="slider">Price Slider</label>
      <div>
        <input
          onChange={priceChange}
          type="range"
          id="slider"
          list="markers"
          name={keyName}
          className="w-full"
          min={0}
          max={100000}
          step={100}
        />


        <datalist id="markers" className="flex justify-between w-full">
          <option value="0" label="0" className=" text-center"></option>
          <option
            value="25000"
            label="25000"
            className="ms-8 text-center"
          ></option>
          <option value="50000" label="50000"></option>
          <option value="75000" label="75000"></option>
          <option value="100000" label="100000"></option>
        </datalist>
      </div> */}
        {/* TODO: JSX LOGIC HERE...  */}
      </div>
    </>
  );
}
