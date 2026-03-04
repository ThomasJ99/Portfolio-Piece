import CardGrid from "@/components/ui/card-grid";
import { getProducts } from "@/data/product";
import ProductCard from "@/components/ui/product-card";
import CategoryLinks from "@/components/ui/category-links";
import { ensureString } from "@/util";
import LimitSelect from "@/components/ui/limit-select";
import PriceSliderDual from "@/components/ui/price-slider-dual";
import Root from "@/components/ui/root";
import Pagination from "@/components/ui/pagination";
import CategoryAside from "@/components/ui/category-aside";

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
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="mt-20">
            <CategoryAside />
          </div>

          <section className="col-span-3">
            <section className="">
              <h1 className="text-4xl mt-15 mb-5 px-4 font-oswald upperc">
                Our sortiment
              </h1>
              <PriceSliderDual min={minPriceNumber} max={maxPriceNumber} />
              <LimitSelect />
              <span className="text-sm opacity-40">{total} products</span>
            </section>

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
              <p>no products found</p>
            )}
            <Pagination totalPages={pages} />
          </section>
        </div>
      </div>
    </Root>
  );
}
