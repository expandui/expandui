import { defineConfig } from 'vite'
import * as path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ExpandUICore',
      formats: ['es', 'umd'],
      fileName: (format) => `expandui-core.${format}.js`,
    },
  },
})
