import Image from "next/image";
import Link from "next/link";

export default function BannerSection({
  title,
  description,
  className,
  alignImgRight = true,
  imgSrc,
  ctaLink,
  ctaStyle,
  ctaDesc
}: {
  title: string;
  description: string;
  className?: string;
  alignImgRight: boolean;
  imgSrc?: string[];
  ctaLink?: string;
  ctaStyle?: string
  ctaDesc?: string
}) {
  return (
    <section
      // alginImgRight - first option is default/true, second is false
      className={`flex flex-wrap xl:flex-nowrap container mx-auto gap-6 pt-10 items-center justify-between text-pretty
      ${className ?? ""} 
      ${alignImgRight ? "flex-row" : "flex-row-reverse"}`}
    >
      <header className="space-y-10">
        <h2 className="text-4xl font-bold font-oswald text-black uppercase">
          {title}
        </h2>

        <p className="text-lg text-black/80 max-w-lg">{description}</p>

        <Link
          className={`${ctaStyle}`}
          href={`${ctaLink}`}
        >
          {ctaDesc}
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M.443 12c0 .414.336.75.75.75h20.869l-7.72 7.72a.75.75 0 0 0 1.06 1.06l7.94-7.94a2.25 2.25 0 0 0 0-3.18l-7.94-7.94a.75.75 0 0 0-1.06 1.06l7.72 7.72H1.192a.75.75 0 0 0-.75.75"></path>
          </svg>
        </Link>
      </header>

      <figure>
        {imgSrc && (
          <div className="flex">
            {imgSrc.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={600}
                height={400}
                className={`object-cover ${
                  imgSrc.length === 1 ? "w-150 h-100" : "w-75 h-100"
                }`}
              />
            ))}
          </div>
        )}
      </figure>
    </section>
  );
}
