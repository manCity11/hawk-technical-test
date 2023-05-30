/* istanbul ignore file */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Trans } from 'commons/locales/trans.component';

import { FloatingCartSummary } from './floating-cart-summary.component';

import './locales/locales-en.i18n';

export const FloatingCart = () => {
  const [isDetailDisplayed, setIsDetailDisplayed] = useState(false);
  const currentCart = useSelector(({ cart }) => cart);

  return (
    <div className="funnels-layout-cart-container">
      {
        !isDetailDisplayed ? (
          <div className="funnels-layout-cart-container__header">
            <div className="funnels-layout-cart__left">
              <span className="material-symbols-outlined">
                local_mall
              </span>
              &nbsp;
              <Trans id="cart.amount" />
              &nbsp;
              {currentCart.total}
              <Trans id="globals.currency" />
            </div>
            <div className="funnels-layout-cart__right">
              <button type="button" onClick={() => setIsDetailDisplayed(true)}>
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="funnels-layout-cart-container__header">
              <h2 className="funnels-layout-cart__left">Mon Panier</h2>
              <div className="funnels-layout-cart__right">
                <button type="button" onClick={() => setIsDetailDisplayed()}>
                  <span className="material-symbols-outlined">
                    expand_less
                  </span>
                </button>
              </div>
            </div>
            <FloatingCartSummary cart={currentCart} />
          </div>
        )
      }
    </div>
  );
};
