// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1", // if you're using `~/` alias
  },
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

export default config;
