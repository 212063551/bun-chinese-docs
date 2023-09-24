# 自动安装

如果在工作目录或更高版本中找不到 `node_modules` 目录，则 Bun 将放弃 Node.js 风格的模块解析，而采用 Bun 模块解析算法。

在 Bun 风格的模块解析下，所有导入的软件包在执行期间都会自动安装到[`全局模块缓存`]/docs/install/cache) 中 (与 bun install 使用的缓存相同)。

```js
import { foo } from 'foo'; // 安装 “最新” 版本

foo();
```

第一次运行该脚本时，Bun 会自动安装"foo"并存储它。下一次运行脚本时，将使用存储的版本。

## 版本解析

为了确定要安装的版本，Bun 遵循以下算法：

- 检查项目根目录中的 bun.lockb 文件。如果存在，请使用固定文件中指定的版本。
- 否则，向上扫描树以查找包含 package.json 作为依赖项的"foo"。如果找到，请使用指定的 semver 版本或版本范围。
- 否则，请使用 `Latest`。

## 缓存行为

一旦确定了版本或版本范围，Bun 将：

1. 检查模块缓存中是否有兼容版本。如果存在，就使用它。
2. 在解析 Latest 时，Bun 将检查是否在过去 24 小时内下载并缓存了 Package@Latest。如果是这样的话，就使用它。
3. 否则，请从 npm 注册表下载并安装适当的版本。

## 安装

软件包安装并缓存到 `<cache>/<pkg>@<version>` 中，因此可以一次性缓存同一软件包的多个版本。此外，在 `<cache>/<pkg>/<version>` 下创建了一个符号链接，以更快地查找缓存中存在的软件包的所有版本。

## 版本说明符

通过直接在 import 语句中指定版本或版本范围，可以省略整个解析算法。

```sh
import { z } from "zod@3.0.0"; // 特定版本
import { z } from "zod@next"; // npm标签
import { z } from "zod@^3.20.0"; // semver range
```

## 优势

这种自动安装方法非常有用，原因如下：

- 空间效率 依赖项的每个版本仅存在于磁盘上的一个位置。与每个项目的冗余安装相比，这可以节省大量空间和时间。

- 可移植性 为了共享简单的脚本和要点，您的源文件是独立的。无需将 `zip` 包含代码和配置文件的目录放在一起。通过 `import` 语句中的版本说明符，甚至 `package.json` 也不是必需的。

- 方便 无需在运行文件或脚本之前运行 `npm install` 或运行`bun install` 可以直接使用 `bun run`运行项目。

- 向后兼容性 Bun 仍然支持在 Package.json 中指定的版本(如果存在)，您可以使用单个命令切换到 Bun 样式的解析：`rm -rf node_modules`。

## 局限性

- 当然上述方法也存在缺点，那就是部分代码编辑器无法智能感知，例如 IDE 中的 TypeScript 自动完成依赖于 node_modules 内部类型声明文件的存在。我们正在研究各种解决方案。

- 不支持 [补丁程序包](https://github.com/ds300/patch-package)

## FAQ

:::details 这与 pnpm 的工作有何不同？
使用 pnpm，您必须运行 `pnpm install`，它会创建一个符号链接的 `node_modules `文件夹，供运行时解析。相比之下，Bun 在运行文件时会即时解决依赖关系。无需提前运行任何安装命令。Bun 也不会创建 `node_modules` 文件夹。
:::

:::details 这与 Yarn Plug'N'Play 有什么不同？
使用 Yarn，您必须在运行脚本之前运行 yarn install。相比之下，Bun 在运行文件时会即时解决依赖关系。无需提前运行任何安装命令。Yarn Plug'N'Play 还使用 zip 文件来存储依赖关系。这使得依赖项在运行时[加载速度变慢](https://twitter.com/jarredsumner/status/1458207919636287490)，因为随机访问对压缩文件的读取往往比同等的磁盘查找慢。
:::

:::details 这与 Deno 所做的有什么不同？
Deno 在每次 npm 导入之前都需要一个 npm: `import`，在 `tsconfig.json` 中缺少对通过 `compilerOptions.pats` 导入映射的支持，并且对 `package.json` 设置的支持不完整。与 Deno 不同，Bun 目前不支持 URL 导入。
:::
