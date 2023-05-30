import { CardsApi } from './cards.api';

const { CardsService } = jest.requireActual('./cards.service');

describe('CardsService', () => {
  const name = 'blastoise';

  describe('getCards', () => {
    test('should call cards api', (done) => {
      CardsApi.getCards.mockResolvedValue([{ id: 1, name }]);
      CardsService.getCards({ name }).then(() => {
        expect(CardsApi.getCards).toBeCalledWith({ name });
        done();
      });
    });
  });
});
