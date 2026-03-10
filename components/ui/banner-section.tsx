import Image from "next/image";

export default function BannerSection({
  title,
  description,
  className,
  alignImgRight = true,
  imgSrc,
}: {
  title: string;
  description: string;
  className?: string;
  alignImgRight: boolean;
  imgSrc?: string[];
}) {
  return (
    <section
      // alginImgRight - first option is default/true, second is false
      className={`flex sm:flex-wrap container mx-auto gap-6 pt-10 items-center justify-between text-pretty
      ${className ?? ""} 
      ${alignImgRight ? "flex-row" : "flex-row-reverse"}`}
    >
      <header className="space-y-10">
        <h2 className="text-4xl font-bold font-oswald text-black uppercase">
          {title}
        </h2>

        <p className="text-lg text-black/80 max-w-lg">{description}</p>
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
