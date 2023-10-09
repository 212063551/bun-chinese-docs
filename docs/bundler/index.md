# `Bun.build`

Bun 的快速原生打包器，现在处于测试阶段。它可以通过 `bun build` CLI 命令或 Bun.build() JavaScript API 使用。

:::code-group

```ts [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './build',
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./build
```

:::

> bun 很快。下面的数字代表了 esbuild 的 [three.js 基准测试的性能](https://github.com/oven-sh/bun/tree/main/bench/bundle)。

![bundler](../../public/bundler.png)

> 从头开始打包 three.js 的 10 个副本，使用 sourcemaps 和 minification

## 为什么要打包？

bundler 是 JavaScript 生态系统中的关键基础设施。简要概述为什么打包如此重要:

- **减少 HTTP 请求**： `node_modules` 中的单个包可能包含数百个文件，大型应用程序可能具有数十个类似依赖项。使用单独的 HTTP 请求加载这些文件中的每一个效率很低下，因此使用打包程序将我们的应用程序源代码转换为较少数量的自包含 “捆绑包”，可以通过单个请求加载。

- **代码转换**：现代应用程序通常使用 `TypeScript`，`JSX` 和 `CSS` 模块等语言或工具构建，所有这些都必须转换为纯 `JavaScript` 和 `CSS`，然后才能被浏览器使用。打包器是配置这些转换的自然场所。

- **框架功能**：框架依靠 打包 插件和代码转换来实现常见模式，如文件系统路由、客户端-服务器代码协同定位 (想想 getServerSideProps 或 Remix 加载器) 和服务器组件。

让我们跳到 打包器 API 中。

:::warning 🚨 请注意，Bun 打包器 并非用于替换 tsc 进行类型检测或生成类型声明。 :::

## 基本示例

让我们构建我们的第一个包。您有以下两个文件，它们实现了一个简单的客户端渲染的 React 应用程序。

:::code-group

```tsx [./index.tsx]
import * as ReactDOM from 'react-dom/client';
import { Component } from './Component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component message='Sup!' />);
```

```tsx [./Component.tsx]
import * as ReactDOM from 'react-dom/client';
import { Component } from './Component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component message='Sup!' />);
```

:::

这里，index.tsx 是我们应用程序的 “入口点”。通常，这将是一个执行一些副作用的脚本，例如启动服务器或-在这种情况下-初始化 React root。因为我们使用的是 `TypeScript` 和 `JSX`，所以我们需要将代码打包在一起，然后才能将其发送到浏览器。

要创建我们的包:
:::code-group

```tsx [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out
```

:::

对于入口点中指定的每个文件，Bun 将生成一个新的包。该包将被写入磁盘的./out 目录 ( 从当前工作目录解析 )。运行构建后，文件系统如下所示：

```
.
├── index.tsx
├── Component.tsx
└── out
    └── index.js
```

out/index.js 的内容将如下所示:

```js
// ...
// ~20k lines of code
// including the contents of `react-dom/client` and all its dependencies
// this is where the $jsxDEV and $createRoot functions are defined

// Component.tsx
function Component(props) {
	return $jsxDEV(
		'p',
		{
			children: props.message,
		},
		undefined,
		false,
		undefined,
		this
	);
}

// index.tsx
var rootNode = document.getElementById('root');
var root = $createRoot(rootNode);
root.render(
	$jsxDEV(
		Component,
		{
			message: 'Sup!',
		},
		undefined,
		false,
		undefined,
		this
	)
);
```

:::details 教程: 在浏览器中运行此文件
我们可以在浏览器中加载此文件，以查看我们的应用程序。在 out 目录中创建一个 index.html 文件:

```sh
$ touch out/index.html
```

然后将以下内容粘贴到其中:

```html
<html>
	<body>
		<div id="root"></div>
		<script type="module" src="/index.js"></script>
	</body>
</html>
```

然后启动一个服务于 out 目录的静态文件服务器:

```sh
$ bunx serve out
```

请访问 http:// localhost:5000 查看打包的应用程序的运行情况。
:::

## 监视模式

与运行库和测试运行器一样，打包器本身也支持监视模式。

```sh
$ bun build ./index.tsx --outdir ./out --watch
```

## 内容类型

与 Bun 运行时一样，打包器支持开箱即用的文件类型数组。下表分解了打包器的标准 “加载器” 集。有关完整文档，请参阅 [Bundler > File types](/docs/runtime/loaders)。

---

`.js` `.cjs` `.mjs` `.mts` `.cts` `.ts` `.tsx`

> 详细信息： 使用 Bun 的内置转换器来解析文件，并将 TypeScript/JSX 语法转换为 vanilla JavaScript。bundler 执行一组默认转换，包括死代码消除，树摇动和环境变量内联。目前，Bun 不会尝试向下转换语法; 如果您最近使用 ECMAScript 语法，这将反映在捆绑代码中。

---

`.json`

> JSON 文件被解析并作为 JavaScript 对象内联到包中。

```sh
import pkg from "./package.json";
pkg.name; // => "my-package"
```

---

`.txt`

> 文本文件的内容被读取并作为字符串内联到包中。

```sh
import contents from "./file.txt";
console.log(contents); // => "Hello, world!"
```

---

`.node` `.wasm`

> 这些文件受 Bun 运行时支持，但在绑定期间它们被视为[资源](/docs/bundler#assets)。

## 资产

如打包器遇到扩展名无法识别的导入，它会将导入的文件视为外部文件。引用的文件将按原样复制到 outdir 中，并将导入解析为该文件的路径。
:::code-group

```ts [Input]
// bundle entrypoint
import logo from './logo.svg';
console.log(logo);
```

```ts [Output]
// bundled output
var logo = './logo-ab237dfe.svg';
console.log(logo);
```

:::

> 文件加载器的确切行为也受 [`naming`](/docs/bundler#naming) 和 [`publicPath`](/docs/bundler#publicpath) 的影响。

有关文件加载器的更多完整文档，请参阅 [bundler > Loaders](/docs/bundler/loaders#file) 页面。

## 插件

可以使用 [插件](/docs/bundler/plugins) 覆盖或扩展此表中描述的行为。有关完整文档，请参阅 [Bundler> loader](/docs/bundler/plugins) 页面。

## API

## `entrypoints`

必填项. 与应用程序的入口点相对应的路径数组。将为每个入口点生成一个包。

:::code-group

```ts [JavaScript]
const result = await Bun.build({
	entrypoints: ['./index.ts'],
});
// => { success: boolean, outputs: BuildArtifact[], logs: BuildMessage[] }
```

```sh [CLI]
$ bun build --entrypoints ./index.ts
# the bundle will be printed to stdout
# <bundled code>
```

:::

## `outdir`

将写入输出文件的目录。

:::code-group

```ts [JavaScript]
const result = await Bun.build({
	entrypoints: ['./index.ts'],
	outdir: './out',
});
// => { success: boolean, outputs: BuildArtifact[], logs: BuildMessage[] }
```

```sh [CLI]
$ bun build --entrypoints ./index.ts --outdir ./out
# 打包文件的摘要将打印到stdout
```

:::

如果 outdir 没有传递给 JavaScript API，打包的代码将不会写入磁盘。打包文件在 BuildArtifact 对象数组中返回。这些对象是具有额外属性的 Blobs; 有关完整文档，请参见[产出](/docs/bundler#outputs)。

```ts
const result = await Bun.build({
	entrypoints: ['./index.ts'],
});

for (const result of result.outputs) {
	// 可以作为 blob 使用
	await result.text();

	// Bun将设置Content-Type和Etag标头
	new Response(result);

	// 可以手动编写，但在这种情况下应该使用 'outdir'。
	Bun.write(path.join('out', result.path), result);
}
```

当设置 outdir 时，BuildArtifact 上的 path 属性将是它写入的绝对路径。

## `target`

打包的预期执行环境。
:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.ts'],
	outdir: './out',
	target: 'browser', // default
});
```

```sh [CLI]
$ bun build --entrypoints ./index.ts --outdir ./out --target browser
```

:::
`
根据目标，Bun 将应用不同的模块解析规则和优化。

---

`browser`

> 默认值。用于生成供浏览器执行的包。在解析导入时优先考虑 “浏览器” 导出条件。导入任何内置模块，如 node:events 或 node:path 将起作用，但调用一些函数，如 fs.readFile 将不起作用。

---

`bun`

> 用于生成旨在由 Bun 运行时运行的 bundle。在许多情况下，没有必要捆绑服务器端代码; 您可以直接执行源代码而无需修改。但是，捆绑服务器代码可以减少启动时间并提高运行性能。

> 使用 target: “bun” 生成的所有捆绑包都带有特殊的 // @ bun pragma 标记，这向 Bun 运行时指示在执行之前无需重新转译文件。

> 如果任何入口点包含 Bun shebang (#!/usr/bin/env bun)，捆绑程序将默认为 target: “bun” 而不是 “browser”。

---

`node`

> 用于生成打算由 Node.js 运行的包。解析导入时优先考虑“node”导出条件，并输出.mjs。在未来，这将自动多填充 Bun global 和其他内置的 BUN：\*模块，尽管这还没有实现。

---

## `format`

指定生成包中使用的模块格式。

目前打包器仅支持一种模块格式："esm". 支持"cjs"并"iife"已计划。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	format: 'esm',
});
```

```sh
$ bun build ./index.tsx --outdir ./out --format esm
```

:::

## `splitting`

是否启用代码拆分。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	splitting: false, // default
});
```

```sh
$ bun build ./index.tsx --outdir ./out --splitting
```

:::

当为 true 时，打包器将启用代码拆分。当多个入口都导入相同的文件，模块或文件/模块集时，将共享代码拆分为单独的包通常很有用。这个共享束被称为 chunk （ 通用模块 ）。请考虑以下文件:

:::code-group

```ts [entry-a.ts]
import { shared } from './shared.ts';
```

```ts [entry-b.ts]
import { shared } from './shared.ts';
```

```ts [shared.ts]
export const shared = 'shared';
```

:::

要在启用代码拆分的情况下打包 entry-a.ts 和 entry-b.ts，请执行以下操作:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./entry-a.ts', './entry-b.ts'],
	outdir: './out',
	splitting: true,
});
```

```sh [entry-b.ts]
$ bun build ./entry-a.ts ./entry-b.ts --outdir ./out --splitting
```

:::

运行此构建将生成以下文件：

```
.
├── entry-a.tsx
├── entry-b.tsx
├── shared.tsx
└── out
    ├── entry-a.js
    ├── entry-b.js
    └── chunk-2fce6291bf86559d.js
