/* istanbul ignore file */
import PropTypes from 'prop-types';
import { Trans } from 'commons/locales/trans.component';

import './card.scss';
import './locales/locales-en.i18n';

export const Card = ({ card, onClick }) => (
  <div className="card">
    <div className="card__image-container">
      <img src={card?.image} width="240px" height="330px" alt={card.name} />
    </div>
    <div>{card.id}</div>
    <div>{card?.name}</div>
    <div>
      {card?.price}
      <Trans id="globals.currency" />
    </div>
    <button type="button" className="funnels-layout__button" aria-label="button" onClick={onClick}>
      <Trans id="card.add" />
    </button>
  </div>
);

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
