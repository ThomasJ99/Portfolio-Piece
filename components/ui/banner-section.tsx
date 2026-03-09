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
      className={`flex container mx-auto gap-6 pt-10 items-center justify-between 
      ${className ?? ""} 
      ${alignImgRight ? "flex-row" : "flex-row-reverse"}`}
    >
      <header className="space-y-10">
        <h2 className="text-4xl font-bold font-oswald text-black uppercase">{title}</h2>

        <p className="text-lg text-black/80 max-w-lg">{description}</p>
      </header>

      <figure>
        {imgSrc && (
          <div className="flex">
            {imgSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={`object-cover ${
                  imgSrc.length === 1 ? "w-150 h-75" : "w-75 h-75"
                }`}
              />
            ))}
          </div>
        )}
        {/* <img src={`${imgSrc}`} alt="" className="size-125 aspect-square" /> */}
      </figure>
    </section>
  );
}
