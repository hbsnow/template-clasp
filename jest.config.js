/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

module.exports = config;
