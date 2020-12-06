import type {Config} from "@jest/types";
export const config: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(/src/.*\\.(test|spec))\\.(jsx?|tsx?)$",
  testEnvironment: "node",
};
export default config;
