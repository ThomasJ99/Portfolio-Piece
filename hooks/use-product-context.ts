import { ProductContext } from "@/context/product-context";
import { useState } from "react";

export default function useProductContext(
  defaultMin: number,
  defaultMax: number,
) {
  const [priceValues, setPriceValues] = useState([defaultMin, defaultMax]); //TODO: Move these outside of price slider dual :)

  function setValueOfIndex(newValue: number, index: number) {
    //TODO: Move these outside of price slider dual :)
    setPriceValues((prevValue) =>
      prevValue.map((value, indx) => {
        if (indx === index) {
          return newValue;
        }
        return value;
      }),
    );
  }
  // Contents of Product Context
  const productContext: ProductContext = {
    min: {
      //Get & Set Price Value 0 (min)
      value: priceValues[0],
      setValue: (value) => setValueOfIndex(value, 0),
    },
    max: {
      //Get & Set Price Value 1 (max)
      value: priceValues[1],
      setValue: (value) => setValueOfIndex(value, 1),
    },
    priceRange: priceValues,
    setPriceRange: setPriceValues,
  };

  return productContext;
}
