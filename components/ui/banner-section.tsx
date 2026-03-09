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
      // alginImgRight - first option is default/true, second is false
      className={`flex container mx-auto gap-6 items-center justify-between 
      ${className ?? ""} 
      ${alignImgRight ? "flex-row" : "flex-row-reverse"}`}
    >
      <header className="space-y-10">
        <h2 className="text-4xl font-bold font-oswald uppercase">{title}</h2>

        <p className="text-lg text-white/80 max-w-lg">{description}</p>
      </header>

      <img
        src="https://www.shutterstock.com/shutterstock/photos/2558636193/display_1500/stock-photo-woman-shopping-bag-and-travel-for-fashion-in-street-city-and-sunglasses-for-discount-on-commute-2558636193.jpg"
        alt=""
        className="size-100"
      />
    </section>
  );
}
