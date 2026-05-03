import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      ".agent/**",
      ".playwright-mcp/**",
    ],
  },
  ...nextCoreWebVitals,
];

export default config;
