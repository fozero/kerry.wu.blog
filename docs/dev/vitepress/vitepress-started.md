

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

### 部署到github



