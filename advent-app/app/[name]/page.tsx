// 'use client';

import { GetStaticProps } from 'next/types';
import { fetchPokemonByName } from '../utils/request';

export default async function NamePage(context: GetStaticProps) {
  const { name } = context?.params;
  const res = await fetchPokemonByName(context.params.name);
  return (
    <main>
      <h1>
        {res.id}: {res.name}
      </h1>
    </main>
  );
}
