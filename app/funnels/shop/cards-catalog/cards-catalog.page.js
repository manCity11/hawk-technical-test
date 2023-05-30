import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { Trans } from 'commons/locales/trans.component';
import { Card } from 'commons/ui-kit/card/card.component';
import { Spinner } from 'commons/ui-kit/spinner/spinner.component';

import { CardsService } from 'commons/cards/cards.service';
import { shopStore } from '../store';
import { ERROR_TYPES } from '../shop.constants';
import { addToCart } from '../store/actions/cart/cart.actions';

export const CatalogPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const currentSearch = useSelector(({ search }) => search);
  const [error, setError] = useState();

  useEffect(() => {
    if (currentSearch) {
      setIsLoading(true);
      setError();

      CardsService
        .getCards({ q: `name:${currentSearch}` })
        .then((rCards) => {
          setCards(rCards);
        })
        .catch(() => {
          setError({ type: ERROR_TYPES.DEFAULT });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [currentSearch]);

  return isLoading ? <Spinner /> : (
    <div className="cards-catalog">
      {
        error ? (
          <div><Trans id="shop.errorMessage" /></div>
        ) : (
          <>
            <h1 className="funnels-layout__title"><Trans id="shop.cardsCatalog.title" /></h1>
            <div className="cards-catalog__container">
              {
                _.map(cards, (card, index) => (
                  <Card key={index} card={card} onClick={() => shopStore.dispatch(addToCart(card))} />
                ))
              }
            </div>
          </>
        )
      }
    </div>
  );
};
