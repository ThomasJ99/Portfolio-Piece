"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function OffsetPage() {
  const searchParams = useSearchParams();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  // Gets the current url limit
  const currentLimit = Number(searchParams.get("limit") || 4);
  const currentOffset = Number(searchParams.get("offset") || 0);

  // Fake pagination kinda
  const currentPage = Math.floor(currentOffset / currentLimit) + 1;

  // Will handle the page swapping
  const handleOffset = (direction: number) => {
    const params = new URLSearchParams(searchParams.toString());
    // Direction will handle how many pages are skipped - AI MATH
    const newOffset = Math.max(0, currentOffset + currentLimit * direction);

    // Unsure what String does exactly
    params.set("offset", String(newOffset));
    // Push params with router
    router.push(`${pathName}?${params.toString()}`);
  };

  // Disables buttons
  const disablePrevious = currentPage <= 1;

  return (
    <div className="flex gap-4">
      {/* Back button */}
      <button
        onClick={() => handleOffset(-1)}
        disabled={disablePrevious}
        className={`border-2 px-4 py-3 font-bold cursor-pointer hover:bg-red-300 hover:border-white
         hover:text-black transition-colors font-oswald uppercase disabled:cursor-not-allowed`}
      >
        Previous
      </button>

      <span className="py-3">Page</span>

      {/* Forward button */}
      <button
        onClick={() => handleOffset(1)}
        className={`border-2 px-4 py-3 font-bold cursor-pointer hover:bg-red-300 hover:border-white
         hover:text-black transition-colors font-oswald uppercase disabled:cursor-not-allowed`}
      >
        Next
      </button>
    </div>
  );
}
