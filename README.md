# kerry.wu.blog
new blog

## blog visit

https://fozero.github.io/kerry.wu.blog/

## 报错解决

### 执行yarn docs:build命令报错
```
(!) Found dead link http://localhost:5555 in file dev/prisma/prisma-started.md

If this is expected, you can disable this check via config. Refer: https://vitepress.dev/reference/site-config#ignoredeadlinks

x Build failed in 1.14s
✖ building client + server bundles...
build error:
[vitepress] 1 dead link(s) found.
[vitepress] 1 dead link(s) found.
    at Object.renderStart (file:///Users/kerry/Documents/kerry-wu-blog/node_modules/vitepress/dist/node/serve-CEEKiiuH.js:42460:15)
    at file:///Users/kerry/Documents/kerry-wu-blog/node_modules/rollup/dist/es/shared/node-entry.js:19774:40
    at async Promise.all (index 0)
    at async PluginDriver.hookParallel (file:///Users/kerry/Documents/kerry-wu-blog/node_modules/rollup/dist/es/shared/node-entry.js:19702:9)
    at async Bundle.generate (file:///Users/kerry/Documents/kerry-wu-blog/node_modules/rollup/dist/es/shared/node-entry.js:18132:13)
    at async file:///Users/kerry/Documents/kerry-wu-blog/node_modules/rollup/dist/es/shared/node-entry.js:20692:27
    at async catchUnfinishedHookActions (file:///Users/kerry/Documents/kerry-wu-blog/node_modules/rollup/dist/es/shared/node-entry.js:20119:16)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command
```

解决：和md文件内容有关系，如下：

访问 http://localhost:5173/

需改成

访问 `http://localhost:5173/`