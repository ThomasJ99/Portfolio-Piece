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

export const metadata = {
  title: "Products | CompanyX",
  description:
    "Browse the full product catalogue. Filter by category, price range, and more — all driven through the URL with zero client state.",
  keywords: ["products", "catalogue", "filter", "e-commerce"],
};

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
    <Root defaultMin={minPriceNumber} defaultMax={maxPriceNumber}>
      <main className="container mx-auto mt-4 px-4 lg:px-0">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
          <section className="hidden lg:block">
            <h1 className="sr-only">Our sortiment</h1>
            {/* Hide from screenreader */}
            <span className="text-4xl mb-5 block font-oswald">
              Our sortiment
            </span>
            <CategoryAside categories={categories} />
          </section>

          <section className="col-span-3">
            <section className="flex gap-2 mb-5 flex-wrap max-w-140 ">
              <PriceFilterDropdown min={minPriceNumber} max={maxPriceNumber} />{" "}
              <div className="block lg:hidden">
                <CategoryDropdown categories={categories} />
              </div>
              <LimitSelect />
              <Link
                className={`border-2 px-4 py-2.5 font-bold hover:bg-slate-800 hover:border-slate-200
                transition-colors w-32 h-12 text-nowrap`}
                href={"/products"}
              >
                Clear filters
              </Link>
            </section>
            <span className="text-sm opacity-40 ">
              Showing {total} products
            </span>

            {/* Conditional rendering if products are > 0 */}
            {products.length > 0 ? (
              <ul>
                <CardGrid>
                  {products.map((p) => (
                    <ProductCard key={p.title} product={p} />
                  ))}
                </CardGrid>
              </ul>
            ) : (
              <p className="text-2xl text-center">No products found</p>
            )}
            <Pagination totalPages={pages} />
          </section>
        </div>
      </main>
    </Root>
  );
}
