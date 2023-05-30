/* istanbul ignore file */
import { SHOP_PATHS } from './route-path';

import { CatalogPage } from './cards-catalog/cards-catalog.page';

export const SHOP_ROUTES = [
  {
    path: SHOP_PATHS.ENTRY,
    component: CatalogPage,
  },
];
