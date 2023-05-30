/* istanbul ignore file */
import PropTypes from 'prop-types';
import { LocalesService } from './locales.service';

export const Trans = ({ id, values = {} }) => {
  const i18n = LocalesService.getI18n();
  const message = i18n.get(id, values);

  return _.isObject(message) ? <span dangerouslySetInnerHTML={message} /> : message;
};

Trans.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.object,
};
