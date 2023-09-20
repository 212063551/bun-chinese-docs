# `bun run`

`bun` cli 可用于执行 JavaScript / TypeScript 文件、package.json 脚本和 [npm 包](https://docs.npmjs.com/cli/v9/configuring-npm/package-json/#bin)。

## 性能

Bun 设计为快速启动和快速运行。Bun 使用了 JavaScriptCore 引擎，该引擎由 Apple 为 Safari 开发。Bun 在大多数情况下，启动和运行性能比 V8 更快，V8 是 Node.js 和基于 Chromium 的浏览器使用的引擎。Bun 的转换编译器和运行时用 Zig (一种现代的高性能语言) 编写。在 Linux 上，这意味着启动时间比 Node.js 快 4 倍。

在 Linux 上运行同一个简单的 Hello World 脚本
| 命令 | 耗时 |
| ------ | ------|
| `bun hello.js` | 5.2ms |
| `node hello.js` | 25.1ms |

## 运行文件

请比较 `node <file>`

使用 bun run 执行源文件。

```sh
$ bun run index.js
```

Bun 支持开箱即用的 TypeScrip 和 JSX。在执行之前，每个文件都会被 Bun 的快速原生转译程序动态转译。

```sh
$ bun run index.js    # 无需转译
$ bun run index.jsx   # 快速转译
$ bun run index.ts    # 快速转译
$ bun run index.tsx   # 快速转译
```

您可以省略 run 关键字并使用 “naked” 命令 它们的执行结果是一致的。

```sh
$ bun index.js
$ bun index.tsx
```

## `--watch`

要在监视模式下运行文件，请使用 `--watch` 标志。
