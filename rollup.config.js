import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import dartSass from "sass";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      globals: {
        vue: "Vue",
      },
      name: "Sweetpotato",
      file: "dist/lib/sweetpotato.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "sweetpotato",
      file: "dist/lib/sweetpotato.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
};
