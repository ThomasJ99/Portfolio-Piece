import data from "@/data/volumes.json";
import CardGrid from "@/components/ui/volume-grid";
import Hero from "@/components/ui/hero";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { limit } = await searchParams;

  const volumes = data.volumes.slice(0, Number(limit));

  // const volumes = data.volumes;
  // const total = data.total

  // Destructuring of const volumes = data.volumes
  const { volumes: volume } = data;

  return (
    <main>
      <Hero />

      {/* Creates a grid of cards, it imports a component using a function */}
      <CardGrid volumes={volume} />
    </main>
  );
}
