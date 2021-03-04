module.exports = {
  preset: 'amex-jest-preset-react',
  setupFilesAfterEnv: ['./jest.setup.js'],
  coveragePathIgnorePatterns: ['./src/hooks/useErrorBoundary.js', './src/hooks/useGeolocation.js'],
};
