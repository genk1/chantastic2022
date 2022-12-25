// "use client";

// import { useRouter } from "next/router";
import { ResourceList } from "./types/response";

export default async function Home() {
  // const router = useRouter();
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data: ResourceList = await res.json();
  console.log(data.results);
  return (
    <main>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </main>
  );
}
