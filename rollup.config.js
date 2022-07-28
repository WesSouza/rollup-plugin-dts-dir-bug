import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

import packageJson from "./package.json";

export default [
  // Main .cjs .mjs
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [esbuild()],
  },

  // Main .d.ts
  {
    input: "./src/index.ts",
    output: {
      file: packageJson.types,
      format: "es",
    },
    plugins: [dts()],
  },

  // Themes .cjs
  {
    input: "./src/common/themes/index.ts",
    output: {
      dir: "dist/themes",
      exports: "default",
      format: "cjs",
    },
    preserveModules: true,
    plugins: [esbuild()],
  },

  // Themes .d.ts
  {
    input: "./src/common/themes/index.ts",
    output: {
      dir: "dist/themes",
      exports: "default",
    },
    preserveModules: true,
    plugins: [dts()],
  },
];
