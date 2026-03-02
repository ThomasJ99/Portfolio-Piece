import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center my-auto space-y-4">
      <h1 className="text-9xl font-oswald">Oops!</h1>
      <h2 className="uppercase text-2xl font-oswald">404 - page not found</h2>
      <p className="text-balance max-w-xl mx-auto">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <Link
        className="bg-orange-400 hover:bg-orange-500 transition-colors uppercase text-shadow-2xs font-bold px-7 py-3 rounded-4xl"
        href="/"
      >
        Go to homepage
      </Link>
    </div>
  );
}
