# bunfig.toml

Bun 的行为可以使用其配置文件 bunfig.toml 进行配置。

通常，Bun 依赖于预先存在的配置文件 (例如 package.json 和 tsconfig.json) 来配置其行为。bunfig.toml 仅用于配置 Bun 特定的东西。此文件是可选的，如果没有它，Bun 将开箱即用。

## 全局 vs 本地

通常，建议将 bunfig.toml 文件与 package.json 一起添加到项目根目录中。

要全局配置 Bun，您还可以在以下路径之一创建.bunfig.toml 文件：

- `$HOME/.bunfig.toml`

- `$XDG_CONFIG_HOME/.bunfig.toml`

如果同时检测到全局和局部 `bunfig`，则结果将被浅合并，局部优先于全局。CLI 标志将在适用的情况下覆盖 `bunfig` 设置。

## 运行时

Bun 的运行时行为是使用 `bunfig.toml` 文件中的顶级字段配置的。

## `preload`

在运行文件或脚本之前要执行的脚本数组。这对于注册插件很有用。

```sh
#在运行文件或脚本之前运行的脚本
#用于注册插件
preload = ["./preload.ts"]
```

## `jsx`

配置 Bun 如何处理 JSX。您也可以在 `tsconfig.json` 的编译器选项中设置这些字段，但这里也支持非 TypeScript 项目。

```sh
jsx = "react"
jsxFactory = "h"
jsxFragment = "Fragment"
jsxImportSource = "react"
```

有关这些字段的更多信息，请参阅 tsconfig 文档。

- [`jsx`](https://www.typescriptlang.org/tsconfig#jsx)

- [`jsxFactory`](https://www.typescriptlang.org/tsconfig#jsxFactory)

- [`jsxFragment`](https://www.typescriptlang.org/tsconfig#jsxFragment)

- [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource)

## `smol`

启用 `smol` 模式。这以牺牲性能为代价从而减少了内存的使用。

```sh
# 以性能为代价减少内存使用
smol = true
```

## `logLevel`

设置日志级别。这可以是 `"debug"`, `"warn"`, 或 `"error"`。

```sh
logLevel = "debug" # "debug" | "warn" | "error"
```

## `define`

定义字段允许您用常量表达式替换某些全局标识符。Bun 将用表达式替换标识符的任何用法。表达式应该是一个 JSON 字符串。

```sh
[define]
# 用字符串 'lox' 替换 “process.env.bagel” 的任何用法。
# 这些值被解析为JSON,除了支持单引号字符串和 “未定义”在JS中变成了 “未定义”。
# 这可能会在未来的版本中改变为只是常规的TOML。这是CLI参数解析的保留。
"process.env.bagel" = "'lox'"
```

# `loader`

配置 Bun 如何将文件扩展名映射到加载器。这对于加载 Bun 本身不支持的文件很有用。如果

```sh
[loader]
# when a .bagel file is imported, treat it like a tsx file
".bagel" = "tsx"
```

Bun 支持以下加载器:

- jsx
- js
- ts
- tsx
- css
- file
- json
- toml
- wasm
- napi
- base64
- dataurl
- text
