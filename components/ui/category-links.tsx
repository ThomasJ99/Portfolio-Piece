import { getCategories } from "@/data/product";
import { Category } from "@/types/products";
import CategoryLink from "./category-link";

export default async function CategoryLinks() {
  const categories: Category[] = await getCategories();

  return (
    <section className="flex flex-wrap gap-2 px-4">
      {categories.slice(0, 8).map((c) => (
        <CategoryLink key={c.id} category={c} />
      ))}
    </section>
  );
}
