import { CART_ACTION_TYPES } from 'commons/stores/cart/cart.types';

const { addToCart } = jest.requireActual('./cart.actions');

describe('addToCart', () => {
  test('should call dispatch with the payload', () => {
    const product = { id: 1 };
    const dispatch = jest.fn();

    addToCart(product)(dispatch);
    expect(dispatch).toBeCalledWith({ type: CART_ACTION_TYPES.ADD_CART, payload: product });
  });
});
