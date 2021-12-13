import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'@': `${resolve(__dirname, './src')}`
		}
	},
	plugins: [
		vitePluginVuedoc({
			highlight: {
				theme: 'one-light'
			}
		}),
		vue({
			include : [...vueDocFiles]
		})
	]
})
