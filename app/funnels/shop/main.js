/* istanbul ignore file */
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header } from 'commons/ui-kit/header/header.component';
import { FloatingCart } from 'commons/ui-kit/floating-cart/floating-cart.component';

import { SHOP_ROUTES } from './route';
import { shopStore } from './store';

import 'commons/locales/locales-en.i18n';
import './locales/locales-en.i18n';
import './shop.scss';

export function MainTemplate() {
  return (
    <Provider store={shopStore}>
      <div className="shop">
        <Header />
        <div className="funnels-layout__container">
          <Routes>
            {
              SHOP_ROUTES
              .map(({ path, component: Component, exact }) => <Route path={path} element={<Component />} exact={exact} key={path} />) // eslint-disable-line
            }
          </Routes>
        </div>
        <FloatingCart />
      </div>
    </Provider>
  );
}
