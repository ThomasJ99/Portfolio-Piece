import { getCategories } from "@/data/product";
import { Category } from "@/types/products-json";
import CategoryLink from "./category-link";

export default async function CategoryLinks() {
  const categories: Category[] = await getCategories();

  // ***** NOT CURRENTLY USING ****** //
  return (
    <section className="flex flex-wrap gap-2 px-4">
      {categories.map((c) => (
        <CategoryLink key={c.id} category={c} />
      ))}
    </section>
  );
}
