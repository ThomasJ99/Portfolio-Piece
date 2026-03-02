"use client";

import { ProductCardProps } from "@/types/products";
import { useState } from "react";

export default function ImageScroll({ product }: ProductCardProps) {
  // State with our current state and a function that updates the state
  const [currentIndex, setCurrentIndex] = useState(0);

  // We handle currentIndex here and swap it depending
  const indexSwap = () => {
    // Updates our state
    setCurrentIndex(
      (prevIndex) =>
        // Checks if we are on the last image, if true 0, false - index + 1 to
        //prevIndex === product.images.length - 1 ? 0 : prevIndex + 1,
        (prevIndex = (prevIndex + 1) % product.images.length), //Modulo operation loops between 0 and length - 1 ;)
    );
    // console.log(`indx: ${currentIndex}/${product.images.length}`); // Confy way to log things out ;)
  };

  // Check whether the product has any images
  // No? Return a empty div as a placeholder
  if (!product.images || product.images.length === 0) {
    return <div className="bg-gray-100"></div>;
  }

  return (
    <div>
      <img
        src={product.images[currentIndex]}
        alt={`A product called ${product.title}`}
        className="w-full h-120 object-cover"
        height={400}
        width={200}
      />
      {/* Doesent render button if theres less than 1 image */}
      {product.images.length > 1 ? (
        // Handles index swap action for the images
        // Uses preventDefault and stopPropagation to ensure the click does not bubble and trigger parent Link element
        <button
          type="button"
          onClick={(e) => {
            (e.preventDefault(), e.stopPropagation(), indexSwap());
          }}
          className={`
            absolute top-50 right-0 bg-white/90
            hover:bg-gray-300 active:bg-gray-200 text-black text-3xl cursor-pointer 
            px-2.5 py-1 group invisible group-hover:visible transition-all duration-200 ease-in`}
        >
          {">"}
        </button>
      ) : null}
    </div>
  );
}

// Code for a slideshow - replace current img - probably not gonna use this one

/* <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.title}
            className="w-full h-120 object-cover shrink-0"
          />
        ))}
      </div> */
