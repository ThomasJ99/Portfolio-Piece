export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category
  images: string[];
}

// Sub-interface
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// Declare props(product) as a Product type
export interface ProductCardProps {
  product: Product;
}