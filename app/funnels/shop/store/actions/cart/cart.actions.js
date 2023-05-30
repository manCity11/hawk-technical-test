import { CART_ACTION_TYPES } from 'commons/stores/cart/cart.types';

export const addToCart = (product) => (dispatch) => dispatch({ type: CART_ACTION_TYPES.ADD_CART, payload: product });
