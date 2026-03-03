import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platzki - About",
  description: "Find out about Platzki",
};

export default function About() {
  const title = "About Platzki";
  return (
    <main className="px-4 py-16">
      <article className="container mx-auto">
        <section>
          <h1 className="text-4xl font-bold mb-6 text-balance font-josefin text-center">
            {title}
          </h1>

          <section className="grid grid-cols-3 gap-15">
            <span>{/* Empty element for grid structure */}</span>

            <div className="">
              <p className="mb-6">
                Platzki Nulla auctor, felis dictum consectetur egestas, odio
                augue consectetur dui, eu interdum nulla dolor quis nibh.
                Praesent egestas ut dui eget volutpat. Mauris in mollis magna,
                sed pretium quam. Aenean fringilla imperdiet risus nec laoreet.
                Aliquam nec porta magna. Praesent eu mauris porttitor, tempor
                mauris eu, tempor eros. Ut sit amet gravida justo. Nulla at enim
                vel eros rutrum faucibus.
              </p>

              <p className="mb-12">
                Nulla auctor, felis dictum consectetur egestas, odio augue
                consectetur dui, eu interdum nulla dolor quis nibh. Praesent
                egestas ut dui eget volutpat. Mauris in mollis magna, sed
                pretium quam. Aenean fringilla imperdiet risus nec laoreet.
                Aliquam nec porta magna. Praesent eu mauris porttitor, tempor
                mauris eu, tempor eros. Ut sit amet gravida justo. Nulla at enim
                vel eros rutrum faucibus.
              </p>
            </div>

            <figure>
              <div className="pl-10">
                <Image
                  className=" mb-2"
                  src="https://placehold.co/600x400"
                  alt="test"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={252}
                  height={396}
                  unoptimized
                />

                <figcaption className="max-w-63">
                  <p className="">
                    Nulla auctor, felis dictum consectetur egestas, odio augue
                    consectetur dui, eu interdum nulla dolor quis nibh. Praesent
                    egestas ut dui eget volutpat. Mauris in mollis magna, sed
                    pretium quam.
                  </p>
                </figcaption>
              </div>
            </figure>
          </section>
        </section>

        <div className="flex justify-center opacity-75 mt-10">
          <Image
            className="border-3 mb-12"
            src="https://placehold.co/600x400"
            alt="test"
            width={800}
            height={400}
            unoptimized
          />
        </div>

        <section className="max-mx-2 grid grid-cols-3 gap-15">
          <span></span>
          <div>
            <h2 className="text-4xl text-center mb-6">Overview</h2>
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ac orci mi. Sed lacinia, eros sit amet sodales
              venenatis, dui nunc imperdiet turpis, ac tincidunt diam nisi non
              leo. Quisque ac ante condimentum, facilisis metus at, pharetra
              sem. Curabitur sollicitudin metus a mauris congue, ut tempus
              lectus sagittis. Curabitur dapibus eros magna, vitae facilisis
              risus venenatis quis. In sollicitudin quam at tincidunt mollis.
              Suspendisse potenti. Nullam et diam purus. Fusce nec dui lacinia,
              egestas enim sed, fringilla justo. Praesent ante velit, egestas a
              arcu nec, blandit tempor est. Pellentesque sit amet ante augue.
              Fusce tristique erat id posuere iaculis. Integer volutpat mi quam,
              nec varius risus pharetra et. Integer a sagittis turpis. Etiam
              lectus urna, tempor in maximus eu, pharetra vitae diam.
              Suspendisse enim sapien, scelerisque id volutpat sed, egestas non
              urna.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
