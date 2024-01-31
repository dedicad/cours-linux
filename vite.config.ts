import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        build: {
            rollupOptions: {
                external: './assets',
            },
        },
    };
});
