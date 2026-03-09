import CardGrid from "@/components/ui/card-grid";
import Hero from "@/components/ui/hero";
import FullWidthSection from "@/components/ui/full-width-section";
import BannerSection from "@/components/ui/banner-section";
import { getProducts } from "@/data/product";
import ProductCard from "@/components/ui/product-card";

export default async function Home() {
  // Fetches specific products that are later displayed below
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
    "categoryId",
    "9",
  );

  const { products: products3 } = await getProducts(
    5,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "categoryId",
    "2",
  );

  return (
    <main>
      <Hero />

      {/* First section - Best Selling Products */}
      <FullWidthSection className="bg-blue-400">
        <BannerSection
          title="Spring Favorites"
          description="Discover the season's most-loved styles. Our trending top picks for a fresh spring look."
          alignImgRight={true}
          imgSrc={[
            "https://plus.unsplash.com/premium_photo-1769857281671-a942028ea91b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
      </FullWidthSection>

      <FullWidthSection className="bg-blue-200 text-black mb-20">
        <CardGrid>
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Second section - Running Shoes */}
      <FullWidthSection className="bg-yellow-400">
        <BannerSection
          title="Spring Run Performance"
          description="Maximize your pace this spring! Discover lightweight gear designed for peak performance and ultimate comfort in the sun."
          alignImgRight={false}
          imgSrc={[
            "https://plus.unsplash.com/premium_photo-1663100693083-e259b2684b63?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNwcmluZyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
          ]}
        />
      </FullWidthSection>

      <FullWidthSection className="bg-yellow-200 text-black mb-20">
        <CardGrid>
          {products2.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>

      {/* Third section */}
      <FullWidthSection className="bg-teal-500">
        <BannerSection
          title="Fresh Spring Scents"
          description="Light, airy, and invigorating. Find your signature spring fragrance and carry the freshness of the breeze with you."
          alignImgRight={true}
          imgSrc={[
            "https://images.unsplash.com/photo-1650984312007-2258bc07b03e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1583710320217-6c72a6d7d2e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
      </FullWidthSection>

      <FullWidthSection className="bg-teal-300 text-black">
        <CardGrid>
          {products3.slice(1).map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}{" "}
        </CardGrid>
      </FullWidthSection>
    </main>
  );
}
