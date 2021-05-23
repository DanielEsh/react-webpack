import React from 'react';

import usePokemons from '../../hooks/usePokemons';

import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokedexCard';

import s from './Pokedex.module.scss';

const PokedexPage: React.FC = () => {
  const { data, error, isLoading } = usePokemons();

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={s.root}>
        <div className={s.layout}>
          <div className={s.searchFilter}>
            <Heading type="h3">
              {data.totalPokemons} <b>Pokemons</b> for you to choose your favorite
            </Heading>
            <input type="text" className={s.searchInput} />
          </div>
          <div className={s.pokemons}>
            {data.pokemons.map((item) => (
              <PokemonCard key={item.id} name={item.name} stats={item.stats} types={item.types} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
