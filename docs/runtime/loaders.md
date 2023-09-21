# 文件类型

## TypeScript

Bun 原生支持开箱即用的 TypeScript。所有文件在执行之前都会被 Bun 的快速原生转译程序动态转译。与其他构建工具类似，Bun 不执行类型检查，它只是从文件中删除类型注释。

```sh
$ bun index.js
$ bun index.jsx
$ bun index.ts
$ bun index.tsx

```

Bun 运行时行为的某些方面会受到您的 `tsconfig.json` 文件内容的影响。有关详细信息，请参阅 [TypeScript 运行时](/docs/runtime/typescript) 页面。

## JSX

Bun 原生支持 `.jsx` 和 `.tsx` 文件。Bun 的内部转换器在执行之前将 JSX 语法转换为普通的 JavaScript 语法

```tsx
function Component(props: { message: string }) {
	return (
		<body>
			<h1 style={{ color: 'red' }}>{props.message}</h1>
		</body>
	);
}

console.log(<Component message='Hello world!' />);
```

Bun 底层专门为 JSX 实现了特殊的日志记录，以简化调试。

```sh
$ bun run react.tsx
# <Component message="Hello world!" />
```

## 文本文件

文本文件可以作为字符串导入。

::: code-group

```ts [index.ts]
import text from './text.txt';
console.log(text);
// => "Hello world!"
```

```md [text.txt]
Hello world!
```

:::

## JSON 和 TOML

JSON 和 TOML 文件可以直接从源文件导入。内容将被加载并作为一个 JavaScript 对象返回。

```ts
import pkg from './package.json';
import data from './data.toml';
```

## 🚧 WASM <Badge type="tip" text="实验" />

Bun 对 [WebAssembly](https://github.com/WebAssembly/WASI) 系统接口提供了实验性支持。要使用 Bun 运行 `.wasm` 二进制文件，请执行以下操作：

```sh
$ bun ./my-wasm-app.wasm
# 如果文件名不以 “.wasm” 结尾
$ bun run ./my-wasm-app.whatever
```

:::warning 🚨 注意事项
WASI 支持是基于 [wasi-js](https://github.com/sagemathinc/cowasm/tree/main/core/wasi-js) 的。目前，它只支持使用 `wasi_snapshot_preview1` 或 `wasi_unstable` API 的 WASI 二进制文件。Bun 没有针对性能进行优化；随着 WASI 变得越来越流行，这将成为一个更优先的问题。
:::

## 自定义加载器

可以通过插件实现对其他文件类型的支持。请参阅 [运行时插件](/docs/bundler/plugins) 以获取完整文档。
