/* istanbul ignore file */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Trans } from 'commons/locales/trans.component';
import { SEARCH_TYPES } from 'commons/stores/search/search.types';

import './locales/locales-en.i18n';
import './header.scss';

const HeaderComponent = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SEARCH_TYPES.SEARCH, payload: input });
  };

  return (
    <header className="header">
      <div className="header__email">
        <span className="material-symbols-outlined">Mail</span>
        <a href="mailto:contact@pokemoncarte.com" aria-label="email"><Trans id="header.email" /></a>
      </div>
      <div className="header__picture">
        <img src="https://cdn3.pokemoncarte.com/img/prestashop-1442662319.jpg" alt="pokemon" />
      </div>
      <div className="header__other">
        <div className="header__account">
          <a href="/" className="login" aria-label="login"><Trans id="header.account.login" /></a>
          <a href="/" className="my-account" aria-label="account"><Trans id="header.account.myAccount" /></a>
        </div>
        <div className="header__cart">
          <form onSubmit={onSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e?.target?.value)} />
            <button type="submit">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export const Header = connect()(HeaderComponent);
