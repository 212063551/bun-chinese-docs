# utilities ( 相信你懂 👀 )

bun pm 命令组提供了一组实用程序，用于使用 BUN 的包管理器。

要打印本地项目 bin 目录的路径，请执行以下操作：

```sh
$ bun pm bin

# /path/to/current/project/node_modules/.bin
```

要打印全局 bin 目录的路径:

```sh
$ bun pm bin -g

# <$HOME>/.bun/bin
```

若要打印当前项目及其已解析版本中已安装的依赖项的列表，请执行以下操作：

```sh
$ bun pm ls

# path/to/project node_modules (135)
# ├── eslint@8.38.0
# ├── react@18.2.0
# ├── react-dom@18.2.0
# ├── typescript@5.0.4
# └── zod@3.21.4
```

打印所有已安装的依赖项，包括 n 阶依赖项。

```sh
$ bun pm ls --all

# /path/to/project node_modules (135)
# ├── @eslint-community/eslint-utils@4.4.0
# ├── @eslint-community/regexpp@4.5.0
# ├── @eslint/eslintrc@2.0.2
# ├── @eslint/js@8.38.0
# ├── @nodelib/fs.scandir@2.1.5
# ├── @nodelib/fs.stat@2.0.5
# ├── @nodelib/fs.walk@1.2.8
# ├── acorn@8.8.2
# ├── acorn-jsx@5.3.2
# ├── ajv@6.12.6
# ├── ansi-regex@5.0.1
# ├── ...
```

要打印 Bun 全局模块缓存的路径，请执行以下操作：

```sh
$ bun pm cache
```

要清除 Bun 的全局模块缓存，请执行以下操作：

```sh
$ bun pm cache rm
```
