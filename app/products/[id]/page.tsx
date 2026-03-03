import data from "@/data/volumes.json";

import Image from "next/image";
import { getProduct } from "@/data/product";
import { Metadata } from "next";
import notFound from "./not-found";
// From https://nextjs.org/docs/app/api-reference/file-conventions/page#reading-searchparams-and-params-in-client-components

// Puts a title on the webpage, which features the products title
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // read route params
  const { id } = await params;
  const idNumber = Number(id);

  // fetch data
  const product = await getProduct(idNumber);

  return {
    title: `Product - ${product.title}`,
  };
}

// Content for the product
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // When this one is done, we get the id for our Promise which will give us the unique id for this product
  const { id } = await params;
  const idNumber = Number(id);
  //   const volume = data.volumes.find((volume) => volume.id === Number(id));
  const product = await getProduct(idNumber);

  // If theres no product, call the notFound function and return
  if (!product) notFound();
  //else return below..
  return (
    <main className="container mx-auto">
      <article className="grid md:grid-cols-2 gap-20">
        {/* TODO: FIX GRID/FLEX OR SMTH ON IMAGES SO THEY WORK CORRECTLY WHILE SCALING THE WINDOW DOWN */}
        <figure className="">
          <img
            className="w-full h-200 object-cover pb-4"
            src={product.images[0]}
            alt={`High quality image of ${product.title}`}
          />

          <div className="flex gap-4">
            <img
              className="w-full h-80 object-cover"
              src={product.images[1]}
              alt=""
            />

            <img
              className="w-full h-80 object-cover"
              src={product.images[2]}
              alt=""
            />
          </div>
        </figure>
        {/* TODO: FIX STYLING ON H1, ITS A BIT INCONSISTENT DEPENDING ON NAME LENGTH */}
        <div className="">
          <h1 className="text-5xl my-5 text-center font-oswald font-bold">
            {product.title}
          </h1>

          <div className="mx-25 space-y-5">
            <span className="text-3xl font-semibold">
              {product.price} kr{" "}
              <span className="text-sm opacity-60">VAT included</span>
            </span>

            {/* TODO: FIX TOP BUTTON TO ALSO BE GROW*/}
            <div className="">
              <button className="mt-10 p-3 text-white/60 text-left flex border-2 cursor-pointer hover:scale-101 active:border-white ">
                Choose your size/model/type
              </button>

              <div className="flex gap-1 mb-15">
                <button className="bg-white font-bold text-black border-2 border-white grow cursor-pointer hover:text-white hover:bg-black transition-colors">
                  Add to bag
                </button>

                <button className="border-2 border-gray-200 p-3 cursor-pointer hover:scale-101 active:border-white">
                  <svg
                    className={`w-7 h-7 transition-all duration-200 ease-in}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                  </svg>
                </button>
              </div>
            </div>

            <section className="grid border-2">
              <p className="border-b-2 p-5">
                Sold and shipped by{" "}
                <span className="font-bold underline hover:text-gray-400 cursor-pointer">
                  The Cool Company
                </span>
              </p>

              <div className="border-b-2 p-5">
                <div className="flex justify-between">
                  <p className="font-bold ">Fri 07 July</p>
                  <p>free</p>
                </div>
                <p>Fast delivery</p>
              </div>

              <div className="flex border-b-2">
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="60"
                  fill="currentColor"
                  className="ml-5"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="m16.5 14.5-4.2-1.9q-.3-.15-.6 0l-4.2 1.9V6.9l2-5.6h5l2 5.9zM9 7.3v4.9l2.1-.9q.9-.45 1.8 0l2.1.9V7.3l-1.6-4.5h-2.9z"></path>
                  <path d="M20.5 22.8h-17c-1.2 0-2.2-1-2.2-2.2V19c0-.4.3-.8.8-.8s.8.3.8.8v1.5c0 .4.3.8.8.8h17c.4 0 .8-.3.8-.8V7.3c0-.1 0-.2-.1-.3l-1.5-3.8c-.1-.3-.4-.5-.7-.5H5c-.3 0-.6.2-.7.5L2.8 7c0 .1-.1.2-.1.3V10c0 .4-.3.8-.8.8s-.7-.4-.7-.8V7.3c0-.3.1-.6.2-.8l1.5-3.8c.4-.9 1.2-1.5 2.1-1.5h14c.9 0 1.7.6 2.1 1.4l1.5 3.8c.1.3.2.5.2.8v13.2c0 1.3-1.1 2.4-2.3 2.4"></path>
                  <path d="M2 7h20v1.5H2zm2.8 6.8h-4c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8s-.4.8-.8.8m0 3h-4c-.5 0-.8-.4-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8-.1.4-.4.8-.8.8"></path>
                </svg>
                <p className=" p-5">Free delivery and free returns</p>
              </div>

              <div className="flex border-b-2">
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="60"
                  className="ml-5"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M14.25 4.33H1.939l3.056-3.055A.75.75 0 0 0 3.934.215L.658 3.49a2.25 2.25 0 0 0 0 3.182l3.276 3.275a.75.75 0 0 0 1.06-1.06L1.94 5.83h12.31c4.557 0 8.251 3.694 8.251 8.25s-3.695 8.42-8.251 8.42h-12a.75.75 0 0 0 0 1.5h12c5.385 0 9.75-4.534 9.75-9.919s-4.365-9.75-9.75-9.75"></path>
                </svg>
                <p className=" p-5">30 day return policy</p>
              </div>

              <div className="flex justify-between">
                <p className="p-5">Sell it back</p>
                <svg
                  viewBox="0 0 24 24"
                  width="25"
                  height="60"
                  fill="currentColor"
                  className="mr-5"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.624-.008 11.992-5.376 12-12 0-6.627-5.373-12-12-12m0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5c5.796.007 10.493 4.704 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5"></path>
                  <circle cx="12" cy="5.6" r="1.1"></circle>
                  <path d="M12 8.25a.75.75 0 0 0-.75.75v9.75a.75.75 0 1 0 1.5 0V9a.75.75 0 0 0-.75-.75"></path>
                </svg>
              </div>
            </section>

            <h2 className="font-oswald text-4xl pt-15">Product Description</h2>
            <p className=" text-balance">{product.description}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
