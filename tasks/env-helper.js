const minimist = require('minimist');

const options = minimist(process.argv.slice(2));
const env = options.env || 'dev';

module.exports = {
  options: { ...options, env },
  isProd: env === 'prod',
  isForDev: env !== 'prod',
};
