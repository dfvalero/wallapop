module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.scss$': '<rootDir>/jest/styleFileTransformer.js',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/views/**/*.{ts,tsx}',
    '!src/services/**/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
};
