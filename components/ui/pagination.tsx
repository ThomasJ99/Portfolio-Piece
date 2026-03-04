"use client";

import { ProductsResponse } from "@/types/products-json";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Pagination({ product }: { product: ProductsResponse }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const currentPage = product.page;
  const totalPages = product.pages;

  console.log(product.total);

  // Will handle the page swapping
  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const disablePrevious = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <div className="flex gap-4">
      {/* Back button */}
      {/* Conditional rendering if products are </> than 0 */}
      {disablePrevious ? <span>&lsaquo;</span> : 
      <Link href={handlePageChange(currentPage - 1)}>
      
      </Link>
      }

      <span className="py-3">
        Page {currentPage} of {totalPages}
      </span>

      {/* Forward button */}
    </div>
  );
}
