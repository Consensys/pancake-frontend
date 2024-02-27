import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  treeshake: true,
  splitting: true,
  format: ['esm', 'cjs'],
  dts: true,
})
