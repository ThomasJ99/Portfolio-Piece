"use client";

import { useState } from "react";
import type { Category } from "@/types/products-json";

export default function CategoryDropdown({
  categories,
}: {
  categories: Category[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
        transition-colors w-30 h-12`}
      >Categories</button>
    </div>
  );
}
