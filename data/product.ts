import type { Product, ProductsResponse } from "@/types/products-json";

const URL_API = process.env.URL_API;

// New version of product fetch that uses URLSearchParams instead of manually building a long query string
// This makes the query(title) easier to read, maintain, and extend
export async function getProducts(
  limit = 6,
  page = 1,
  category?: string,
  query?: string,
  price_min?: number,
  price_max?: number,
  optionalKey?: string,
  optionalValue?: string,
): Promise<ProductsResponse> {
  // Initialize query parameters with required pagination values, limit/page number
  const params = new URLSearchParams({
    _limit: limit.toString(),
    // Offset is depricated, TODO: use page instead
    _page: page.toString(),
  });

  if (optionalKey && optionalValue) {
    params.set(optionalKey, optionalValue);
  }

  if (category) {
    params.set("categoryId", category);
  }

  if (query) {
    params.set("q", query);
  }

  if (price_min) {
    params.set("price_gte", price_min.toString());
  }

  if (price_max) {
    params.set("price_lte", price_max.toString());
  }

  try {
    // Gets the URL using the constructed query params(URLSearchParams)
    const response = await fetch(`${URL_API}products/?${params}`);

    // Parse and return the JSON response
    return await response.json();
  } catch {
    throw new Error("Can't find products, API is down...");
  }
}

// This file fetches data from a API and then exports that data or a error message
export async function getProduct(id: number): Promise<Product> {
  // Gets our api of a single product
  const response = await fetch(`${URL_API}products/${id}`, {});

  return await response.json();
}

export async function getCategories() {
  try {
    const data = await fetch(`${URL_API}categories`);

    return await data.json();

    // Another fail check if using try/catch, both is probably a bit much, so either remove the if statement or this one
  } catch {
    throw new Error("Api not working...");
  }
}
