"use client";

import { ITEMLIMITS } from "@/data/constants";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function LimitSelect() {
  const searchParams = useSearchParams();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();
  // Gets the current url limit
  const currentLimit = searchParams.get("limit");

  // This function handles our change when we use the dropdown and select a new "value"
  // Choose a select element here because we use it in our select tag
  // We declare a parameter called event which we then look into our selects value to determine the limit
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit);
    // params.set("page", "1") if pagnation

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form className=" flex gap-6 px-8 text-2xl ">
      <label className="my-5 font-oswald" htmlFor="limit-select">
        Show Products:
      </label>
      
      <select
        className=""
        name="limit"
        id="limit-select"
        onChange={handleChange}
        // https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
        defaultValue={currentLimit ?? 4}
      >
        {ITEMLIMITS.map((item) => (
          <option
            key={`limit-select${item}`}
            value={item}
            className="bg-black text-base"
          >
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}
