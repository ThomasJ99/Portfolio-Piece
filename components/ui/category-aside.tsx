import { getCategories } from "@/data/product";
import type { Category } from "@/types/products-json";
import CategoryLink from "./category-link";

export default async function CategoryAside() {
  const categories: Category[] = await getCategories();

  return (
    <aside className="border-r border-white/10">
      <h2 className="text-lg font-bold font-oswald opacity-70 mb-3">
        Categories
      </h2>

      <ul className="flex flex-col gap-3 ps-5 text-sm font-bold">
        {categories.map((c) => (
          <CategoryLink key={c.id} category={c} />
        ))}
      </ul>
    </aside>
  );
}
