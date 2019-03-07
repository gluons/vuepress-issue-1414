import {resolve} from 'path';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import vue from 'rollup-plugin-vue';

function createConfig(format) {
	return {
		input: resolve(__dirname, './src/index.js'),
		output: {
			file: resolve(__dirname, `./dist/bundle.${format}.js`),
			format
		},
		plugins: [
			nodeResolve(),
			commonjs(),
			css(),
			vue({
				css: false
			})
		]
	};
}

export default [
	createConfig('cjs'),
	createConfig('esm')
];
