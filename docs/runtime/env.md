# 环境变量

Bun 会自动读取您的 `.env` 文件，并提供以编程方式读取和写入环境变量的方法。另外，Bun 的运行时行为的某些方面可以使用特定于 Bun 的环境变量进行配置。

## 设置环境变量

Bun 自动读取以下文件 (按优先级增加的顺序列出)。

- `.env`
- `.env.production`、`.env.development`、`.env.test` (取决于 `NODE_ENV` 的值)
- `.env.local`

```sh
FOO=hello
BAR=world
```

当然您也可以通过也可以通过命令行设置变量。

```sh
FOO=helloworld bun run dev
```

当然您也以可以通过编程方式的方法将属性分配给 `process.env`。

```sh
process.env.FOO = "hello";
```

## `dotenv`

一般来说，您将不再需要 dotenv，因为 Bun 会读取。环境文件自动。

## 读取环境变量

可以通过 process.env 访问当前环境变量。

```sh
process.env.API_TOKEN; // => "secret"
```

Bun 还通过 `Bun.env` 公开这些变量，这是 `process.env` 的简单别名。

```sh
Bun.env.API_TOKEN; // => "secret"
```

运行 `bun run env` 会将所有当前设置的环境变量打印到命令行，这对调试很有用。

```sh
bun run env
# BAZ=stuff
# FOOBAR=aaaaaa
# <lots more lines>
```

## 配置 Bun

这些环境变量由 Bun 读取并配置其行为的各个方面。

|   配置项名称   |                                                                                                                                  配置项描述                                                                                                                                   |
| :------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    `TMPDIR`    |                                                               Bun 偶尔需要一个目录来存储捆绑或其他操作期间的中间资产。如果未设置，则默认为特定于平台的临时目录: Linux 上的 `/tmp`，macOS 上的 `/private/tmp`。                                                                |
|   `NO_COLOR`   |                                                                                                                   如果 `NO_COLOR=1`，则禁用 ANSI 颜色输出。                                                                                                                   |
| `FORCE_COLOR`  |                                                                                                 如果 `FORCE_COLOR = 1`，则即使设置了 `NO_COLOR`，ANSI 颜色输出也会强制启用。                                                                                                  |
| `DO_NOT_TRACK` | 如果 `DO_NOT_TRACK=1`，则 [禁用](https://do-not-track.dev/) 分析。Bun 记录了包的时间（这样我们就可以用数据来回答，Bun 变得更快了吗？）和功能使用情况 (例如，“人们实际上在使用 macros 吗？”)。请求体大小大约为 60 字节，因此数据量不大。在 bunfig 相当于 `telemetry = false`。 |
