# TypeScript

Bun 将 TypeScript 视为一等公民。

> 您要为 Bun api (如 `bun global`) 添加类型声明，请按照介绍中的 [TypeScript](/docs/typescript.md) 中的说明进行操作。本页描述了 Bun 运行时如何运行 TypeScript 代码。

## 运行.ts 文件

Bun 可以像普通 JavaScript 一样直接执行.ts 和.tsx 文件，无需额外配置。如果导入.ts 或.tsx 文件（或 npm 导出这些文件的模块），Bun 会在内部将其转换为 JavaScript，然后执行该文件。

:::info 📌 小知识
与其他构建工具类似，Bun 不会对文件进行类型检查。如果要捕获静态类型错误，请使用 [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) (官方 TypeScript CLI)。
:::

::: tip 问：转换仍然是必要的吗？

答：因为 Bun 可以直接执行 typescript 脚本，所以你可能不需要转换你 typescript 程序就可以在生产环境中运行。因为 Bun 已经在内部转换了(.js 和.ts)，所以直接执行.ts / .tsx 源文件的额外性能可以忽略不计。也就是说，如果您使用 Bun 作为开发工具，但仍然以 Node.js 或生产中的浏览器为目标，您仍然需要转换。
:::

## 路径映射

Bun 在解析模块时，Bun 的运行库会尊重 tsconfig.json 中 [编译器选项路径](https://www.typescriptlang.org/tsconfig#paths) 中定义的路径映射。没有其他运行时可以做到这一点。

参考以下的 tsconfig.json。

```json
{
	"compilerOptions": {
		"baseUrl": "./src",
		"paths": {
			"data": ["./data.ts"]
		}
	}
}
```

Bun 将使用 `baseUrl` 解析模块路径。

```tsx
// 解析为./src/Components/Button.tsx
import { Button } from 'components/Button.tsx';
```

Bun 还将正确解决从 “数据” 中导入的问题。
::: code-group

```ts [index.ts]
import { foo } from 'data';
console.log(foo); // => "Hello world!"
```

```ts [data.ts]
export const foo = 'Hello world!';
```

:::
