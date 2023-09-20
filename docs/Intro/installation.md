# 安装 Bun

Bun 作为单个可执行文件发布，可以通过以下几种不同的方式进行安装。

## macOS and Linux

::: info 📌 Linux 用户注意
Linux 需要使用 `unzip` 命令解压后才能安装 Bun。强烈建议您使用 5.6 或更高版本的内核，最低兼容内核 5.1。
:::

::: code-group

```sh [curl（macOS/Linux）]
$ curl -fsSL https://bun.sh/install | bash  # 适用于macOS、Linux和WSL
$ curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0" # 安装特定版本
```

```sh [npm]
$ npm install -g bun
```

```sh [Homebrew]
$ brew tap oven-sh/bun # 适用于macOS和Linux
$ brew install bun
```

```sh [Docker]
$ docker pull oven/bun
$ docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

```sh [Proto]
$ proto install bun
```

:::

## Windows

:::warning 🚨 Windows 用户注意
Bun 正在开发中，对 Windows 的支持并不完善！
:::

Bun 为 Windows 提供了一个有限的、实验性的版本。目前，只支持 Bun 运行时。您暂时只能在 Windows 操作系统中使用以下命令

- ` bun <file>`
- `bun run <file>`

Bun 仍在开发中，以下命令在 Windows 操作系统中暂时被禁用了

- `bun test`
- `bun install/add/remove`
- `bun link/unlink`
- `bun build`

## 更新

:::warning 🚨 Homebrew 和 Proto 用户注意
如果您使用了 Homebrew 或 Proto 安装的 Bun，为了避免冲突 Homebrew 用户请使用 `brew upgrade bun` Proto 用户请使用 `proto install bun --pin`
:::

安装后 Bun 后，二进制文件可以自行升级。

```sh
$ bun upgrade
```

Bun 会在每次提交给 `main` 时，Bun 都会自动发布一个(未经测试的) Canary 版本。要升级到最新的 Canary 版本，请执行以下操作：

```sh
$ bun upgrade --canary
```

&ensp;[查看 Canary 版本](https://github.com/oven-sh/bun/releases/tag/canary)

## 卸载

如果需要从系统中删除 Bun，请使用以下命令。

::: code-group

```sh [curl]
$ rm -rf ~/.bun #适用于macOS、Linux和WSL
```

```sh [npm]
$ npm uninstall -g bun
```

```sh [Homebrew]
$ brew uninstall bun
```

```sh [Proto]
$ proto uninstall bun
```

:::
