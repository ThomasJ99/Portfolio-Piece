"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const currentPage = Number(searchParams.get("page") || 1);

  // Will handle the page swapping
  const handlePageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const disablePrevious = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <div className="flex justify-center gap-6">
      <Link
        href={disablePrevious ? "#" : handlePageChange(currentPage - 1)}
        // Tells screenreader its disabled
        aria-disabled={disablePrevious}
        // Allows screenreader to jump between the elements
        tabIndex={disablePrevious ? -1 : 0}
        // pointer-events-none disables the cursor from doing anything if theres no page left
        className={`text-3xl
          ${
            disablePrevious
              ? "opacity-40 pointer-events-none cursor-not-allowed"
              : "hover:opacity-90"
          }`}
      >
        &lsaquo;
      </Link>

      <span className="py-2">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      <Link
        href={disableNext ? "#" : handlePageChange(currentPage + 1)}
        aria-disabled={disableNext}
        tabIndex={disableNext ? -1 : 0}
        className={`text-3xl
          ${
            disableNext
              ? "opacity-40 pointer-events-none cursor-not-allowed"
              : "hover:opacity-90"
          }`}
      >
        &rsaquo;
      </Link>
    </div>
  );
}
