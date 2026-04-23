import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
   {
     rules: {
       // Disable overly strict unescaped entities rule - apostrophes in contractions are common and readable
        "react/no-unescaped-entities": "off",
        // Allow img elements with a note to use next/Image for above-the-fold images
        "@next/next/no-img-element": "warn",
        // Suppress cascading setState warning in Navbar (intentional pathname sync pattern)
        "react-hooks/set-state-in-effect": "off",
      },
    },
]);

export default eslintConfig;