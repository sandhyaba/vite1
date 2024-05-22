import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })


export default {
  proxy: {
    '/api': {
      target: 'http://192.168.1.142:6500',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/v1'),
    },
  },
};




// import { defineConfig } from 'vite';

// const filterWarningsPlugin = {
//   name: 'filter-warnings',
//   apply: 'build',
//   configResolved(config) {
//     config.logger.warn = (msg) => {
//       if (!msg.includes('Module level directives cause errors when bundled')) {
//         console.warn(msg);
//       }
//     };
//   },
// };

// export default defineConfig({
//   plugins: [filterWarningsPlugin],
//   // other Vite configurations
// });
