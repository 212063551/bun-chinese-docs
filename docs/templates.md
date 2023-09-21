# 模板

## `bun init`

使用交互式 `bun init` 命令搭建一个空项目。

```sh
$ bun init
```

按 Enter 接受每个提示的默认答案，或传递-y 标志以自动接受默认答案。

## `bun create`

:::info 📌 小知识
注意 - 您不需要通过 `bun create` 来使用 Bun。您根本不需要任何配置。此命令的存在使入门更快，更容易。
:::

用 Bun 创建一个新的 bun 项目模板。这是一个灵活的命令，可用于使用 `create-<template>` npm 包、GitHub、 或本地模板创建新项目。

## 来自 npm

```sh
$ bun create <template> [<destination>]
```

假设您没有同名的 [本地模板](#本地模板)，此命令将从 npm 下载并执行 `create-<template>` 包。以下两个命令的结果是相同的：

```sh
$ bun create remix
$ bunx create-remix
```

有关完整的文档和使用说明，请参阅关联的 `create-<template>` 包的文档。

## 来自 GitHub

此操作将 [GitHub](https://github.com) 资源库的内容下载到磁盘。

```sh
$ bun create <user>/<repo>
$ bun create github.com/<user>/<repo>
```

<Badge type="tip" text="可选" /> 指定目标文件夹的名称。如果未指定目的地，则将使用回购名称。

```sh
$ bun create <user>/<repo> mydir
$ bun create github.com/<user>/<repo> mydir
```

上述操作中 Bun 将执行以下步骤:

- 下载模板
- 将所有模板文件复制到目标文件夹中
- 使用`bun install`安装依赖项。
- 初始化新的 Git 存储库，使用`--no-git`标志选择退出。
- 运行模板的配置开始脚本

:::info 📌 小知识
默认情况下，Bun 不会覆盖任何现有文件。但是使用`--force`标志就覆盖现有文件。
:::

## 来自 本地模板

:::warning 🚨 注意
⚠️ 本地模板与远程模板不同，本地模板运行`bun create`会删除整个目标文件夹！
:::

Bun 的模板可以扩展为支持在本地文件系统上定义的自定义模板。这些模板应位于以下目录之一中:

- `$HOME/.bun-create/自定义模版名称`: 全局模板

- `项目根目录/.bun-create/自定义模版名称`: 项目特定的模板

- 您可以通过设置`BUN_CREATE_DIR`环境变量自定义全局模板路径。

创建本地模板，请导航到 `$HOME/.bun-create` 并使用模板的所需名称创建一个新目录。

```sh
# 打开 $HOME/.bun-create
$ cd $HOME/.bun-create

# 创建 foo 文件夹
$ mkdir foo

# 打开 foo 文件夹
$ cd foo
```

然后，在该目录中创建一个 package.json 文件，内容如下:

```json
{
	"name": "foo"
}
```

## 设置逻辑

您可以在本地模板的`package.json`的 `bun-create` 部分中指定安装前和安装后的安装脚本。

```json
{
	"name": "@bun-examples/simplereact",
	"version": "0.0.1",
	"main": "index.js",
	"dependencies": {
		"react": "^17.0.2",
		"react-dom": "^17.0.2"
	},
	"bun-create": {
		"preinstall": "echo 'Installing...'", // 单个命令
		"postinstall": ["echo 'Done!'"], // 命令数组
		"start": "bun run echo 'Hello world!'"
	}
}
```

支持以下字段。其中每一个都可以对应一个字符串或字符串数组。命令数组将按顺序执行。

`postinstall` 安装依赖项后运行

`preinstall` 在安装依赖项之前运行

克隆模板后，`bun create`会自动从`package.json`中删除 `bun-create` 部分，然后再将其写入目标文件夹。

## cli 命令参考

| 命令           | 命令描述                    |
| -------------- | --------------------------- |
| `--force`      | 覆盖现有文件                |
| `--no-install` | 跳过安装 `node_modules`任务 |
| `--no-git`     | 不要初始化 git 存储库       |
| `--open`       | 完成后自动在浏览器中打开    |

## 环境变量

| 名称                | 描述                                                               |
| ------------------- | ------------------------------------------------------------------ |
| `GITHUB_API_DOMAIN` | 如果您使用的是 GitHub 企业或代理，您可以自定义 GitHub 域名下载     |
| `GITHUB_API_TOKEN`  | 这允许 `bun create` 使用私有存储库创建工作，或者如果您受到速率限制 |

#### Bun create 是如何工作的？

当您在终端输入`bun create 模板 Destination` 时，程序会执行以下操作：

:::warning 🚨 请注意以下内容

[以下内容参杂个人理解,请阅读原文获取更详细的内容](https://bun.sh/docs/templates#environment-variables)

:::

##### 远程模板

1.  `GET` 请求查询远程模板
2.  `GET` 请求下载最新的远程模板
3.  解压并提取远程模板到指定位置

    - 如果存在会覆盖的文件，请发出警告并退出，除非传递了--force

##### Github 模版

1. 从 GitHub 下载远程模板
2. 解压并提取远程模板到指定位置

   - 如果存在会覆盖的文件，请发出警告并退出，除非传递了--force

##### 本地模版

1. 打开本地模板文件
2. 递归删除目标目录
3. 复制文件到指定目录
4. 解析 package.json，修改名称 删除 package.json 文件中`bun-create`部分，并将更新后的 package.json 保存到磁盘。

   - 如果检测到 `Next.js` ，则在依赖项列表中添加 `bun-framework-next`
   - 如果检测到 `Create React App` ，请将/src/index.{js，jsx，ts，tsx} 中的入口点添加到 public/index.html
   - 如果检测到 `Relay` ，请添加 `bun-macro-relay` ，以使 Relay 工作

5. 自动检测 npm 客户端，首选 pnpm、yarn (v1)，最后是 npm
6. 使用 npm 客户端运行 `"bun-create": {"preinstall"}` 中定义的任何任务
7. 运行 npm 客户端安装，除非 `--no-install` 被传递或 `package.json`中没有依赖关系
8. 使用 npm 客户端运行 `"bun-create": {"preinstall"}` 中定义的任何任务
9. 运行 `git init`; `git add -A .`; `git commit -am "初始提交"`；
   - 将`gitignore`重命名为`.gitignore`。npm 会自动删除包中显示的`.gitignore`文件。
   - 如果存在依赖关系，则在安装 node_modules 时,同步在单独的线程中运行。
   - 使用 libgit2(如果可用)进行了测试，在微基准测试中执行速度降低了 3 倍
