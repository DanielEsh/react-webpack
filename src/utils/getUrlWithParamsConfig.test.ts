import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать 2 аргумента "getPokemons" и пустой объект', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });
  test('Должна принимать 2 аргумента "getPokemons" и имя', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });
  test('Должна принимать 2 аргумента "getPokemon" и { id: 25 }', () => {
    const url = getUrlWithParamsConfig('getPokemons', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
