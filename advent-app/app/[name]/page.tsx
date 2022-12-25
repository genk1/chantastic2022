// "use client";

import { GetStaticProps } from "next/types";
import { fetchPokemonByName } from "../utils/request";

export default async function NamePage(context: GetStaticProps) {
  const { name } = context?.params;
  const res = await fetchPokemonByName(context.params.name);
  console.log(res);
  return (
    <main>
      <p>id: {res.id}</p>
      <p>name: {res.name}</p>
    </main>
  );
}
