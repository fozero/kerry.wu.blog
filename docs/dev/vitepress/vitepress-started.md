

## 官方文档 
https://vitepress.dev/

vitepress vs vuepress区别对比
https://juejin.cn/post/7349119662134018063

## Node版本要求
`Node.js version 18 or higher.`

## 安装运行
`yarn add -D vitepress`

初始化
`yarn vitepress init`

本地运行并访问
`yarn docs:dev`

访问 `http://localhost:5173/`


## 修改默认安装目录
正常安装是到当前目录，如果是一个存在项目，推荐安装到./docs下，也就是项目嵌套目录中
```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```


修改md pages文件根目录
默认是在当前目录下，我们设置到src目录下
```
export default {
  srcDir: './src'
}
```

## Sidebar侧边栏

基础侧边栏
```
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```

Multiple Sidebar多个侧边栏

假如我们有不同多个类型文档，根据不同路径展示不同侧边栏
```
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

配置定义侧边栏
```
export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    }
  }
}
```

支持菜单嵌套，最多可嵌套6级
```
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Level 1',
        items: [
          {
            text: 'Level 2',
            items: [
              {
                text: 'Level 3',
                items: [
                  ...
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
## Layout页面布局
有3种布局：doc, page, and home，无特殊情况都将看做是doc页面
```
---
layout: doc
---
```

## 开启模糊搜索功能

Local Search方式
```
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```


## 部署

### 部署到github，每次提交代码自动部署

1. 首先在根目录下创建.github/workflows文件夹

添加deploy.yml文件，并添加一下内容

```
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v3 # Uncomment this if you're using pnpm
      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you're using Bun
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: yarn install # or pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: yarn docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. 在github仓库中依次找到Settings->Pages->Build and deployment->选择Github Actions

3. 当提交代码到main分支时，会自动进行发布

4. 最后，发布成功后访问我们的网页

注：由于github部署成功后访问的网页地址是：https://fozero.github.io/kerry.wu.blog/

防止链接无法跳转，我们还需要设置base根目录才能正常访问

`base: '/kerry.wu.blog/'`