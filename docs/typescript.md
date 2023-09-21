# TypeScript

安装 Bun 内置 API 的 TypeScript 定义，请安装 `bun-types`。

## 安装 `bun-types`

打开终端输入以下命令：

```sh
$ bun add -d bun-types # 开发依赖
```

然后，将 `bun-type` 包含在 `tsconfig.json` 中的编译器选项中。

```json {3}
{
  "compilerOptions": {
+    "types": ["bun-types"]
  }
}
```

此时，您应该能够在您的 Typescript 中引用 Bun global 此时编辑器不会产生错误。

```ts
// 运行后输出 Bun 的版本号
console.log(Bun.version);
```

## 建议 <Badge type="tip" text="编译器选项" />

Bun 支持 `top-level`、`await`、`JSX`和扩展的`.ts`导入等功能，而在默认情况下，TypeScrip 不允许这些功能。以下是为 Bun 项目推荐的一组编译器选项，因此您可以使用这些功能，而不会看到来自 TypeScrip 的编译器警告。

```json
{
	"compilerOptions": {
		// 添加Bun类型定义
		"types": ["bun-types"],

		// 启用最新功能
		"lib": ["esnext"],
		"module": "esnext",
		"target": "esnext",

		// 当 TS 版本是 5.x+
		"moduleResolution": "bundler",
		"noEmit": true,
		"allowImportingTsExtensions": true,
		"moduleDetection": "force",
		// 当 TS 版本是 4.X或更早启用
		// "moduleResolution": "nodenext",

		"jsx": "react-jsx", // 支持JSX
		"allowJs": true, // 允许从`.ts`导入`.js`
		"esModuleInterop": true, // 允许对CommonJS模块进行默认导入

		// 最佳实践
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"skipLibCheck": true
	}
}
```

如果您在新目录中运行 `bun init`，则会为您生成这个`tsconfig.json`。

```sh
$ bun init
```

## DOM 类型

:::warning 🚨 注意事项
请注意：`"types"` 设置一个值意味着 TypeScript 将忽略其他全局类型定义，包括 `lib: ["dom"]`。如果需要将 DOM 类型添加到项目中，请在项目中任何 TypeScript 文件的顶部添加以下三重斜线指令。
:::

```ts
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
```
