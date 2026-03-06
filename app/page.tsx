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
      <BannerSection
        title="hello"
        description="heloohelheoehololeh"
        className="bg-blue-700"
        alignImgRight={true}
      />

      <FullWidthSection className="bg-blue-500">
        <CardGrid>
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Second section */}
      <BannerSection
        title="I am cool"
        description="helooehololeh"
        className="bg-slate-700"
        alignImgRight={false}
      />

      <FullWidthSection className="bg-slate-500">
        <CardGrid>
          {products2.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Third section */}
      <BannerSection
        title="Yo"
        description="w"
        alignImgRight={false}
      />

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