```

生成的 chunk-2fce6291bf86559d.js 文件包含共享代码。为避免冲突，默认情况下，文件名会自动包含内容哈希。这可以通过命名进行[定制](/docs/bundler#naming)。

## `plugins`

打包期间使用的插件列表。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	plugins: [
		/* ... */
	],
});
```

```sh [entry-b.ts]
n/a
```

:::

Bun 为 Bun 的运行时和 打包器 实现了一个[通用的插件系统](/docs/bundler/plugins)。有关完整文档，请参阅插件文档。

## `sourcemap`

指定要生成的 sourcemap 的类型。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	sourcemap: 'external', // default "none"
});
```

```sh [entry-b.ts]
$ bun build ./index.tsx --outdir ./out --sourcemap=external

```

:::

---

`none`

> 默认值。不生成 sourcemap。

---

`inline`

> 将生成一个源地图，并将其作为 Base64 有效负载附加到所生成的包的末尾。

```js
// <bundled code here>

//# sourceMappingURL=data:application/json;base64,<encoded sourcemap here>
```

---

`external`

> 在每个 \*.js bundle 旁边创建一个单独的 \*.js.map 文件。

> 生成的包，包含可用于将包与其对应的 sourcemap 关联的调试 id。此 `debugId` 作为注释添加到文件的底部。

```js
// <generated bundle code>

