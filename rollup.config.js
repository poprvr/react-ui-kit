import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';

const formats = ['cjs', 'esm'];

export default formats.map(format => ({
  input: "src/features/main.tsx",
  output: {
    file: `dist/main.${format}.js`,
    format,
  },
  external: Object.keys(pkg.dependencies),
  plugins: [typescript({
    // enabling declaration (.d.ts) emit
    declaration: true,

    // optional - in general it's a good practice to decouple declaration files from your actual transpiled JavaScript files
    declarationDir: "dist/dts",

    // optional if you're using babel to transpile TS -> JS
    emitDeclarationOnly: true,

    rootDir: "src/features"
  })],

}));
