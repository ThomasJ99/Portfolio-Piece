import { Product } from "@/types/products";

const URL_API = "https://api.escuelajs.co/api/v1/";

// This is where we get the product information
export async function getProducts(
  limit = 4,
  offset = 0,
  category?: string,
  title?: string,
): Promise<Product[]> {
  const fetchURL = `${URL_API}products?limit=${limit}&offset=${offset}${category ? `&categorySlug=${category}` : ""}${title ? `&title=${title}` : ""}`;
  try {
    const data = await fetch(fetchURL);

    console.log("hello ppl", fetchURL);

    return await data.json();

    // Another fail check if using try/catch, both is probably a bit much, so either remove the if statement or this one
  } catch (error) {
    // Different ways to show error
    throw new Error("Api not working...");
    // ("Api not working...");
    // redirect("/uykkp99uy")
  }
}

// New version of product fetch that uses URLSearchParams instead of manually building a long query string
// This makes the query(title) easier to read, maintain, and extend
export async function getProducts2(
  limit = 4,
  offset = 0,
  category?: string,
  title?: string,
  price_min?: number,
  price_max?: number,
): Promise<Product[]> {
  // Initialize query parameters with required pagination values, limit/offset
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  // Append category/title filter only if provided
  // Can easily add other optional filters like price/price range here

  if (category) {
    params.set("categorySlug", category);
  }

  if (title) {
    params.set("title", title);
  }

  if (price_min) {
    params.set("price_min", price_min.toString());
  }

  if (price_max) {
    params.set("price_max", price_max.toString());
  }

  try {
    // Gets the URL using the constructed query params(URLSearchParams)
    const response = await fetch(`${URL_API}products/?${params}`);

    // Parse and return the JSON response
    return await response.json();
  } catch {
    throw new Error("API is down...");
  }
}

// This file fetches data from a API and then exports that data or a error message
export async function getProduct(id: number): Promise<Product> {
  // Depending on how we want to use this file we could tweak what/who has access to it by returning null

  // Gets our api of a single product
  const response = await fetch(`${URL_API}products/${id}`, {
    // Caches files and redoes it every 1 hour
    // next: { revalidate: 3600 },
  });

  return await response.json();

  // const data = await response.json() as Product[];

  // return data;
}

export async function getCategories() {
  try {
    const data = await fetch(`${URL_API}categories`);

    return await data.json();

    // Another fail check if using try/catch, both is probably a bit much, so either remove the if statement or this one
  } catch (error) {
    // Different ways to show error
    throw new Error("Api not working...");
    // ("Api not working...");
    // redirect("/uykkp99uy")
  }
}
