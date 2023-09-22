# Plugins （ 插件 ）

Bun 提供了一个通用的 插件 API，此 API 可以用来扩展 bun 的运行时和 [绑定器](/docs/bundler)。

插件 拦截代码导入并执行自定义加载逻辑如: 读取文件、转换代码等，它们可用于添加对其他文件类型的支持，例如 scss 或 .yaml。在 Bun 的打包上下文中，插件可用于实现框架级功能，例如 CSS 提取，macros 和 客户端-服务器代码协同定位。

## 用法

Plugins 被定义为包含一个名称属性和一个设置函数的简单的 JavaScript 对象。使用插件功能向 Bun 注册插件。

```ts
import { plugin, type BunPlugin } from 'bun';

const myPlugin: BunPlugin = {
	name: 'Custom loader',
	setup(build) {
		// 安装启用
	},
};
```

::: warning 🚨 注意事项
**bun 的 Plugins 必须在任何其他代码运行之前注册!**
:::

要实现此目的，请使用 [`bunfig.toml`](/docs/runtime/bunfig) 中的 `preload` ( 预加载 ) 选项。在运行程序文件之前，Bun 会自动加载 `preload` ( 预加载 ) 中指定的文件或模块。

```sh
preload = ["./myPlugin.ts"]
```

要在 `bun test` 之前预加载文件，请执行以下操作：

```sh
[test]
preload = ["./myPlugin.ts"]
```

## 第三方 Plugins

按照惯例，用于消费的第三方 Plugins 应该导出一个工厂函数，该函数接受一些配置并返回一个 Plugins 对象。

```ts
import { plugin } from 'bun';
import fooPlugin from 'bun-plugin-foo';

plugin(
	fooPlugin({
		// 配置
	})
);
```

::: details 什么是工厂函数？

- **在 JavaScript 中，工厂函数是一种创建对象的函数。它可以用于创建多个相似的对象，而不需要每次都使用构造函数来创建。**

- **工厂函数通常会返回一个新的对象，该对象具有一组属性和方法。这些属性和方法可以在工厂函数内部定义，并且可以根据需要进行定制。**

- **工厂函数的优势在于可以封装对象的创建过程，并且可以根据不同的需求创建不同的对象。这样可以提高代码的复用性和可维护性。**

以下是一个简单的示例，展示了如何使用工厂函数创建对象：

```js
function createPerson(name, age) {
	// 创建一个新的对象
	let person = {};
	// 设置对象的属性和方法
	person.name = name;
	person.age = age;
	person.sayHello = function () {
		console.log('你好，我的名字是' + this.name + ' 我今年' + this.age + '了');
	};
	return person;
}

// 使用工厂函数创建对象
const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

// 调用对象的方法
person1.sayHello();
person2.sayHello();
```

:::

