# 环境变量

Bun 会自动读取您的 `.env` 文件，并提供以编程方式读取和写入环境变量的方法。另外，Bun 的运行时行为的某些方面可以使用特定于 Bun 的环境变量进行配置。

## 设置环境变量

Bun 自动读取以下文件 (按优先级增加的顺序列出)。

- `.env`
- `.env.production`、`.env.development`、`.env.test` (取决于 `NODE_ENV` 的值)
- `.env.local`
