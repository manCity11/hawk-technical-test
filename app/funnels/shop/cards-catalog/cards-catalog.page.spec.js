import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render,
  waitFor,
} from '@testing-library/react';
import { CardsService } from 'commons/cards/cards.service';

import { CatalogPage } from './cards-catalog.page';

import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({ useSelector: jest.fn().mockReturnValue('toto') }));

describe('CatalogPage', () => {
  test('should fetch cards', (done) => {
    CardsService.getCards.mockResolvedValue([{ id: 1 }]);
    render(
      <BrowserRouter>
        <CatalogPage />
      </BrowserRouter>,
    );

    waitFor(() => {
      expect(CardsService.getCards).toBeCalledWith({ q: 'name:toto' });
      done();
    });
  });
});