//# debugId=<DEBUG ID>
```

关联的 \*.js.map 源地图将是一个 JSON 文件，其中包含等价的 `debugId` 属性。

## `minify`

是否启用压缩。默认为 false。

> 当以 bun 为目标时，标识符将在默认情况下被压缩。

要启用所有缩小选项，请执行以下操作：

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	minify: true, // default false
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --minify

```

:::

要精确地启用某些压缩，请执行以下操作：

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	minify: {
		whitespace: true,
		identifiers: true,
		syntax: true,
	},
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --minify-whitespace --minify-identifiers --minify-syntax
```

:::

## `external`

要考虑外部的导入路径列表。默认为[]。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	external: ['lodash', 'react'], // default: []
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --external lodash --external react
```

:::

外部导入是不会包含在最终包中的导入。相反，import 语句将保持不变，以便在运行时解析。

例如，考虑以下入口点文件：

```ts
import _ from 'lodash';
import { z } from 'zod';

const value = z.string().parse('Hello world!');
console.log(_.upperCase(value));
```

通常，捆绑 index.tsx 将生成包含 “zod” 包的整个源代码的捆绑包。如果相反，我们希望将 import 语句保留原样，我们可以将其标记为 external:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	external: ['zod'],
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --external zod
```

:::

生成的包如下所示：

```js
import { z } from 'zod';

