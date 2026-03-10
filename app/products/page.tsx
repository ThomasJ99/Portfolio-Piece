import CardGrid from "@/components/ui/card-grid";
import CategoryAside from "@/components/ui/category-aside";
import LimitSelect from "@/components/ui/limit-select";
import Pagination from "@/components/ui/pagination";
import PriceFilterDropdown from "@/components/ui/price-slider-dropdown";
import ProductCard from "@/components/ui/product-card";
import Root from "@/components/ui/root";
import { getProducts } from "@/data/product";
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

  return (
    // TODO: STUDY Root
    <Root defaultMin={minPriceNumber} defaultMax={maxPriceNumber}>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-4 gap-8">
          <section>
            <h1 className="text-4xl mb-5 font-oswald">Our sortiment</h1>
            <CategoryAside />
          </section>

          <section className="col-span-3">
            <section className="flex gap-6 mb-5">
              <LimitSelect />
              <PriceFilterDropdown
                min={minPriceNumber}
                max={maxPriceNumber}
              />{" "}
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
