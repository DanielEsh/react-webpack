import { useEffect, useState } from 'react';
import request from '../utils/request';

interface IPocemonRequest {
  totalPokemons: number;
  pokemons: any;
}

const initialValue = {
  totalPokemons: 0,
  pokemons: [],
};

const usePokemons = () => {
  const [data, setData] = useState<IPocemonRequest>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    request('getPokemons')
      .then((resp) => {
        setData(resp);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

export default usePokemons;
