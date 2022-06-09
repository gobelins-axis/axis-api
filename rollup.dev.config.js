import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { string } from 'rollup-plugin-string';
import css from 'rollup-plugin-import-css';

export default {
    input: './demo/index.js',
    output: {
        file: './demo/build/bundle-demo.js',
        format: 'umd',
        name: 'bundle',
        sourceMap: true,
    },
    plugins: [
        babel(),
        resolve(),
        commonjs(),
        string({
            include: [
                'src/**/*.html',
                'src/**/**/*.html',
            ],
        }),
        css(),
        livereload({
            exts: ['html', 'js'],
            verbose: true,
            watch: './demo/**',
        }),
        serve({
            contentBase: ['./demo'],
            host: '0.0.0.0',
            port: 3003,
        }),
    ],
};
