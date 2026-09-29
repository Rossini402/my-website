# my-website

Vue3 + Vite + TypeScript 项目(由 AFK 编排器孵化)。

## 技术栈

- Vite + Vue 3(``<script setup lang="ts">``)
- TypeScript,类型检查用 vue-tsc
- Vitest + @vue/test-utils(happy-dom 环境)
- ESLint 扁平配置(eslint-plugin-vue + @vue/eslint-config-typescript)
- Prettier

## 开发命令

```bash
# 安装依赖(国内镜像)
npm install --registry=https://registry.npmmirror.com

# 启动开发服务器
npm run dev

# 运行单元测试
npm test

# 生产构建(先类型检查,产出 dist/)
npm run build

# 仅类型检查
npm run typecheck

# ESLint 检查
npm run lint
```

## 目录结构

```
index.html                     # Vite 入口 HTML
vite.config.ts                 # Vite + Vitest 配置
tsconfig.json
eslint.config.js               # ESLint 扁平配置
.prettierrc
src/
  main.ts                      # 应用入口
  App.vue
  components/
    CounterButton.vue          # 示例组件(带 props / emits)
    __tests__/
      CounterButton.test.ts    # 示例组件单测
```
