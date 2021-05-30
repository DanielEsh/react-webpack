import React from 'react';
import { PokemonsRequest } from '../PokedexPage/Model';
import useData from '../../hooks/useData';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log('data', data);

  return <div>This is pokemonm id quals {data?.name}</div>;
};

export default Pokemon;
