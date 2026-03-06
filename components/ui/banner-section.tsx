import Image from "next/image";

export default function BannerSection({
  title,
  description,
  className,
  alignImgRight = true,
}: {
  title: string;
  description: string;
  className?: string;
  alignImgRight: boolean;
}) {
  return (
    <section
      className={`flex ${className ?? ""} ${alignImgRight ? "md:flex-wrap bg-amber-100" : "flex-row-reverse bg-green-400"}`}
    >
      <header>
        <h2>{title}</h2>

        <p>{description}</p>
      </header>

      {/* <Image src={""} width={1} height={1} alt="" /> */}
      <p className="bg-amber-300 p-50 block size-50">wdlajdpawhfo</p>
    </section>
  );
}
