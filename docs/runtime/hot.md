# 监视模式

Bun 支持两种通过 CLI 标志的自动重载：

- `--watch`，当导入的文件发生更改时，该模式会硬启动 Bun 的进程。
- `-- hot` 模式，当导入的文件更改时，bun 会自动软加载代码 (而无需重新启动进程)。

## `--watch` 模式

`--watch` 模式可以与 `bun test` 一起使用，也可以在运行 TypeScript、JSX 和 JavaScript 文件时使用。

要在 `--watch` 模式下运行文件，请执行以下操作：

```sh
$ bun --watch index.tsx
```

要在 `--watch` 模式下运行测试:

```sh
$ bun --watch test
```

在 `--watch` 模式下，Bun 会跟踪所有导入的文件并监视它们的更改。检测到更改后，Bun 会重新启动进程，保留初始运行中使用的相同的 CLI 参数和环境变量集。如果 Bun 崩溃，`--watch` 将尝试自动重新启动该过程。

> **⚡️ 重新加载速度很快。** 您可能习惯使用文件系统观察器来使用多层库来包装本机 API，但是糟糕的是，它们依赖于轮询。
>
> 相反，Bun 使用操作系统本机文件系统监视程序 api (如 kqueue 或 inotify) 来检测对文件的更改。Bun 还进行了许多优化以使其能够扩展到更大的项目 (例如为文件描述符设置高 rlimit，静态分配的文件路径缓冲区，在可能的情况下重用文件描述符等)。

下面的示例显示了 Bun 在编辑文件时实时重新加载文件，并将 VSCode 配置为在[每次击键时保存文件](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)。

::: code-group

```sh [bash]
$ bun run --watch watchy.tsx
```

```sh [watchy.tsx]
$ bun run --watch watchy.tsx
```

:::

在这个例子中，Bun 是

![hot](../../public/hot.gif)

在监视模式下运行 `bun test`，并启用 `save-on-keypress` ：

```sh
$ bun --watch test
```

![hot](../../public/hot01.gif)

## `--hot`模式

在使用 Bun 执行代码时，使用 `bun --hot` 来启用热重载。这与 `--watch` 模式不同，因为 `bun --hot` 不会重启进程。相反，它会检测代码更改并使用新代码更新其内部模块缓存。

> 注意 - 这与浏览器中的热重新加载不同!许多框架提供了 “热重载” 体验，您可以在其中编辑和保存前端代码 ( 例如，React 组件 ) 并查看浏览器中反映的更改，而无需刷新页面。 `bun --hot` 相当于体验这种的服务器端。要在浏览器中获得热重载，请使用像 Vite 这样的框架。

```sh
$ bun --hot server.ts
```

从 入口点 (上面的示例中的 server.ts) 开始，Bun 构建所有导入的源文件 (不包括 node_modules 中的那些文件) 的注册表，并监视它们的更改。当检测到更改时，Bun 执行 “软重载”。所有文件都将重新评估，但所有全局状态 (尤其是 `globalThis` 对象) 都将持久化。

```ts
// 让 TypeSCript 开心
declare global {
	var count: number;
}

globalThis.count ??= 0;
console.log(`Reloaded ${globalThis.count} times`);
globalThis.count++;

// 阻止`Bun Run`退出
setInterval(function () {}, 1000000);
```

如果使用 `bun --hot server.ts` 运行此文件，则每次保存文件时都会看到重新加载计数增量。

```sh
bun --hot index.ts
# Reloaded 1 times
# Reloaded 2 times
# Reloaded 3 times
```

像 nodemon 这样的传统文件监视器会重新启动整个过程，因此 HTTP 服务器和其他有状态对象会丢失。相比之下， `bun --hot` 能够在不重新启动进程的情况下展示更新后的代码。

## HTTP 服务

例如，这使得可以在不关闭服务器本身的情况下更新您的 HTTP 请求处理程序。当您保存文件时，您的 HTTP 服务器将使用更新的代码重新加载，而无需重新启动进程。这导致刷新速度非常快。

```sh
globalThis.count ??= 0;
globalThis.count++;

Bun.serve({
  fetch(req: Request) {
    return new Response(`Reloaded ${globalThis.count} times`);
  },
  port: 3000,
});
```

> 注意-在 Bun 的未来版本中，计划支持 Vite 的 `import.meta.hot`，以实现更好的生命周期管理以进行热重新加载并与生态系统保持一致。

::: details 实施详情
在热重装时，bun:

- 重置内部 `require` 缓存和 ES 模块注册表 (`Loader.registry`)
- 同步运行垃圾收集器 (以最小化内存泄漏，以运行时性能为代价)
- 从头开始重新转换所有代码 (包括 sourcemaps)
- 使用 JavaScriptCore 重新计算代码
  这个实现并没有特别优化。它会重新传输未更改的文件。它不会尝试增量编译。这是一个起点。
  :::
