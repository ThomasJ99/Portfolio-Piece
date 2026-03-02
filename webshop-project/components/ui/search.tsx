"use client";

import Form from "next/form";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useRef } from "react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const ref = useRef<HTMLFormElement>(null); // HTMLFormElement | null
  const title = searchParams.get("title");

  // Clear search and remove query from URL
  // We use a ref to access the form element directly to call the reset() method
  // which clears all form inputs. This is simpler than managing state for the input
  const handleClear = () => {
    if (ref.current) {
      ref.current.reset();
    }
    const params = new URLSearchParams(searchParams);
    params.delete("title");
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Form action="" ref={ref}>
      <label htmlFor="search" className="sr-only">
        Search:
      </label>

      <input
        id="search"
        name="title"
        placeholder="Search..."
        defaultValue={title || ""}
      />
      {/* Solution is to save hidden values of limit/offset/categories here, feels like a scuffed solution though */}
      {/* <input type="hidden" name="sort" value={} /> */}

      {title && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}

      <button type="submit">Search</button>
    </Form>
  );
}
