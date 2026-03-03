"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// -- What is my sliders role before I start implementing it? -- //

// My getProducts holds the min/max price, so its job should be to render correctly in the URL by making sure the URL is correct
// My slider should then have some hook for interactivity and update the url params on submit button
// Perhaps ill have two sliders which each determine min/max with a input field which shows the current value for each slider

export default function PriceSlider({ keyName }: { keyName: string }) {
  // States with a current value and a function which updates it
  const [val, setVal] = useState(0);
  console.log(keyName);

  // Reads the searchParams - URL
  const searchParams = useSearchParams();

  // I need the current path to rebuild the URL correctly
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  const priceChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // TODO: Implement logic here...
      const newVal = event.target.value;

      // Clones my current URL so i dont lose it later later on if I have categories selected already
      const params = new URLSearchParams(searchParams.toString());
      params.set(keyName, newVal);
      setVal(Number(newVal));

      // Updates URL
      router.push(`${pathName}?${params.toString()}`);
    },
    200,
  );

  return (
    <section>
      <div className="flex justify-between px-2">
        <span className="border-2 p-2 mx-2">{val}</span>
        <label htmlFor="slider" className="py-2">{keyName}</label>
      </div>

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
          <option value="0" label="0" className=" "></option>
          <option value="25000" label="25000" className="ms-10"></option>
          <option value="50000" label="50000" className="ms-6"></option>
          <option value="75000" label="75000" className="ms-4"></option>
          <option value="100000" label="100000"></option>
        </datalist>
      </div>
    </section>
  );
}
