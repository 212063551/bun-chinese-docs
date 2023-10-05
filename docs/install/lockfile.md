# 锁定文件

运行 `bun install` 将创建一个名为 `bun.lockb` 的二进制锁文件。

## 为什么是二进制的？

总而言之性能很好, Bun 的 lockfile 保存和加载速度非常快，并且比通常在 lockfiles 中保存更多的数据。

## 如何检查 Bun 的 lockfile？

运行 bun install -y 以生成可以更容易地检查的与 yarn 兼容的 Yarn.lock (v1)。

## 我如何 git diff Bun 的 lockfile？

将以下内容添加到本地或全局.gittributes 文件中：

```
*.lockb binary diff=lockb
```

然后将以下内容添加到您的本地 git 配置中:

```sh
$ git config diff.lockb.textconv bun
$ git config diff.lockb.binary true
```

或使用--global 选项添加到您的全局 git 配置(系统范围)：

```sh
$ git config --global diff.lockb.textconv bun
$ git config --global diff.lockb.binary true
```

为什么这样做：

- `textconv` 告诉 git 在对比文件之前运行 bun
- `binary` 告诉 git 将文件视为二进制文件 (因此它不会尝试逐行比较)

在锁定文件上运行 Bun 将打印出人类可读的区别。因此，我们只需要告诉 git 在对锁定文件进行区分之前运行 Bun。

## 特定于平台的依赖关系？

Bun 将来自 npm 的标准化 cpu 和 os 值以及解析的包存储在 lockfile 中。它会跳过在运行时对当前目标禁用的下载，提取和安装软件包。这意味着即使最终安装的软件包发生变化，锁定文件也不会在平台/体系结构之间发生变化。

## Bun 的锁定文件存储了什么？

包、这些包的源数据、提升的安装顺序、每个包的依赖关系、这些依赖关系解析到什么包、完整性散列 (如果可用) 、每个包解析到什么以及哪个版本 (或等效)等。

## 为什么 Bun 的 lockfile 速度很快？

它对所有数据使用线性数组。[程序包](https://github.com/oven-sh/bun/blob/be03fc273a487ac402f19ad897778d74b6d72963/src/install/install.zig#L1825) 由自动递增的整数 ID 或包名称的哈希引用。长度超过 8 个字符的字符串将被消除重复。在保存到磁盘上之前，通过遍历包树并按依赖关系顺序克隆包，对 lockfile 进行垃圾回收并使其具有确定性。

## 我可以选择退出吗？

要在不创建锁定文件的情况下安装，请执行以下操作：

```sh
$ bun install --no-save
```

要安装除 bun.lockb 之外的 yarn lockfile 文件。

:::code-group

```sh [CLI 标志]
$ bun install --yarn

```

```sh [bunfig.toml]
[install.lockfile]
# 是否将非 bun lockfile 与 bun.lockb一起保存
# 仅支持 “yarn”
print = "yarn"
```

:::

:::details 配置 lockfile

```sh
[install.lockfile]

# 是否将lockfile保存到磁盘
save = true

# 是否将非Bun lockfile与bun.lockb一起保存
# 仅支持 “yarn”
print = "yarn"

```

:::
