import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { fetchPokemons } from '../utils/request';

const PokemonLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  let data = await fetchPokemons();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '10rem 1fr',
        padding: '2rem',
      }}
    >
      <aside>
        <ul>
          {data.results.map((pokemon) => (
            <li key={pokemon.name}>
              <Link href={`/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </div>
  );
};

export default PokemonLayout;
