import { CART_ACTION_TYPES } from 'commons/stores/cart/cart.types';

const cartReducer = jest.requireActual('./cart.reducer').default;

describe('cartReducer', () => {
  test('should return cart with the added product', () => {
    const product = { id: 1, price: 5 };

    const cart = cartReducer({}, { type: CART_ACTION_TYPES.ADD_CART, payload: product });
    expect(cart.allProducts).toEqual([product]);
    expect(cart.products[product.id]).toEqual([product]);
    expect(cart.total).toBe(product.price);
  });

  test('should return cart with removed product', () => {
    const product = { id: 1, price: 5 };
    const initialState = {
      allProducts: [product, product],
      products: {
        [product.id]: [product, product],
      },
      total: 2 * product.price,
    };

    const cart = cartReducer(initialState, { type: CART_ACTION_TYPES.DELETE_PRODUCT_CART, payload: product });
    expect(cart.allProducts).toEqual([product]);
    expect(cart.products[product.id]).toEqual([product]);
    expect(cart.total).toBe(product.price);
  });

  test('should remove all products with the given id', () => {
    const product = { id: 1, price: 5 };
    const initialState = {
      allProducts: [product, product],
      products: {
        [product.id]: [product, product],
      },
      total: 2 * product.price,
    };

    const cart = cartReducer(initialState, { type: CART_ACTION_TYPES.DELETE_ALL_PRODUCTS_ID, payload: product });
    expect(cart.allProducts).toEqual([]);
    expect(cart.products).toEqual({});
    expect(cart.total).toBe(0);
  });
});
