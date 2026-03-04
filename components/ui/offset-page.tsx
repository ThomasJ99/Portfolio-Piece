"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

  // All products
  type PaginationProps = {
    total: number 
  }

export default function OffsetPage({total}: PaginationProps) {
  const searchParams = useSearchParams();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  // Gets the current url limit
  const currentLimit = Number(searchParams.get("limit") || 4);
  const currentOffset = Number(searchParams.get("offset") || 0);

  // Fake pagination, total pages through props
  const currentPage = Math.floor(currentOffset / currentLimit) + 1
  const totalPages = Math.ceil(total / currentLimit)

  // Will handle the page swapping
  const handleOffset = (direction: number) => {
    const params = new URLSearchParams(searchParams.toString());
    // Direction will handle how many pages are skipped - AI MATH
    const newOffset = Math.max(0, currentOffset + currentLimit * direction);

    params.set("offset", String(newOffset))
    // Push params with router
    router.push(`${pathName}?${params.toString()}`);
  };

  // Disables buttons
  const disablePrevious = currentPage <= 1
  const disableNext = currentPage >= totalPages

  return
}
