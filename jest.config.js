process.env.JEST_JUNIT_OUTPUT = './test-report/junit.xml'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['.d.ts', '.js', '__mocks__'],
  moduleNameMapper: {
    '^@shapeshiftoss\\/([^/]+)': '@shapeshiftoss/$1/src',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}
