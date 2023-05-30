/* istanbul ignore file */
jest.mock('./cards.api', () => ({
  CardsApi: {
    getCards: jest.fn(),
  },
}));
