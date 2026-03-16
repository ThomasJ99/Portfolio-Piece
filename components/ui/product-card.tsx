import Link from "next/link";
import { calculateDiscountedPrice, formatPrice } from "@/lib/pricing";
import type { Product } from "@/types/products-json";
import ImageScroll from "./image-scroll";
import LikeButton from "./like-button";

// My product info content thats inside a generic card-grid
export default function ProductCard({ product }: { product: Product }) {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  const discount = product.discountPercentage ?? 0;
  return (
    <li key={product.id}>
      <Link className="z-1" href={`/products/${product.id}`}>
        <div className="relative group">
          <ImageScroll product={product} />
          <LikeButton pTitle={product.title} />
        </div>

        <section className="pt-3 pb-5 font-semibold text-center">
          <h2 className="font-bold font-oswald">{product.title}</h2>
          <span className="block mb-2">{product.category?.name}</span>
          <div className="flex flex-col items-center">
            <span
              className={`font-semibold ${
                discount > 0 ? "text-red-600" : "text-white"
              }`}
            >
              {formatPrice(discountedPrice)}
            </span>

            {discount > 0 && (
              <span className="flex gap-1 text-xs text-gray-500">
                <span className="line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-red-600">-{discount}%</span>
              </span>
            )}
          </div>
        </section>
      </Link>
    </li>
  );
}

export function ProductImage({ product }: { product: Product }) {
  return (
    <li key={product.id}>
      <div className="relative group">
        <ImageScroll product={product} />
        <LikeButton pTitle={product.title} />
      </div>
    </li>
  );
}
