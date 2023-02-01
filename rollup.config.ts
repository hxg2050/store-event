import { defineConfig } from 'rollup';
export default defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        file: 'index.js',
        format: 'cjs'
    }
});