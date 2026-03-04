"use client";

import Form from "next/form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const ref = useRef<HTMLFormElement>(null); // HTMLFormElement | null
  const query = searchParams.get("query");

  // Clear search and remove query from URL
  // We use a ref to access the form element directly to call the reset() method
  // which clears all form inputs. This is simpler than managing state for the input
  const handleClear = () => {
    if (ref.current) {
      ref.current.reset();
    }
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Form action="" ref={ref}>
      <label htmlFor="search" className="sr-only">
        Search:
      </label>

      <input
        id="search"
        name="query"
        placeholder="Search..."
        defaultValue={query || ""}
      />

      {query && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}

      <button type="submit">Search</button>
    </Form>
  );
}
