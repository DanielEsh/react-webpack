import React, { useEffect, useState } from 'react';

import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokedexCard';

import s from './Pokedex.module.scss';

const PokedexPage: React.FC = () => {
  const [totalPokemons, setTotalPokemons] = useState<number>(0);
  const [pokemons, setPokemons] = useState([]); // TODO: добавить интерфейс для покемонов
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isError) {
    return <div>Error</div>;
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
              {totalPokemons} <b>Pokemons</b> for you to choose your favorite
            </Heading>
            <input type="text" className={s.searchInput} />
          </div>
          <div className={s.pokemons}>
            {pokemons.map((item) => (
              <PokemonCard key={item.id} name={item.name} stats={item.stats} types={item.types} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
