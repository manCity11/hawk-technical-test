/* istanbul ignore file */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Trans } from 'commons/locales/trans.component';

import { CART_ACTION_TYPES } from 'commons/stores/cart/cart.types';

import './floating-cart.scss';

const FloatingCartSummaryComponent = ({ cart, dispatch }) => (
  <div className="floating-cart-summary">
    <h3><Trans id="card.productsSection" /></h3>
    <div className="floating-cart-summary__products">
      {
        _.map(_.keys(cart.products), (key) => (
          <div className="floating-cart-summary__product" key={key}>
            <span>{_.get(cart, `products.${key}[0].id`)}</span>
            <span>{_.get(cart, `products.${key}[0].name`)}</span>
            <span>
              {_.get(cart, `products.${key}[0].price`)}
              <Trans id="globals.currency" />
            </span>
            <span>
              <button
                type="button"
                onClick={() => dispatch({ type: CART_ACTION_TYPES.ADD_CART, payload: _.get(cart, `products.${key}[0]`) })}
              >
                <span className="material-symbols-outlined">
                  add
                </span>
              </button>
              <span className="floating-cart-summary__quantity">{cart.products[key].length}</span>
              <button
                type="button"
                onClick={() => dispatch({
                  type: CART_ACTION_TYPES.DELETE_PRODUCT_CART,
                  payload: _.get(cart, `products.${key}[0]`),
                })}
              >
                <span className="material-symbols-outlined">
                  remove
                </span>
              </button>
            </span>
            <button
              type="button"
              onClick={() => dispatch({
                type: CART_ACTION_TYPES.DELETE_ALL_PRODUCTS_ID,
                payload: _.get(cart, `products.${key}[0]`),
              })}
            >
              <span className="material-symbols-outlined">
                delete
              </span>
            </button>
          </div>
        ))
      }
    </div>
    <h3>
      <Trans id="cart.amount" />
      :
      &nbsp;
      {cart.total}
      <Trans id="globals.currency" />
    </h3>
  </div>
);

FloatingCartSummaryComponent.propTypes = {
  cart: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const FloatingCartSummary = connect()(FloatingCartSummaryComponent);