// ...
// the contents of the "lodash" package
// including the `_.upperCase` function

var value = z.string().parse('Hello world!');
console.log(_.upperCase(value));
```

要将所有导入标记为外部，请使用通配符 \*:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	external: ['*'],
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --external '*'
```

:::

## `naming`

自定义生成的文件名。默认值为./[dir]/[name].[ext]。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	naming: '[dir]/[name].[ext]', // default
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --entry-naming [dir]/[name].[ext]
```

:::

默认情况下，生成的包的名称基于关联入口点的名称。

```
.
├── index.tsx
└── out
    └── index.js
```

使用多个入口点，生成的文件层次结构将反映入口点的目录结构。

```
.
├── index.tsx
└── nested
    └── index.tsx
└── out
    ├── index.js
    └── nested
        └── index.js
```

生成的文件的名称和位置可以使用命名字段进行定制。此字段接受模板字符串，该字符串用于生成与入口点对应的所有包的文件名。其中，以下令牌将替换为其对应的值：

- [name] - 入口点文件的名称，不带扩展名。
- [ext] - 生成的包的扩展名。
- [hash] - 包内容的哈希。
- [dir] - 从生成根目录到文件父目录的相对路径。

例如:

|        Token        | `[name]` | [ext] |   [hash]   |     [dir]     |
| :-----------------: | :------: | :---: | :--------: | :-----------: |
|    `./index.tsx`    | `index`  | `js`  | `a1b2c3d4` | "" (空字符串) |
| `./nested/entry.ts` | `entry`  | `js`  | `c3d4e5f6` |   `nested`    |

我们可以组合这些标记来创建一个模板字符串。例如，要在生成的包的名称中包含哈希值:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	naming: 'files/[dir]/[name]-[hash].[ext]',
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --entry-naming [name]-[hash].[ext]
```

:::

此构建将产生以下文件结构：

```
.
├── index.tsx
└── out
    └── files
        └── index-a1b2c3d4.js
```

当为命名字段提供字符串时，它仅用于与入口点对应的[块](/docs/bundler#splitting)。区块和复制资产的名称不受影响。使用 JavaScript API，可以为每种类型的生成文件指定单独的模板字符串。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	naming: {
		// default values
		entry: '[dir]/[name].[ext]',
		chunk: '[name]-[hash].[ext]',
		asset: '[name]-[hash].[ext]',
	},
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --entry-naming "[dir]/[name].[ext]" --chunk-naming "[name]-[hash].[ext]" --asset-naming "[name]-[hash].[ext]"
```

:::

## `root`

项目的根目录。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./pages/a.tsx', './pages/b.tsx'],
	outdir: './out',
	root: '.',
});
```

```[CLI]
n/a
```

:::

如果未指定，它将被计算为所有入口点文件的第一个公共祖先。请考虑以下文件结构：

```
.
└── pages
  └── index.tsx
  └── settings.tsx
```

我们可以在 pages 目录中构建两个入口点:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./pages/index.tsx', './pages/settings.tsx'],
	outdir: './out',
});
```

```sh [CLI]
$ bun build ./pages/index.tsx ./pages/settings.tsx --outdir ./out
```

:::

这将产生如下所示的文件结构：

```
.
└── pages
  └── index.tsx
  └── settings.tsx
└── out
  └── index.js
  └── settings.js
```

由于 Pages 目录是入口点文件的第一个公共祖先，因此它被视为项目根目录。这意味着生成的包位于 out 目录的顶层；没有 out/ages 目录。

可以通过指定 root 选项来覆盖此行为:

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./pages/index.tsx', './pages/settings.tsx'],
	outdir: './out',
	root: '.',
});
```

```sh [CLI]
$ bun build ./pages/index.tsx ./pages/settings.tsx --outdir ./out --root .
```

:::

通过指定 . 作为 root，生成的文件结构将如下所示:

