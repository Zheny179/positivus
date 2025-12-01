import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: '',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/helpers" as *;`,
			},
		},
	},
});
