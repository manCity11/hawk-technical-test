/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import { LocalesService } from './locales.service';

const I18nContext = React.createContext({ i18nContext: {} });

export const withI18nContext = (Component) => (props) => (
  <I18nContext.Consumer>{(contexts) => <Component {...props} {...contexts} />}</I18nContext.Consumer>
);

export const I18nProvider = ({ children }) => {
  const i18n = LocalesService.getI18n();

  return (
    <I18nContext.Provider value={{ i18nContext: { get: i18n.get } }}>{children}</I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};
