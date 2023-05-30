import { CART_ACTION_TYPES } from 'commons/stores/cart/cart.types';

const formatProductsCart = (products) => ({
  products: _.groupBy(products, 'id'),
  total: products.reduce((acc, { price }) => acc + price, 0),
});

export default function cartReducer(state = { allProducts: [], products: [], total: 0 }, { type, payload } = {}) {
  let allProducts = [];
  let foundProductIndex;

  switch (type) {
    case CART_ACTION_TYPES.ADD_CART:
      allProducts = state.products ? [...state.allProducts, payload] : [payload];
      return {
        allProducts,
        ...formatProductsCart(allProducts),
      };
    case CART_ACTION_TYPES.DELETE_PRODUCT_CART:
      foundProductIndex = _.findIndex(state.allProducts, ({ id }) => payload.id === id);
      allProducts = foundProductIndex >= 0
        ? _.filter(state.allProducts, (p, index) => index !== foundProductIndex) : state.allProducts;

      return {
        allProducts,
        ...formatProductsCart(allProducts),
      };
    case CART_ACTION_TYPES.DELETE_ALL_PRODUCTS_ID:
      allProducts = state.products ? _.filter(state.allProducts, ({ id }) => payload.id !== id) : [];
      return {
        allProducts,
        ...formatProductsCart(allProducts),
      };
    default:
      return state;
  }
}
