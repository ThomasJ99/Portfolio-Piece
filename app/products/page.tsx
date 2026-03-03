import CardGrid from "@/components/ui/card-grid";
import { getProducts } from "@/data/product";
import ProductCard from "@/components/ui/product-card";
import CategoryLinks from "@/components/ui/category-links";
import { ensureString } from "@/util";
import LimitSelect from "@/components/ui/limit-select";
import PriceSliderDual from "@/components/ui/price-slider-dual";
import Root from "@/components/ui/root";

// Component
// This is where we call getProducts and render out the products
export default async function productPage(params: PageProps<"/">) {
  const {
    limit = "4",
    offset = "0",
    category,
    title,
    price_min = "0",
    price_max = "100000",
  } = await params.searchParams;
  const limitNumber = Number(ensureString(limit));
  const offsetNumber = Number(ensureString(offset));
  const categoryString = ensureString(category);
  const titleString = ensureString(title);
  // TODO: Maybe use effect hook to load them once per page load instead of page render.
  const minPriceNumber = Number(ensureString(price_min));
  const maxPriceNumber = Number(ensureString(price_max));
  // Things to do with limit, implement links/buttons that change the limit on the site

  const products = await getProducts(
    limitNumber,
    offsetNumber,
    categoryString,
    titleString,
    minPriceNumber,
    maxPriceNumber,
  );

  return (
    // TODO: STUDY Root
    <Root defaultMin={minPriceNumber} defaultMax={maxPriceNumber}>
      <section>
        <section className="container mx-auto">
          <h1 className="text-4xl mt-15 mb-5 px-4 font-oswald">
            Our sortiment
          </h1>
          <CategoryLinks />
          <PriceSliderDual min={minPriceNumber} max={maxPriceNumber} />
          <LimitSelect />

          <div className="container mx-auto text-center grid">
            <span>
              Navigate to next page of products{" "}
              <span className="opacity-50">to be implemented</span>
            </span>
          </div>
        </section>

        <ul>
          <CardGrid>
            {products.map((p) => (
              <ProductCard key={p.title} product={p} />
            ))}
          </CardGrid>
        </ul>
      </section>
    </Root>
  );
}
