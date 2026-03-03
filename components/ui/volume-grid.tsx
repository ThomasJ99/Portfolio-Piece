import { Volume } from "@/types/chainsaw";
import Image from "next/image";
import Link from "next/link";

// With props
// export default function CardGrid(props: { volumes: Volume[] }) {

// These two are the same, id argue the second (destructured) is better
// const volumes = props.volumes
// const {volumes} = props
// This function does what the above function does and the const {volumes} = props line does, but in 1 line instead
export default function VolumeGrid({ volumes }: { volumes: Volume[] }) {
  return (
    <section
      role="region"
      aria-labelledby="Manga-volumes"
      className="container mx-auto"
    >
      <h2 className="text-5xl py-12 text-center" id="Manga-volumes">
        Manga Volumes
      </h2>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-8">
        {/* Takes a array that it runs a function on each array item */}
        {/* This function works really well to render lists because it doesent mutate the array */}
        {/* “For every item in the volumes array, run this function and return a new array of results.” */}
        {volumes.map((volume) => (
          <li
            // Here is how we differentiate the items
            // Try to deep dive on this one - ask for help when neccessary
            key={volume.id}
            className={`${volume.isLatest ? "border-2 border-red-600" : ""} h-full`}
          >
            <Link href={`/volume/${volume.id}`}>
              <Image
                className="w-full scale-95 hover:scale-100 transition "
                src={volume.image}
                width={180}
                height={284}
                alt=""
                // alt={`Manga cover for ${volume.volume} of the manga series Chainsaw Man, written by Tatsuki Fujimoto`}
              />
            </Link>

            <div className="font-inter mx-4 flex flex-col">
              <h3 className="text-2xl underline underline-offset-2 hover:text-amber-300 transition-colors">
                {volume.volume}
              </h3>

              <span className="mt-auto block text-right text-sm text-white/70 font-light">
                {volume.releaseDate}
              </span>

              <span className="mb-4 italic text-white/80">{volume.arc}</span>
              <p className="leading-relaxed">{volume.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
