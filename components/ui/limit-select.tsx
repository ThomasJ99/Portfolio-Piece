"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ITEMLIMITS } from "@/data/constants";

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
    params.set("page", "1");

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form
      className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
        transition-colors w-30 h-12 cursor-pointer`}
    >
      <label className={`font-oswald`} htmlFor="limit-select">
        Show
      </label>

      <select
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
            className="bg-black text-base text-white"
          >
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}
