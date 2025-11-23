// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, 'src') + '/',
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
