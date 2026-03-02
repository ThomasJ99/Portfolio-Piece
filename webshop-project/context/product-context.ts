import { createContext } from "react";

type PriceValueState = {
  value: number; //Getter
  setValue: (value: number) => void; //Setter - arrow function definition
};

//Definitioon of what ProductContext actually is
export type ProductContext = {
  //Put stuff that you want access to
  
  //Min/Max stuff from PriceValueState
  min: PriceValueState;
  max: PriceValueState;

  // Get & Set of PriceRange State
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
};

// Component of productcontext
export const ProductCtx = createContext({} as ProductContext);
