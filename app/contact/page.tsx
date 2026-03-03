import Link from "next/link";

    export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Container for the 404 number and potential imagery */}
      <div className="relative mb-8">
        {/* Placeholder for the unique '404' brush-stroke graphic */}
        {/* You would replace this text with an <img> tag pointing to your custom 404 image asset */}
        <p className="text-[15rem] font-bold text-gray-900 leading-none">404</p>

        {/* Placeholder for the stacked stones image background */}
        {/* Position this image absolutely behind the text using CSS */}
        {/* <img src="/images/stacked-stones.png" alt="Stacked stones" className="absolute ...""")/>> */}
      </div>

      {/* Main message text */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        There's **NOTHING** here...
      </h1>

      {/* Subtitle text */}
      <p className="text-gray-500 mb-8">
        ...maybe the page you're looking for is not found or never existed.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="flex items-center justify-center px-8 py-3 text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
      >
        Back to home
        {/* Optional arrow icon (e.g., using Heroicons or Lucide icons) */}
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
