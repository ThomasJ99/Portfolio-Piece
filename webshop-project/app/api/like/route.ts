// NextResponse is Next.js' way of sending HTTP responses from an API route
import { NextResponse } from "next/server";

// A simple in-memory store on the server
// The Map stores: product name -> number of likes
// NOTE: This only persists while the server is running
const likesStore = new Map<string, number>();

// POST /api/like
// Called when a user clicks "like" or "unlike"
export async function POST(request: Request) {
  // Read the request body (sent from fetch on the client)
  const { productName, action } = await request.json();

  // Get the current number of likes for the product
  // If it doesn't exist yet -> start at 0
  const currentLikes = likesStore.get(productName) || 0;

  // Determine the new number of likes based on the action - like | unlike
  const newLikes =
    action === "like"
      ? currentLikes + 1 // like -> +1
      : Math.max(currentLikes - 1, 0); // unlike -> -1 (but never below 0)

  // Save the new value in the Map
  likesStore.set(productName, newLikes);

  // Send a JSON response back to the client
  return NextResponse.json({
    productName,
    likes: newLikes,
  });
}

// GET /api/like?productName=ExampleProduct
// Called when the page loads to fetch the current number of likes
export async function GET(request: Request) {
  // Extract query parameters from the URL
  const { searchParams } = new URL(request.url);
  const productName = searchParams.get("productName");

  // If no product name was provided -> error
  if (!productName) {
    return NextResponse.json(
      { error: "Product name required" },
      { status: 400 },
    );
  }

  // Get the number of likes from the Map
  // If it doesn't exist -> 0
  const likes = likesStore.get(productName) || 0;

  // Send the data back to the client
  return NextResponse.json({ productName, likes });
}
