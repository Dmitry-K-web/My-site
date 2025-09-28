import { defineConfig } from 'vite';
import { resolve } from 'path';
import glob from 'glob';

// Находим все HTML файлы в src
const htmlFiles = glob.sync('src/**/*.html');

const input = {};
htmlFiles.forEach(file => {
    const name = file.replace(/^src\//, '').replace(/\.html$/, '');
    input[name] = resolve(__dirname, file);
});

export default defineConfig({
    root: 'src',
    base: './', // относительные пути для GitHub Pages или локального просмотра
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input, // передаём все HTML файлы как точки входа
            output: {
                entryFileNames: `[name].js`,       // JS без хеша
                chunkFileNames: `[name].js`,
                assetFileNames: `[name][extname]`  // CSS без хеша
            }
        }
    },
    server: {
        open: true,
        host: true
    }
});



