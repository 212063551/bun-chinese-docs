# 什么是 Bun ？

Bun 是一款面向 JavaScript 和 TypeScrip 应用程序的多合一工具包。它是作为一个名为 `bun` 的可执行文件发布的。

其核心是 Bun 运行时，这是一个快速的 JavaScript 运行时，旨在替代 Node.js。它是用 Zig 编写的，并在幕后由 JavaScriptCore (苹果公司开发) 提供支持，大大减少了启动时间和内存使用。

```sh
$ bun run index.tsx  # 支持开箱即用的 TS 和 JSX
```

BUN​ 命令行工具还实现了测试运行器、脚本运行器和与 Node.js 兼容的包管理器，所有这些都比现有工具快得多，并且可以在现有的 Node.js 项目中使用，几乎不需要任何更改。

```sh
$ bun run start                 # 运行`start`脚本
$ bun install <pkg>​             # 安装软件包
$ bun build ./index.tsx         # 使用bun 打包 ./index.tsx
$ bun test                      # 运行测试
$ bunx cowsay "Hello, world!"   # 执行一个包
```

:::info 📌 请注意
BUN 仍在开发中。使用它可以加快您的开发工作流程，或者在资源受限的环境(如无服务器功能)中运行更简单的生产代码。我们正在努力实现更完整的 Node.js 兼容性以及与现有框架的集成。加入 [Discord](https://bun.sh/discord) 的行列，关注 [GitHub 存储库](https://github.com/oven-sh/bun)，以跟踪未来的版本。
:::

您可以通过以下快速链接跳转到您需要的页面或继续阅读以了解有关 Bun 的更多信息。

<div class ="quick-link">
<Link href="/docs/intro/installation" title="🛠️ 安装 Bun"/>
<Link href="/docs/intro/quickstart" title="🚪 快速入门"/>
<Link href="/docs/cli/install" title="🛠️ 安装 软件包"/>
<Link href="/docs/intro/templates" title="📄 使用项目模板"/>
<Link href="/docs/bundler" title="📦 使用Bun 进行代码打包"/>
<Link href="/docs/api/http" title="⚙️ 构建一个HTTP服务器"/>
<Link href="/docs/api/websockets" title="🛠️ 构建Websocket服务器"/>
<Link href="/docs/api/file-io" title="✍️ 读写文件"/>
<Link href="/docs/api/sqlite" title="⚙️ 运行SQLite查询"/>
<Link href="/docs/cli/test" title="🛠️ 编写和运行测试"/>
</div>

## 什么是运行时？

JavaScript(或者更正式地说，ECMAScript)只是一种编程语言的规范。任何人都可以编写一个 JavaScript 引擎，该引擎摄取有效的 JavaScript 程序并执行它。当今使用的两个最流行的引擎是 V8(由谷歌开发)和 JavaScriptCore(由苹果开发)。两者都是开源的。

### 浏览器

事实上大多数 JavaScript 程序并不是在真空中运行的。程序需要访问外部世界的方式来执行更多有用的任务。例如获取更准确的时间。它们实现附加的 API，然后这些附加 API 可供它们执行的 JavaScript 程序使用。值得注意的是，浏览器自带的 JavaScript 运行时实现了一组特定于 Web 的 API，这些 API 通过全局 `window` 对象公开。浏览器执行的任何 JavaScript 代码都可以使用这些 API 在当前网页的上下文中实现交互或动态行为。

### Node.js

Node.js 是一个 JavaScript 运行时，可以在非浏览器环境中使用，如服务器环境。由 Node.js 执行的 JavaScript 程序可以访问一组特定于 Node.js 的全局程序，如 `Buffer` 、`process` 和 `__dirname`，此外还有用于执行操作系统级任务的内置模块，如读取/写入文件 ( `node:fs` ) 和网络 ( `node:net`，`node:http` )。Node.js 还实现了一个基于 CommonJS 的模块系统和解析算法，该算法早于 JavaScript 的原生模块系统。

:::info 📌 小知识

1. 浏览器 和 Node 都有自己独有的 API，例如：浏览器有 DOM，BOM 而 Node 则没有。
2. 浏览器 全局对象是 window 而 Node 全局对象是 global
3. ES2020 提出的新标准 [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 用于兼容 浏览器 和 Node 。

:::

Bun 被设计为比 Node.js 的更快，更精简，更现代的替代品。

## 设计目标

Bun 在设计之初就考虑到了当前的 JavaScript 生态系统。

- ⚡️ 速度 - 目前 bun 进程的启动速度比 Node.js 快 4 倍(您自己试试吧！)

- TypeScrip 和 JSX 支持 - 您可以直接执行`.jsx`、`.ts` 和 `.tsx` 文件；Bun 的代码转换程序在执行之前会将这些文件转换为普通的 JavaScript。

- ESM 和 CommonJS 兼容性。世界正在朝着 ES 模块 (ESM) 发展，但是 npm 上的数百万个软件包仍然需要 CommonJS。Bun 推荐 ES 模块，但支持 CommonJS。

- Web 标准 API。Bun 实现了标准的 Web API，如 Fetch、WebSocket 和 ReadableStream。Bun 使用苹果开发的 `JavaScriptCore` 引擎提供支持的，因此一些 API，如 `Headers` 和 `URL` 直接使用 Safari 的实现。

- Bun 与 Node.js 兼容。除了支持 Node 风格的模块解析外，Bun 还致力于与内置的 Node.js 全局变量( 进程、缓冲区 ) 和模块 ( 路径、文件系统、http 等 ) 完全兼容。这是一项尚未完成的持续努力。有关当前状态，请参阅 [兼容性](/docs/runtime/nodejs-apis) 页面。

Bun 不仅仅是运行时。长期目标是成为一个有凝聚力的基础设施工具包，用于使用 JavaScript / TypeScript 构建应用程序，包括包管理器、转换编译器、打包、脚本运行器、测试运行器等。
