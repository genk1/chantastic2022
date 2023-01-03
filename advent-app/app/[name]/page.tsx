// 'use client';

import Image from 'next/image';
import { GetStaticProps } from 'next/types';
import { fetchPokemonByName } from '../utils/request';

export default async function NamePage(context: GetStaticProps) {
  const { name } = context?.params;
  const pokemon = await fetchPokemonByName(context.params.name);
  return (
    <main>
      <h1>
        {pokemon.id}: {pokemon.name}
      </h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} front`}
        width='96'
        height='96'
      />
    </main>
  );
}
