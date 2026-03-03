import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chainsaw - About",
  description: "Find out about Chainsaw Man",
};

export default function About() {
  const title = "About Chainsaw Man";
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
                Chainsaw Man (Japanese: <span lang="ja" className="font-noto-sans-jp">チェンソーマン</span>, Hepburn:
                Chensō Man) is a Japanese manga series written and illustrated
                by Tatsuki Fujimoto. Its first arc was serialized in Shueisha's
                shōnen manga magazine Weekly Shōnen Jump from December 2018 to
                December 2020; its second arc began serialization in Shueisha's
                Shōnen Jump+ app and website in July 2022. Its chapters have
                been collected in 22 tankōbon volumes as of September 2025.
              </p>

              <p className="mb-12">
                By December 2025, the manga had over 34 million copies in
                circulation, making it one of the best-selling manga series of
                all time. In 2021, it won the 66th Shogakukan Manga Award in the
                shōnen category and won the Harvey Award in the Best Manga
                category from 2021 to 2023. Chainsaw Man has been overall
                well-received by critics, who have praised its storytelling,
                characters, dark humor, and have particularly highlighted its
                violent scenes within the context of the story.
              </p>
            </div>

            <figure>
              <div className="pl-10">
                <Image
                  className=" mb-2"
                  src="https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg"
                  alt="test"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  width={252}
                  height={396}
                />

                <figcaption className="max-w-63">
                  <p className="">
                    First tankōbon volume cover, featuring Denji in his
                    Devil-human hybrid form, Chainsaw Man
                  </p>
                </figcaption>
              </div>
            </figure>
          </section>
        </section>

        <div className="flex justify-center opacity-75 mt-10">
          <Image
            className="border-3 mb-12"
            src="https://weebrevues.com/wp-content/uploads/2020/04/chainsaw-man-banner.png?w=1302"
            alt="test"
            width={800}
            height={400}
          />
        </div>

        <section className="max-mx-2 grid grid-cols-3 gap-15">
          <span></span>
          <div>
            <h2 className="text-4xl text-center mb-6">Overview</h2>
            <p className="mb-12">
              Chainsaw Man follows the story of Denji, an impoverished teenager
              who makes a contract that fuses his body with that of Pochita, the
              dog-like Chainsaw Devil, granting him the ability to transform
              parts of his body into chainsaws. Denji eventually joins the
              Public Safety Devil Hunters, a government agency focused on
              combating Devils whenever they become a threat to Japan. The
              second arc of the story focuses on Asa Mitaka, a high school
              student who enters into a contract with Yoru, the War Devil, who
              forces her to hunt down Chainsaw Man in order to reclaim what he
              had stolen from her.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
