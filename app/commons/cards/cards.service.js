import { CardsApi as CardsApiModule } from './cards.api';
import { Card } from './models/card.model';

function CardsServiceMethod(CardsApi) {
  return {
    getCards(params) {
      return CardsApi.getCards(params).then((cards) => _.map(cards, (card) => new Card(card)));
    },
  };
}

export const CardsService = new CardsServiceMethod(CardsApiModule);
