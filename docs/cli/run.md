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

```sh
$ bun --watch run index.tsx
```

:::warning 🚨 注意事项：

在使用 bun run 时应该将 `--watch` 放置在 bun 后面，出现在命令末尾的标志将被忽略，并传递到 `dev` 上。

```sh
$ bun --watch run dev # ✅ 推荐用法
$ bun run dev --watch # ❌ 请不要这样使用
```

:::

## `--smol`

在内存受限的环境中，使用 `--smol` 标志以降低性能为代价来减少内存使用。

```sh
$ bun --smol run index.tsx
```

## 运行一个 package.json 脚本

请比较 `npm run <script>` 和 `yarn <script>`

您可以在 package.json 定义为多个与 shell 命令相对应的命名脚本。

```json
{
  // ... 其他字段
  "scripts": {
    "clean": "rm -rf dist && echo 'Done.'",
    "dev": "bun server.ts"
}
```

你可以使用 `bun <script>` 或 `bun run <script`> 来执行上述命令。

🌰 举个例子

```sh
# 使用自定的 bun clean 将执行以下命令
$ bun clean
  # $ rm -rf dist && echo 'Done.'
  # Cleaning...
  # Done.
```

Bun 在 shell 中执行命令。bun 将使用它找到的第一个 shell，bun 默认以下顺序查找 shell : `bash`、`sh`、`zsh`。

::: info 📌 小知识
<b>⚡️ bun 拥有更快的的速度</b>

npm 在 Linux 上运行的启动时间大约是 170ms；而在 Bun 上则是 6ms。

:::

如果 package.json 脚本和内置的 bun 命令( `install` , `dev` , `upgrade` 等 )之间存在名称冲突，那么 Bun 的内置命令优先，在这种情况下，使用更明确的 bun run 命令来执行你的包脚本。

```sh
$ bun run dev
```

项目中不带任何参数运行 `bun run` 会展示 package.json 文件中 `"scripts"` 字段里的所有命令

```sh
$ bun run
# 预期结果：
# quickstart scripts:

#  bun run clean
#    rm -rf dist && echo 'Done.'

#  bun run dev
#    bun server.ts

# 2 scripts
```

::: info 📌 注意点
原理 ： 不带任何参数运行 `bun run`，bun 会读取当前目录中的 package.json 文件里的 `"scripts"` 字段，获取项目 `"scripts"` 里的命令并展示到控制台。
:::

Bun 尊重生命周期钩子( hook )。例如定义了，`bun run clean` 它将执行 preclean 和 postclean。如果 `pre<script>` 失败，Bun 将不会执行脚本本身。

## `--bun`

package.json 脚本引用本地安装的 CLI (如 `vite` 或 `Next`) 这是很常见的操作。这些 CLI 通常是标记了 [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) 的 JavaScript 文件，以指示它们应该使用 `node` 执行。

```sh
#!/usr/bin/env node

// do stuff
```

默认情况下，Bun 尊重这个 [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) 并使用 node 执行脚本。但是，您可以使用--bun 标志覆盖此行为。对于基于 Node.js 的 CLI，这将使用 Bun 而不是 Node.js 运行 CLI。

```sh
$ bun run --bun vite
```

::: info 📌 小知识
<b> bun 在默认情况( 即不添加 `--bun` ) 的情况下 bun 会使用 node 调用 cli 而不是 bun 自身
`--bun` 则可以使用 bun 来替代 node </b>
:::
