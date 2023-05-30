/* istanbul ignore file */
jest.mock('./cards.service', () => ({
  CardsService: {
    getCards: jest.fn(),
  },
}));
