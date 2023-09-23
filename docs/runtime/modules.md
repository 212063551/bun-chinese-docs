# 模块解析

JavaScript 中的模块解析是一个复杂的话题。

生态系统目前正处于从 CommonJS 模块到原生 ES 模块的长期的过渡过程中。TypeScrip 围绕与 ESM 不兼容的导入扩展强制执行自己的一组规则。不同的构建工具通过不同的非兼容机制支持路径重新映射。

Bun 旨在提供一个一致且可预测的模块解析系统，该系统可以正常工作。不幸的是，它仍然很复杂。

## 语法

请考虑以下文件。
:::code-group

```ts [index.ts]
import { hello } from './hello';

hello();
```

```ts [hello.ts]
export function hello() {
	console.log('Hello world!');
}
```

:::
当我们运行 index.ts 时，它会打印 “Hello world!”。

```sh
$ bun index.ts
# Hello world!
```

在本例中，我们从 `./Hello` 导入，这是一个没有扩展名的相对路径。扩展导入是可选的，但需要支持。要解决此导入问题，Bun 将按顺序检查以下文件：

- `./hello.ts`
- `./hello.tsx`
- `./hello.js`
- `./hello.mjs`
- `./hello.cjs`
- `./hello/index.ts`
- `./hello/index.js`
- `./hello/index.json`
- `./hello/index.mjs`

导入路径不区分大小写，这意味着这些都是有效的导入:

```ts
import { hello } from './hello';
import { hello } from './HELLO';
import { hello } from './hElLo';
```

导入路径可以选择性地包括扩展名。如果存在扩展名，Bun 将只检查具有该扩展名的文件。

```ts
import { hello } from './hello';
import { hello } from './hello.ts'; // this works
```

