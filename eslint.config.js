import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", //suppress errors for missing prop-types in a React component
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], //should add ".ts" if typescript project
    },
  },
];
