# 全局缓存

从注册表下载的所有包都存储在一个全局缓存中，该缓存位于 `~/.bun/Install/` 缓存。它们存储在名为 `${name}@${Version}`的子目录中，因此可以缓存一个包的多个版本。

:::details 配置缓存行为

```sh
[install.cache]

# 用于放置缓存的目录
dir = "~/.bun/install/cache"
# 当为 true 时，不要从全局缓存加载。
# Bun 仍然可以写入 node_modules/.cache
disable = false
#如果为 true，将始终从注册表中解析最新版本
disableManifest = false

```

:::

## 最大限度地减少重新下载

Bun 努力避免多次重新下载软件包。安装包时，如果缓存中已包含 package.json 指定范围内的版本，则 Bun 将使用缓存的包，而不是再次下载。

:::details 安装详细信息

如果 Semver 版本具有预发布后缀 `(1.0.0-Beta.0)` 或构建后缀 `(1.0.0+20220101)` ，则将其替换为该值的散列，以减少与长文件路径相关的错误机会。

如果存在 `node_modules` 文件夹，则在安装之前，Bun 会检查 `node_modules` 是否包含具有适当版本的所有预期包。如果包含，则 bun 安装完成。Bun 使用自定义 JSON 解析器，一旦找到 `"name"` 和 `"version"` 就停止解析。

如果包丢失或具有与 Package.json 不兼容的版本，则 Bun 会在缓存中检查兼容的模块。如果找到，则将其安装到 `node_modules` 中。否则，将从注册表下载程序包并进行安装。

:::

## 快速复制

一旦将包下载到缓存中，Bun 仍然需要将这些文件复制到 `node_modules` 中。Bun 使用可用的最快系统调用来执行此任务。在 Linux 上，它使用硬链接; 在 macOS 上，它使用 `clonefile`。

## 节省磁盘空间

由于 Bun 使用硬链接将模块复制到 Linux 上项目的 `node_modules` 目录中，因此包的内容仅存在于磁盘上的单个位置，从而大大减少了 `node_modules` 专用的磁盘空间量。

此功能不会扩展到 macOS，出于性能原因，macOS 使用 clonefile。

:::details 安装策略

此行为可使用 `--backend` 标志进行配置，Bun 的所有包管理命令都遵守此标志。

- `hardlink`：Linux 上的默认设置。

- `clonefile`：macOS 上的 `clonefile` 默认值。

- `clonefile_each_dir`： 与 `clonefile` 类似，只是它在每个目录中单独克隆每个文件。它仅在 macOS 上可用，并且执行速度往往比 clonefile 慢。

- `copyfile`： 当上述任何一个失败时使用的回退。这是最慢的选择。在 macOS 上，它使用 `fcopyfile()`; 在 Linux 上，它使用 `copy_file_range()`。

- `symlink`：目前仅使用 `file:` (并最终链接到：) `dependencies`。为了防止无限循环，它跳过符号链接 node_modules 文件夹。

- 如果您使用 `--backend=symlink` 安装，Node.js 将不会解析依赖关系的 `node_modules`，除非每个依赖关系都有自己的 `node_modules` 文件夹，或者您将 `--preserve-symlinks` 传递给 node。请参阅 [`--preserve-symllinks` 上的 Node.js 文档](https://nodejs.org/api/cli.html#--preserve-symlinks)。

- ```sh
  $ bun install --backend symlink
  $ node --preserve-symlinks ./foo.js
  ```

Bun 的运行时当前不公开与 `--preserve-symlink` 等价的符号链接。

:::
