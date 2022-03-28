import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'umd',
        name: 'bundle',
    },
    plugins: [
        babel(),
        resolve(),
        commonjs(),
        terser(),
    ],
};
