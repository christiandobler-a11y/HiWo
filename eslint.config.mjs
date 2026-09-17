import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Generierte Dateien und Build-Ausgaben.
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  // Alle Bilder sind bewusst vorab optimiert (WebP, feste Größen, srcset),
  // deshalb wird hier <img> statt next/image verwendet.
  { rules: { "@next/next/no-img-element": "off" } },
];

export default config;
