import data from "@/data/volumes.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

//// Static rendering
// export async function generateStaticParams() {
//   return data.volumes.map((volume) => ({
//     id: volume.id.toString(),
//   }));
// }

// From https://nextjs.org/docs/app/api-reference/file-conventions/page#reading-searchparams-and-params-in-client-components


// export default async function ProductPage({params,}: {params: Promise<{ id: string }>;}) {
  export default async function ProductPage({params}: PageProps<"/product/[id]">){
  
    // When this one is done, we get the id for our Promise
    const { id } = await params;
    const volume = data.volumes.find((volume) => volume.id === Number(id));
    
    // If theres no volume, call the notFound function and return
    if (!volume) notFound();
    //else return below..
  return (
    <main className="container mx-auto py-20">
      <Link className="block mb-8 text-sm font-bold" href={"/"}></Link>
      <article className="grid md:grid-cols-3 ">
        <div className="">
          <Image
            className="w-full"
            src={volume.image}
            height={189}
            width={258}
            alt=""
          ></Image>
          <h1 className="text-5xl my-5 text-center">{volume.volume}</h1>
          <p>{volume.description}</p>
        </div>

        <div className="text-center">
          <button className="">Buy</button>
          <button>Put in cart</button>
        </div>
      </article>
    </main>
  );
}
