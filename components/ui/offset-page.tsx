"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function OffsetPage() {
  const searchParams = useSearchParams();

  // Reads the current URL path name after hostname/...
  const pathName = usePathname();

  // Allows us to change the server value, meaning we can manipulate the URL
  const router = useRouter();

  // Gets the current url limit
  const currentLimit = searchParams.get("limit");
  console.log(currentLimit);
  
  const currentOffset = searchParams.get("offset")

//   
  const handleOffset = () => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("offset", "")
    // Push params with router
    router.push(`${pathName}?${params.toString()}`)
  }
}