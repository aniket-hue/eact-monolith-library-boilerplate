import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

const PACKAGE_NAME = process.cwd();

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};
const extensions = [".js", ".ts", ".tsx"];

const babelOptions = {
  exclude: /node_modules/,
  extensions,
  configFile: "../../babel.config.json",
  babelHelpers: "runtime",
};
const nodeOptions = {
  extensions,
};
const typescriptOptions = {
  tsconfig: `${PACKAGE_NAME}/tsconfig.json`,
  declaration: true,
  declarationDir: ".",
  emitDeclarationOnly: true,
  declarationMap: true,
};

export default [
  {
    input: `${PACKAGE_NAME}/lib/index.ts`,
    external: ["react", "react-dom", "styled-components"],
    output: [
      {
        format: "cjs",
        file: `dist/index.js`,
      },
      {
        file: `dist/index.esm.js`,
        format: "esm",
      },
    ],
    plugins: [
      nodeResolve(nodeOptions),
      typescript(typescriptOptions),
      excludeDependenciesFromBundle({ peerDependencies: true }),
      babel(babelOptions),
      commonjs(commonjsOptions),
      // terser(),
    ],
  },
];
