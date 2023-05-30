import { ApiService } from 'commons/backend/api.service';

const { CardsApi } = jest.requireActual('./cards.api');

describe('CardsApi', () => {
  const name = 'blastoise';

  describe('getCards', () => {
    test('should call cards api', (done) => {
      ApiService.call.mockResolvedValue([{ id: 1, name }]);
      CardsApi.getCards({ name }).then(() => {
        expect(ApiService.call).toBeCalledWith({ name, type: 'WHERE' });
        done();
      });
    });
  });
});