Bun 的 Plugins API 基于 [esbuild](https://esbuild.github.io/plugins)。仅实现了 esbuild API 的一个子集，但是某些 esbuild Plugins 在 Bun 中 “只工作”，例如官方的 [MDX 加载程序](https://mdxjs.com/packages/esbuild/):

```js
import { plugin } from 'bun';
import mdx from '@mdx-js/esbuild';

plugin(mdx());
```

## Loaders

Plugins 主要用于加载器扩展 Bun 以获取其他文件类型。

以下是 .yaml 文件加载器的插件

```js
import { plugin } from "bun";

plugin({
  name: "YAML",
  async setup(build) {
    const { load } = await import("js-yaml");
    const { readFileSync } = await import("fs");

   //导入.yaml文件时...
    build.onLoad({ filter: /.(yaml|yml)$/ }, (args) => {
      // 读取并解析文件
      const text = readFileSync(args.path, "utf8");
      const exports = load(text) as Record<string, any>;
      // 并将其作为模块返回
      return {
        exports,
        loader: "object", // JS对象的专用加载器
      };
    });
  },
});
```

在 bunfig.toml 文件中的 `preload` ( 预加载 ) 中注册此文件

```sh
preload = ["./yamlPlugin.ts"]
```

插件注册之后，`.yaml` 和 `.yml` 文件可以直接导入。

注意，返回的对象有一个 loader 属性。这告诉 Bun 应该使用哪个内部加载器来处理结果。即使我们为.yaml 实现了一个加载器，结果仍然必须能够被 Bun 的一个内置加载器所理解。一直都是 loaders。

在本例中，我们使用的是`Object`一个内置的加载器(供插件使用)，它将普通的 JavaScript 对象转换为等价的 ES 模块。支持 Bun 的任何内置加载器；Bun 在内部使用这些加载器来处理各种类型的文件。下表是一个快速参考；有关完整的文档，请参阅 [ Loaders](/docs/bundler/loaders)。

| Loader |    扩展名     |                                                    输出                                                    |
| :----: | :-----------: | :--------------------------------------------------------------------------------------------------------: |
|   js   |   .mjs .cjs   |                                           转换到 JavaScript 文件                                           |
|  jsx   |   .js .jsx    |                                           转换 JSX，然后再次转换                                           |
|   ts   | .ts .mts .cts |                                       转换 TypeScript，然后再次转换                                        |
|  tsx   |     .tsx      |                               转换成 TypeScript，然后成转换 JSX 然后再次转换                               |
|  toml  |     .toml     |                                    使用 Bun 的内置 TOML 解析器进行解析                                     |
|  json  |     .json     |                                    使用 Bun 的内置 JSON 解析器进行解析                                     |
|  napi  |     .node     |                                           导入原生 Node.js 插件                                            |
|  wasm  |     .wasm     |                                           导入原生 Node.js 插件                                            |
| object |     none      | 一种特殊的加载器，用于将普通 JavaScript 对象转换为等效的 ES 模块的插件。并对象中的每个键对应一个命名导出。 |

加载 YAML 文件很有用，但插件支持的不仅仅是数据加载。让我们来看看一个让 Bun 导入 \*.svelte 文件的插件。

```ts
import { plugin } from 'bun';

plugin({
	name: 'svelte loader',
	async setup(build) {
		const { compile } = await import('svelte/compiler');
		const { readFileSync } = await import('fs');

		// when a .svelte file is imported...
		build.onLoad({ filter: /.svelte$/ }, ({ path }) => {
			// read and compile it with the Svelte compiler
			const file = readFileSync(path, 'utf8');
			const contents = compile(file, {
				filename: path,
				generate: 'ssr',
			}).js.code;

			// and return the compiled source code as "js"
			return {
				contents,
				loader: 'js',
			};
		});
	},
});
```

> 注意:在生产实现中，您需要缓存已编译的输出，并包含额外的错误处理。

从 `build.onLoad` 返回的对象在 `contents` 中包含已编译的源代码，并指定 `"js"` 作为其加载器。这告诉 Bun 将返回的内容视为 JavaScript 模块，并使用 Bun 的内置 js 加载器对其进行转置。

有了这个插件，Svelte 组件现在可以直接导入和使用。

```ts
import './sveltePlugin.ts';
import MySvelteComponent from './component.svelte';

console.log(mySvelteComponent.render());
```

## 读取配置

插件可以使用 [`Build.config`](/docs/bundler#api) 读取和写入构建配置。

```ts
Bun.build({
	entrypoints: ['./app.ts'],
	outdir: './dist',
	sourcemap: 'external',
	plugins: [
		{
			name: 'demo',
			setup(build) {
				console.log(build.config.sourcemap); // "外部"

				build.config.minify = true; // 启用缩写

				// “Plugins” 是只读的
				console.log(`Number of plugins: ${build.config.plugins.length}`);
			},
		},
	],
});
```

## 参考

```ts
namespace Bun {
	function plugin(plugin: {
		name: string;
		setup: (build: PluginBuilder) => void;
	}): void;
}

type PluginBuilder = {
	onResolve: (
		args: { filter: RegExp; namespace?: string },
		callback: (args: { path: string; importer: string }) => {
			path: string;
			namespace?: string;
		} | void
	) => void;
	onLoad: (
		args: { filter: RegExp; namespace?: string },
		callback: (args: { path: string }) => {
			loader?: Loader;
			contents?: string;
			exports?: Record<string, any>;
		}
	) => void;
	config: BuildConfig;
};

type Loader = 'js' | 'jsx' | 'ts' | 'tsx' | 'json' | 'toml' | 'object';
```

onLoad 方法可选地接受除了过滤器正则表达式之外的命名空间。此命名空间将用于在转置代码中前缀导入; 例如，带有 `filter: /\.yaml$/` 和 `namespace: "yaml:"`将把导入内容从 `./myfile.yaml` 转换成 `yaml:./myfile.yaml`
