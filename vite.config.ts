import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'




// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, __dirname)   // 获取当前环境下的.env文件内容
  return defineConfig({
    server: {
      host: '0.0.0.0',
      // proxy: {
      //   '/api': {
      //     target: 'http://43.132.146.172/ete/api.php/', // 目标服务器地址
      //     changeOrigin: true, // 是否改变源地址
      //   }
      // }
    },
    plugins: [
      vue(),
      vueJsx(),
    ],
    base: `./`, // 这里更改打包相对绝对路径
    build: {
      outDir: resolve(__dirname, `dist/${env.VITE_ENV_VALUE}`), // 设置输出文件夹为dist
    },
    minify: true, // 是否压缩代码
    sourceMap: false, // 是否生成sourceMap
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  })


}
