import Link from "next/link";
import CardGrid from "@/components/ui/card-grid";
import CategoryAside from "@/components/ui/category-aside";
import CategoryDropdown from "@/components/ui/category-dropdown";
import LimitSelect from "@/components/ui/limit-select";
import Pagination from "@/components/ui/pagination";
import PriceFilterDropdown from "@/components/ui/price-slider-dropdown";
import ProductCard from "@/components/ui/product-card";
import Root from "@/components/ui/root";
import { getCategories, getProducts } from "@/data/product";
import type { Category } from "@/types/products-json";
import { ensureString } from "@/util";

// Component
// This is where we call getProducts and render out the products
export default async function productPage(params: PageProps<"/">) {
  const {
    limit = "6",
    page = "1",
    category,
    query,
    price_min = "0",
    price_max = "100000",
  } = await params.searchParams;
  const limitNumber = Number(ensureString(limit));
  const pageNumber = Number(ensureString(page));
  const categoryString = ensureString(category);
  const queryString = ensureString(query);
  // TODO: Maybe use effect hook to load them once per page load instead of page render.
  const minPriceNumber = Number(ensureString(price_min));
  const maxPriceNumber = Number(ensureString(price_max));
  // Things to do with limit, implement links/buttons that change the limit on the site

  const { products, total, pages } = await getProducts(
    limitNumber,
    pageNumber,
    categoryString,
    queryString,
    minPriceNumber,
    maxPriceNumber,
  );
  const categories: Category[] = await getCategories();

  return (
    // TODO: STUDY Root
    <Root defaultMin={minPriceNumber} defaultMax={maxPriceNumber}>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-4 gap-8">
          <section className="hidden lg:block">
            <h1 className="text-4xl mb-5 font-oswald">Our sortiment</h1>
            <CategoryAside categories={categories} />
          </section>

          <section className="col-span-3">
            <section className="flex gap-2 mb-5 flex-wrap max-w-140">
              <div className="block lg:hidden">
                <CategoryDropdown categories={categories} />
              </div>
              <LimitSelect />
              <PriceFilterDropdown
                min={minPriceNumber}
                max={maxPriceNumber}
              />{" "}
              <Link
                className={`border-2 px-4 py-3 font-bold hover:bg-slate-800 hover:border-slate-200
                transition-colors w-32 h-12 text-nowrap`}
                href={"/products"}
              >
                Clear filters
              </Link>
            </section>

            {/* Conditional rendering if products are > 0 */}
            {products.length > 0 ? (
              <ul>
                <span className="text-sm opacity-40">{total} products</span>
                <CardGrid>
                  {products.map((p) => (
                    <ProductCard key={p.title} product={p} />
                  ))}
                </CardGrid>
              </ul>
            ) : (
              <p>no products found</p>
            )}
            <Pagination totalPages={pages} />
          </section>
        </div>
      </div>
    </Root>
  );
}
