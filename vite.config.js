import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // This ensures that on page reload, index.html is served for any path,
    // solving the "Page Not Found" issue for client-side routing.
    historyApiFallback: true,
  },
});
