/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build', '<rootDir>/src/constants'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageReporters: ["text", "json", "html"],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build'],
  transform: {
    "<rootDir>/node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^(\\.\\.?\\/.+)\\.jsx?$": "$1"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!variables/.*)"
  ]
};