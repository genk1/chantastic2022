// "use client";

// import { useRouter } from "next/router";
import Link from 'next/link';
import { ResourceList } from './types/response';

export default async function Home() {
  // const router = useRouter();
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data: ResourceList = await res.json();
  return (
    <main>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
