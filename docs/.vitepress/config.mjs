import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kerry.wu.blog",
  description: "blog",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 搜索
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "开发", link: "/dev/index" },
      { text: "产品", link: "/pm/index" },
    ],
    sidebar: {
      "/dev/": [
        {
          text: "Dev",
          items: [
            {
              text: "Prisma",
              collapsed: true,
              items: [
                { text: "prisma入门学习", link: "/dev/prisma/prisma-started" },
              ],
            },
            {
              text: "Vitepress",
              collapsed: true,
              items: [
                {
                  text: "vitepress入门学习",
                  link: "/dev/vitepress/vitepress-started",
                },
              ],
            },
          ],
        },
      ],
      "/pm/": [
        {
          text: "Pm",
          items: [
            {
              text: "Social",
              collapsed: true,
              items: [
                { text: "Social产品收集", link: "/pm/social/social-list" },
              ],
            },
          ],
        },
      ],
    },
  },
});
