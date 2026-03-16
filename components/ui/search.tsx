"use client";

import { SearchIcon } from "lucide-react";
import Form from "next/form";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null); // HTMLFormElement | null
  const query = searchParams.get("query");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("query")?.toString() || "";

    const params = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query"); // removes query if empty
    }

    router.push(`/products?${params.toString()}`);
  }

  return (
    <Form action="" onSubmit={handleSubmit} ref={ref} className="w-full">
      <ButtonGroup className="flex">
        <Input
          name="query"
          placeholder="Search..."
          defaultValue={query || ""}
          className="w-95 xs:w-70 sm:w-143 md:w-75"
          required
        />

        <Button type="submit" variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </Form>
  );
}