```
.
└── pages
  └── index.tsx
  └── settings.tsx
└── out
  └── pages
    └── index.js
    └── settings.js
```

## `publicPath`

要附加到打包代码中任何导入路径的前缀。

在许多情况下，生成的包将不包含 import 语句。毕竟，打包的目标是将所有代码合并到一个文件中。然而，在许多情况下，生成的捆绑包将包含 import 语句。

- 资产入口 — 在导入无法识别的文件类型(如\*.svg)时，打包器遵循[文件加载器](/docs/bundler/loaders#file)，它会将文件原样复制到 outdir 中。将导入转换为变量

- 外部模块 - 可以将文件和模块标记为[外部](/docs/bundler#external)，在这种情况下，它们不会包含在捆绑包中。相反，导入语句将保留在最终包中。

- 程序分块 - 当启用拆分时，打包器可以生成表示在多个入口点之间共享的代码的单独的 “块” 文件。

在上述任何一种情况下，最终包都可能包含指向其他文件的路径。默认情况下，这些导入是相对的。以下是一个简单的资产导入示例：

:::code-group

```js [Input]
import logo from './logo.svg';
console.log(logo);
```

```js [Output]
// logo.svg is copied into <outdir>
// and hash is added to the filename to prevent collisions
var logo = './logo-a7305bdef.svg';
console.log(logo);
```

:::

设置 publicPath 将为所有文件路径添加指定值的前缀。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	publicPath: 'https://cdn.example.com/', // default is undefined
});
```

```[CLI]
n/a;
```

:::

输出文件现在应该如下所示。

```js
- var logo = './logo-a7305bdef.svg';
+ var logo = 'https://cdn.example.com/logo-a7305bdef.svg';
```

## `define`

要在构建时替换的全局标识符的映射。此对象的键是标识符名称，值是将内联的 JSON 字符串。

:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	define: {
		STRING: JSON.stringify('value'),
		'nested.boolean': 'true',
	},
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --define 'STRING="value"' --define "nested.boolean=true"
```

:::

## `loader`

