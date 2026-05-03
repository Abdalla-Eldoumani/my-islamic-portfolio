// Side-effect imports for non-TS modules. Required since TypeScript 6.0
// tightened TS2882. Next.js generates next-env.d.ts but doesn't include
// CSS module declarations until newer Next versions.
declare module "*.css";
