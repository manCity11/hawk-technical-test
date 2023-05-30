import pokemonApi from 'pokemontcgsdk';

const { ApiService } = jest.requireActual('./api.service');
const apiKey = 'dummy';

jest.mock('pokemontcgsdk', () => ({ card: { where: jest.fn() }, configure: jest.fn() }));
jest.mock('MAIN_CONFIG', () => ({ apiKey }));

describe('ApiService', () => {
  describe('call', () => {
    test('should call where function', () => {
      const params = {
        type: 'WHERE',
        q: 'name:dummy',
      };

      pokemonApi.card.where.mockResolvedValue({});
      ApiService.call(params);

      expect(pokemonApi.card.where).toBeCalledWith({ q: params.q });
    });
  });
});
