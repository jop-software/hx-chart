import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({include: ["src"]})
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'hx-chart',
            // the proper extensions will be added
            fileName: (format) => `hx-chart.${format}.js`,
        },
        rollupOptions: {
            external: [
                "chart.js/auto",
                "htmx.org"
            ],
            output: {
                globals: {
                    'htmx.org': 'htmx',
                    'chart.js': 'chart_js',
                }
            }
        }
    }
})