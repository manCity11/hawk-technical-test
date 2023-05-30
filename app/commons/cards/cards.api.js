import { ApiService as ApiServiceModule } from 'commons/backend/api.service';

function CardsApiMethod(ApiService) {
  return {
    getCards(params) {
      return ApiService.call({
        type: 'WHERE',
        ...params,
      });
    },
  };
}

export const CardsApi = new CardsApiMethod(ApiServiceModule);
