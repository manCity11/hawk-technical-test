import { SEARCH_TYPES } from 'commons/stores/search/search.types';

export default function searchReducer(state = '', { type, payload } = {}) {
  switch (type) {
    case SEARCH_TYPES.SEARCH:
      return payload;
    default:
      return state;
  }
}