如果您从 `*.js{x}` 导入，Bun 将额外检查匹配的 `*.ts{x}` 文件，以与 TypeScrip 的 [ES 模块](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html#new-file-extensions)支持兼容。

```ts
import { hello } from './hello';
import { hello } from './hello.ts'; // this works
import { hello } from './hello.js'; // this also works
```

BUN 同时支持 ES 模块(`import` / `export` 语法)和 CommonJS 模块(`required()` / `mode.exports`)。下面的 CommonJS 版本也可以在 Bun 中使用。

:::code-group

```js [index.js]
const { hello } = require('./hello');

hello();
```

```js [hello.js]
function hello() {
	console.log('Hello world!');
}

exports.hello = hello;
```

:::

Bun 不鼓励在新项目中使用 CommonJS。

## 模块系统

Bun 对 CommonJS 和 ES 模块有原生支持。ES 模块是新项目推荐的模块格式，但 CommonJS 模块在 Node.js 生态系统中仍被广泛使用。

在 Bun 的 JavaScript 运行时，ES 模块和 CommonJS 模块都可以使用 `require`。如果目标模块是 ES 模块，require 返回模块命名空间对象 (相当于 import \* as)。如果目标模块是 CommonJS 模块，则 `require` 返回 `module.export`s 对象 (如在 Node.js 中)。

| 模块类型  | `require()`  |                             `import \* as`                             |
| :-------: | :----------: | :--------------------------------------------------------------------: |
| ES Module | 模块命名空间 |                              模块命名空间                              |
| CommonJS  |   模块导出   | 默认为 module.exports，module.exports 的键 `.exports` 命名为 `exports` |

## 使用 `required()`

您可以使用 required () 导入任何文件或包，甚至 `ts` 或 `.mjs` 文件。

::: details 📌 **什么是 CommonJS 模块？**
2016 年，ECMAScript 增加了对 [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)的支持。ES 模块是 JavaScript 模块的标准。然而，数以百万计的 NPM 包仍然使用 CommonJS 模块。

CommonJS 模块是使用 `mode.exports` 导出值的模块。通常，`require` 用于导入 CommonJS 模块。

```js
// my-commonjs.cjs
const stuff = require('./stuff');
module.exports = { stuff };
```

CommonJS 和 ES 模块最大的区别是 CommonJS 模块是同步的，而 ES 模块是异步的。还有其他区别。

- ES 模块支持顶级 `await`，而 CommonJS 模块不支持。
- ES 模块始终处于[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)，而 CommonJS 模块则没有。
- 浏览器没有对 CommonJS 模块的原生支持，但是它们通过 `<script type="module">`对 ES 模块有原生支持。
- CommonJS 模块不能静态分析，而 ES 模块只允许静态导入和导出。

**CommonJS 模块**：这些是在 JavaScript 中使用的一种模块系统。CommonJS 模块的一个关键特性是它们同步加载和执行。这意味着当您导入 CommonJS 模块时，该模块中的代码会立即运行，并且您的程序会等待它完成，然后再继续执行下一个任务。这类似于从头到尾不跳页地阅读一本书。

**ES 模块(ESM)**：这是在 JavaScript 中引入的另一种模块系统类型。与 CommonJS 相比，它们的行为略有不同。在 ESM 中，静态导入(使用 `import` 语句进行的导入)是同步的，就像 CommonJS 一样。这意味着当您使用常规的 `import` 语句导入 ESM 时，该模块中的代码将立即运行，并且您的程序将以循序渐进的方式进行。把它想象成一页一页地读一本书。

**动态导入** ：现在，可能会令人困惑的部分来了。ES 模块还支持通过 `import()` 函数动态导入模块。这称为“动态导入”，它是异步的，因此它不会阻塞主程序的执行。相反，它会在程序继续运行的同时在后台获取和加载模块。一旦模块准备好，您就可以使用它了。这就像是在你还在阅读的时候从一本书中获得额外的信息，而不需要暂停阅读。

#### 总而言之：

- CommonJS 模块和静态 ES 模块 ( `import` 语句 ) 以类似的同步方式工作，就像从头到尾阅读一本书一样。
- ES 模块还提供了使用 `import()` 函数异步导入模块的选项。这就像在阅读本书的中间不停地查找额外的信息。
  :::

## 使用 import()

您可以导入任何文件或包，甚至 cjs 文件。

```js
import { foo } from './foo'; // 扩展是可选的
import bar from './bar.ts';
import { stuff } from './my-commonjs.cjs';
```

## 一起使用 `import` 和 `require()`

在 Bun 中，您可以在同一文件中使用 `import` 或 `require` 引文它们始终都有效。

```js
import { stuff } from './my-commonjs.cjs';
import Stuff from './my-commonjs.cjs';
const myStuff = require('./my-commonjs.cjs');
```

#### 顶级 await

此规则的唯一例外是顶级 await。您不能要求 require() 使用顶级 await 的文件，因为 require() 函数本质上是同步的。

幸运的是，很少有库使用顶级 await ，因此这几乎不是问题。但是，如果在应用程序代码中使用顶级 await，请确保该文件不会从应用程序中的其他位置被 require()。相反，您应该使用 import 或 [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)。

## 导入包

Bun 实现了 Node.js 模块解析算法，因此您可以使用 packages 从 node_modules 导入包。

```js
import { stuff } from 'foo';
```

此算法的完整规范已正式记录在 [Node.js 文档](https://nodejs.org/api/modules.html)中; 我们在此不再重复。简而言之: 如果从 “foo” 导入，则 Bun 会在文件系统上扫描包含包 foo 的 `node_modules` 目录。

一旦找到 foo 包，Bun 就会读取 Package.json 以确定应该如何导入该包。为了确定包的入口点，Bun 首先读取 Exports 字段并检查以下条件。

```json
{
	"name": "foo",
	"exports": {
		"bun": "./index.js",
		"worker": "./index.js",
		"node": "./index.js",
		"require": "./index.js", //如果导入方为CommonJS
		"import": "./index.mjs", // 如果导入方是ES模块
		"default": "./index.js"
	}
}
```

无论这些条件中的哪一个首先出现在 Package.json 中，都将用于确定包的入口点。

Bun 尊重 [`"exports"`](https://nodejs.org/api/packages.html#subpath-exports) 和 [`"imports"`](https://nodejs.org/api/packages.html#imports) 这两个子路径。

```json
{
	"name": "foo",
	"exports": {
		".": "./index.js"
	}
}
```

子路径 import 和 require 相互配合工作。

```json
{
	"name": "foo",
	"exports": {
		".": {
			"import": "./index.mjs",
			"require": "./index.js"
		}
	}
}
```

与 Node.js 中一样，在 `"exports"` 映射中指定任何子路径都将阻止导入其他子路径；您只能导入显式导出的文件。给定上面的 Package.json：

```js
import stuff from 'foo'; // 这很管用
import stuff from 'foo/index.mjs'; // 这不是
```

> TypeScript -注意 Bun 支持特殊的 “bun” 出口条件。如果您的库是用 TypeScript 编写的，则可以直接发布您的 (未转换!) TypeScript 文件到 npm。如果您在 “bun” 条件下指定包的 \*.ts 入口点，则 Bun 将直接导入并执行您的 TypeScript 源文件。

如果未定义 `"module"`，Bun 将回退到 `"module"` (仅限 ESM 导入)然后是 [`"Main"`](https://nodejs.org/api/packages.html#main)。

```json
{
	"name": "foo",
	"module": "./index.js",
	"main": "./index.js"
}
```

## 路径映射

本着将 TypeScript 视为一流公民的精神，Bun 运行时将根据 `tsconfig.json` 中的 [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths) 字段重新映射导入路径。这是与 Node.js 的主要分歧，Node.js 不支持任何形式的导入路径重新映射。

```json
{
	"compilerOptions": {
		"paths": {
			"config": ["./config.ts"], // 将说明符映射到文件
			"components/*": ["components/*"] // 通配符匹配
		}
	}
}
```

如果您不是 TypeScript 用户，则可以在项目根目录中创建 [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) 以实现相同的行为。

::: details Bun 中 CommonJS 互操作的底层细节
BUN 的 JavaScript 运行时具有对 CommonJS 的本机支持。当 Bun 的 JavaScript 代码转换程序检测到 mode.exports 的用法时，它会将该文件视为 CommonJS。然后，模块加载器将转换后的模块包装在如下所示的函数中：

```js
(function (module, exports, require) {
	// transpiled module
})(module, exports, require);
```

`module`，`exports` 和 `require` 非常像 Node.js 中的 `module`，`exports` 和 `require`。在 C++中，这些是通过一个带作用域的[范围](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) 赋值的。内部映射存储导出对象，以便在模块完全加载之前处理周期性的请求调用。

成功评估 CommonJS 模块后，将创建一个合成模块记录，默认 ES [模块导出设置为 `module.exports`](https://github.com/oven-sh/bun/blob/9b6913e1a674ceb7f670f917fc355bb8758c6c72/src/bun.js/bindings/CommonJSModuleRecord.cpp#L212-L213) 和 `Module.exports` 对象的键将重新导出为命名导出 (如果 `module.exports` 对象是一个对象)。

当使用 Bun's 打包时，它的工作原理不同。bun 的打包程序将 CommonJS 模块包装在 `require_${moduleName}` 函数中，该函数返回 `module.exports` 对象。
:::
