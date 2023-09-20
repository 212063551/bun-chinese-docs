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

## JSON 和 TOML

## WASM

## 自定义加载器
