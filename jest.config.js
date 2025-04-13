module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      useESM: true
    }]
  },
  moduleNameMapper: {
    '^@angular/core$': '<rootDir>/node_modules/@angular/core/fesm2022/core.mjs',
    '^rxjs$': '<rootDir>/node_modules/rxjs/dist/cjs/index.js',
    '^ts-morph$': '<rootDir>/node_modules/ts-morph/dist/ts-morph.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!@angular|rxjs|ts-morph)'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs']
}; 