文件扩展名到 [内置加载程序名称](/docs/bundler/loaders#built-in-loaders) 的映射。这可用于快速自定义某些文件文件的加载方式。
:::code-group

```js [JavaScript]
await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
	loader: {
		'.png': 'dataurl',
		'.txt': 'file',
	},
});
```

```sh [CLI]
$ bun build ./index.tsx --outdir ./out --loader .png:dataurl --loader .txt:file
```

:::

## Outputs

Bun.build 函数返回一个 `Promise<BuildOutput>`，定义为:

```ts
interface BuildOutput {
	outputs: BuildArtifact[];
	success: boolean;
	logs: Array<object>; // see docs for details
}

interface BuildArtifact extends Blob {
	kind: 'entry-point' | 'chunk' | 'asset' | 'sourcemap';
	path: string;
	loader: Loader;
	hash: string | null;
	sourcemap: BuildArtifact | null;
}
```

输出数组包含生成生成的所有文件。每个构件都实现了 Blob 接口。

```ts
const build = await Bun.build({
	/* */
});

for (const output of build.outputs) {
	await output.arrayBuffer(); // => ArrayBuffer
	await output.text(); // string
}
```

每个对象还包含以下属性：

---

`kind`

> 这个文件是什么样的构建输出。构建生成包的入口点，代码拆分的 “块”，源映射和复制的资产 (如图像)。

---

`path`

> 磁盘上文件的绝对路径

---

`loader`

> 加载器被用来解释文件。请参阅 [bundler > Loaders](/docs/bundler/loaders) 以了解 Bun 如何将文件扩展名映射到适当的内置加载程序。

---

`hash`

> 文件内容的哈希。始终为资产定义。

---

`sourcemap`

> 与此文件对应的 `sourcemap` 文件 (如果已生成)。仅针对入口点和块定义。

---

与 `BunFile` 类似，`BuildArtifact` 对象可以直接传递到 `new Response()` 中。

```ts
const build = await Bun.build({
	/* */
});

const artifact = build.outputs[0];

// Content-Type header is automatically set
return new Response(artifact);
```

Bun 运行时实现了 BuildArtifact 对象的特殊漂亮打印，使调试更容易。

```js [Build script]
// build.ts
const build = await Bun.build({
	/* */
});

const artifact = build.outputs[0];
console.log(artifact);
```

```sh [Shell output]
$ bun run build.ts

# BuildArtifact (entry-point) {
#  path: "./index.js",
#  loader: "tsx",
#  kind: "entry-point",
#  hash: "824a039620219640",
#  Blob (114 bytes) {
#    type: "text/javascript;charset=utf-8"
#  },
#  sourcemap: null
# }
```

:::

## 可执行文件

Bun 支持将 JavaScript/TypeScript 入口点 “编译” 为独立的可执行文件。此可执行文件包含 Bun 二进制文件的副本。

```sh
$ bun build ./cli.tsx --outfile mycli --compile
$ ./mycli
```

有关完整文档，请参阅 [Bundler> Executables](/docs/bundler/executables)。

## 日志和错误

Bun.build 仅在提供无效选项时抛出读取 success 属性以确定构建是否成功; logs 属性将包含其他详细信息。

```ts
const result = await Bun.build({
	entrypoints: ['./index.tsx'],
	outdir: './out',
});

if (!result.success) {
	console.error('Build failed');
	for (const message of result.logs) {
		// Bun will pretty print the message object
		console.error(message);
	}
}
```

每条消息都是一个 BuildMessage 或 ResolveMessage 对象，可用于跟踪生成过程中发生的问题。

```ts
class BuildMessage {
	name: string;
	position?: Position;
	message: string;
	level: 'error' | 'warning' | 'info' | 'debug' | 'verbose';
}

class ResolveMessage extends BuildMessage {
	code: string;
	referrer: string;
	specifier: string;
	importKind: ImportKind;
}
```

如果希望从失败的生成引发错误，请考虑将日志传递给 AggregateError。如果没有被捕获，Bun 会漂亮地打印出包含的消息。

```ts
if (!result.success) {
	throw new AggregateError(result.logs, 'Build failed');
}
```

## 参考

```ts
interface Bun {
	build(options: BuildOptions): Promise<BuildOutput>;
}

interface BuildOptions {
	entrypoints: string[]; // required
	outdir?: string; // default: no write (in-memory only)
	format?: 'esm'; // later: "cjs" | "iife"
	target?: 'browser' | 'bun' | 'node'; // "browser"
	splitting?: boolean; // true
	plugins?: BunPlugin[]; // [] // See https://bun.sh/docs/bundler/plugins
	loader?: { [k in string]: Loader }; // See https://bun.sh/docs/bundler/loaders
	manifest?: boolean; // false
	external?: string[]; // []
	sourcemap?: 'none' | 'inline' | 'external'; // "none"
	root?: string; // computed from entrypoints
	naming?:
		| string
		| {
				entry?: string; // '[dir]/[name].[ext]'
				chunk?: string; // '[name]-[hash].[ext]'
				asset?: string; // '[name]-[hash].[ext]'
		  };
	publicPath?: string; // e.g. http://mydomain.com/
	minify?:
		| boolean // false
		| {
				identifiers?: boolean;
				whitespace?: boolean;
				syntax?: boolean;
		  };
}

interface BuildOutput {
	outputs: BuildArtifact[];
	success: boolean;
	logs: Array<BuildMessage | ResolveMessage>;
}

interface BuildArtifact extends Blob {
	path: string;
	loader: Loader;
	hash?: string;
	kind: 'entry-point' | 'chunk' | 'asset' | 'sourcemap';
	sourcemap?: BuildArtifact;
}

type Loader =
	| 'js'
	| 'jsx'
	| 'ts'
	| 'tsx'
	| 'json'
	| 'toml'
	| 'file'
	| 'napi'
	| 'wasm'
	| 'text';

interface BuildOutput {
	outputs: BuildArtifact[];
	success: boolean;
	logs: Array<BuildMessage | ResolveMessage>;
}

declare class ResolveMessage {
	readonly name: 'ResolveMessage';
	readonly position: Position | null;
	readonly code: string;
	readonly message: string;
	readonly referrer: string;
	readonly specifier: string;
	readonly importKind:
		| 'entry_point'
		| 'stmt'
		| 'require'
		| 'import'
		| 'dynamic'
		| 'require_resolve'
		| 'at'
		| 'at_conditional'
		| 'url'
		| 'internal';
	readonly level: 'error' | 'warning' | 'info' | 'debug' | 'verbose';

	toString(): string;
}
```
