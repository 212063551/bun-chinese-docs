# 快速入门

本章我们将通过几个案例来带领我们了解 Bun 的使用

## 初始化

```sh
# 确保已正确安装 Bun，可通过以下命令查看
$ bun -v

#  先找个地方建个空目录。
$ mkdir server

# 打开 server 文件夹
$ cd server

# 使用 bun init 来快速出创建一个项目
$ bun init
```

默认生成的入口文件是 \*.ts 文件，所以 Bun 会为您生成一个 tsconfig.json。如果您只想使用 JavaScript，那么它将生成一个 [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)。

## 编写 http 服务代码

在 index.ts 文件中编写以下代码

```ts
const server = Bun.serve({
	port: 3000,
	fetch(res) {
		return new Response('Hello, World.');
	},
});

console.log(`Listening on http://localhost:${server.port}`);
```

运行下述命令

```sh
$ bun index.ts
```

访问 [http://localhost:3000](http://localhost:3000)，您应该会看到一个简单的页面，上面写着 Hello, World.

## 添加 npm 脚本

您也可以在 package.json 文件中的 `"scripts"` 字段中添加 bun 脚本

```json {5-7}
{
	"name": "quickstart",
	"module": "index.ts",
	"type": "module",
+	"scripts": {
+		"start": "bun run index.ts"
+	},
	"devDependencies": {
		"bun-types": "^0.7.0"
	}
}
```

使用 Bun 运行 npm 脚本

```sh
$ bun run start
```

:::info 📌 小知识
⚡️ Bun 拥有更优秀的性能：bun 运行速度比 npm 快 28 倍 ( 6ms vs 170ms )
:::

## 安装软件包

安装 Figlet 包及其类型声明。Figlet 是一个用于将字符串转换为 ASCII 艺术的实用程序。

```sh
$ bun add figlet
$ bun add -d @types/figlet # 安装 TypeScript 类型包
```

更新 index.ts 以在 `fetch` 处理程序中使用`figlet`。

```ts {1,6-8}
+ import figlet from 'figlet';

const server = Bun.serve({
  port: 3000,
  fetch() {
+    const body = figlet.textSync('Bun!');
+    return new Response(body);
+    return new Response('Bun!');
  },
});
```

重新启动服务器并刷新页面。您应该会看到一个新的 ASCII 艺术横幅。

```
  ____              _
 | __ ) _   _ _ __ | |
 |  _ | | | | '_ | |
 | |_) | |_| | | | |_|
 |____/ __,_|_| |_(_)

```
