/* istanbul ignore file */
import lodash from 'lodash/core';
import get from 'lodash/get';
import debounce from 'lodash/debounce';
import fill from 'lodash/fill';
import uniqBy from 'lodash/uniqBy';
import includes from 'lodash/includes';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';
import findIndex from 'lodash/findIndex';

lodash.mixin({
  get,
  debounce,
  fill,
  uniqBy,
  includes,
  orderBy,
  groupBy,
  keys,
  findIndex,
});

export default lodash;
