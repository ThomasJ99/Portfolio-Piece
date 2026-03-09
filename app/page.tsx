import CardGrid from "@/components/ui/card-grid";
import Hero from "@/components/ui/hero";
import FullWidthSection from "@/components/ui/full-width-section";
import BannerSection from "@/components/ui/banner-section";
import { getProducts } from "@/data/product";
import ProductCard from "@/components/ui/product-card";

export default async function Home() {
  const { products } = await getProducts(
    4,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "warrantyInformation",
    "6 months warranty",
  );

  const { products: products2 } = await getProducts(
    4,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "availabilityStatus",
    "In Stock",
  );

  return (
    <main>
      <Hero />
      
      {/* First section */}
      <FullWidthSection className="bg-blue-600">
        <BannerSection
          title="Best Sellers"
          description="Our most popular products this spring!"
          alignImgRight={true}
        />
      </FullWidthSection>

      <FullWidthSection className="bg-blue-500">
        <CardGrid>
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Second section */}
      <FullWidthSection className="bg-slate-600">
        <BannerSection
          title="Running Essentials"
          description="Up your performance to the maximum with these products this spring!"
          alignImgRight={false}
        />
      </FullWidthSection>

      <FullWidthSection className="bg-slate-500">
        <CardGrid>
          {products2.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Third section */}
      <FullWidthSection className="">
        <BannerSection
          title="Accessories"
          description="Complete your exercise setup!"
          alignImgRight={false}
        />
      </FullWidthSection>

      <FullWidthSection>
        <CardGrid>
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>
    </main>
  );
}
