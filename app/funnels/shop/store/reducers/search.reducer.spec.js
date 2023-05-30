import { SEARCH_TYPES } from 'commons/stores/search/search.types';

const searchReducer = jest.requireActual('./search.reducer').default;

describe('searchReducer', () => {
  test('should return the payload', () => {
    const keyWord = 'dummy';
    const search = searchReducer('', { type: SEARCH_TYPES.SEARCH, payload: keyWord });

    expect(search).toEqual(keyWord);
  });
});
