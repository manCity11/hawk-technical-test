module.exports = {
  rootDir: process.cwd(), // where jest.config is otherwise
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tasks/tests/helpers/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
    '\\.(scss|i18n)$': '<rootDir>/tasks/tests/helpers/styleMock.js',
    MAIN_CONFIG: '<rootDir>/tasks/tests/helpers/configMock.js',
    '^commons(.*)$': '<rootDir>/app/commons/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tasks/tests/helpers/tests.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)'],
  coverageReporters: ['html'],
  testEnvironment: 'jsdom',
  displayName: 'app',
  roots: ['<rootDir>/app'],
  coverageThreshold: {
    global: {
      statements: 94.52,
      lines: 96.87,
      branches: 65.78,
      functions: 87.09,
    },
  },
  coverageProvider: 'babel',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'app/**/*.js',
    '!app/**/*.{mock,constants,route,route-path,api}.js',
  ],
};
