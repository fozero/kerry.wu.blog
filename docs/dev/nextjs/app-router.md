
https://nextjs.org/docs/getting-started/project-structure#routing-files


## Pages Router和App Router

参考阅读https://blog.csdn.net/m0_68036862/article/details/136144818

Next.js 目前有两套路由解决方案，之前的方案称之为“Pages Router”，目前的方案称之为“App Router”，两套方案是兼容的，都可以在 Next.js 中使用。

Next.js 从 v13 起就使用了新的路由模式 —— App Router。之前的路由模式我们称之为“Pages Router”，为保持渐进式更新，依然存在。从 v13.4 起，App Router 正式进入稳定化阶段，App Router 功能更强、性能更好、代码组织更灵活

## App Router

目录结构
```
app
|---page.js
|---layout.js
|---template.js
|---loading.js
|---error.js
public
```
约定文件
```layout、page、loading、not-found、error、global-error、route、template、default```



定义路由

首先是定义路由，文件夹被用来定义路由。每个文件夹都代表一个对应到 URL 片段的路由片段。创建嵌套的路由，只需要创建嵌套的文件夹。举个例子，下图的 app/dashboard/settings目录对应的路由地址就是 /dashboard/settings


定义页面

需要创建一个特殊的名为 page.js 的文件，可以理解为这是一种约定或者规范

如：
```
app/page.js 对应路由 /
app/dashboard/page.js 对应路由 /dashboard
app/dashboard/settings/page.js 对应路由/dashboard/settings
analytics 目录下因为没有 page.js 文件，所以没有对应的路由。这个文件可以被用于存放组件、样式表、图片或者其他文件。
```

## generateStaticParams

当我们需要生成静态文件时，就需要generateStaticParams函数

```
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { slug } = params
  // ...
}
```




## 问题

Q2：You’re importing a component that needs useState. It only works in a Client Component but none of its parents are marked with “use client”, so they’re Server Components by default.

常见的错误，当页面使用useState等功能时，需要在顶部引入use client指令，表明当前组件/模块应该在客户端渲染（Client-side Rendering，CSR）



### 在使用generateStaticParams函数的页面中无法使用useState等hooks方法

参考解决
- https://www.saoniuhuo.com/question/detail-2849487.html
- https://qa.1r1g.com/sf/ask/5377695711/
- https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns