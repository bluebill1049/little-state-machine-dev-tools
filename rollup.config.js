import externalDeps from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const external = [
  'react',
  'little-state-machine',
  'react-json-view',
  'react-simple-animate',
];

export default [
  {
    input: './src/index.ts',
    output: {
      name: 'LittleStateMachine',
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    external,
    plugins: [typescript(), externalDeps()],
  },
];

