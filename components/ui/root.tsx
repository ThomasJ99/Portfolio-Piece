"use client";
import { ProductCtx, ProductContext } from "@/context/product-context";
import useProductContext from "@/hooks/use-product-context";



// Props inherited with React.PropsWithChildren gain access to child react elements
interface RootProps extends React.PropsWithChildren {
  defaultMin: number;
  defaultMax: number;
  //children
}



export default function Root({
  defaultMin,
  defaultMax,
  children,
}: RootProps) {
  const productContext = useProductContext(defaultMin, defaultMax);
  return (
    <ProductCtx.Provider value={productContext}>{children}</ProductCtx.Provider>
  );
}
