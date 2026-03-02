// components always has PascalCase
export default function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    // JSX/TSX - React.ReactNode renders out our JSX which is our HTML written like this
    <section className="container mx-auto px-4 py-16 space-y-4">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(35ch,1fr))] gap-4">
        {children}
      </ul>
    </section>
  );
}
