"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const ref = useRef<HTMLFormElement>(null); // HTMLFormElement | null
  const query = searchParams.get("query");

  return (
    <Form action="" ref={ref}>
      <ButtonGroup>
        <Input
          name="query"
          placeholder="Search..."
          defaultValue={query || ""}
          className="w-100"
        />

        <Button type="submit" variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </Form>
  );
}
