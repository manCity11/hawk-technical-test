import { apiKey } from 'MAIN_CONFIG';
import pokemonApi from 'pokemontcgsdk';

const REQUEST_TYPES = {
  FIND: 'find',
  WHERE: 'where',
  ALL: 'all',
};

function ApiServiceMethod() {
  pokemonApi.configure({ apiKey });

  return {
    call: ({ type, ...config }) => pokemonApi.card[REQUEST_TYPES[type] || REQUEST_TYPES.ALL](config)
      .then((result) => (REQUEST_TYPES[type] === REQUEST_TYPES.WHERE ? result.data : result)),
  };
}

export const ApiService = new ApiServiceMethod();
