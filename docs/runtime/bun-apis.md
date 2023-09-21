# Bun APIs

Bun 在 Bun 全局对象上通过许多内置模块实现一组本机 api。这些 api 经过严格优化，代表了实现某些常见功能的规范 “Bun-native” 方式。

Bun 致力于尽可能实现标准 Web API。Bun 引入了新的 API，主要用于不存在标准的服务器端任务，例如文件 I/O 和启动 HTTP 服务器。在这些情况下，Bun 的方法仍然构建在标准 API 之上，例如 `Blob`、`URL` 和 `Request`。

这是一个示例

```sh
Bun.serve({
  fetch(req: Request) {
    return new Response("Success!");
  },
});
```

---

## HTTP server

- [`Bun.serve`](/docs/api/http#bun-serve)

## Bundler

- [`Bun.build`](/docs/bundler)

## File I/O

- [`Bun.file`](/docs/api/file-io#reading-files-bun-file)

- [`Bun.write`](/docs/api/file-io#writing-files-bun-write)

## Child processes

- [`Bun.spawn`](/docs/api/spawn#spawn-a-process-bun-spawn)

- [`Bun.spawnSync`](/docs/api/spawn#blocking-api-bun-spawnsync)

## TCP

- [`Bun.listen`](/docs/api/tcp#start-a-server-bun-listen)

- [`Bun.connect`](/docs/api/tcp#start-a-server-bun-listen)

##Transpiler

- [`Bun.Transpiler`](/docs/api/transpiler)

## Routing

- [`Bun.FileSystemRouter`](/docs/api/file-system-router)

## HTML Rewriting

- [`HTMLRewriter`](/docs/api/html-rewriter)

## Hashing

- [`Bun.hash`](/docs/api/hashing#bun-hash)
- [`Bun.CryptoHasher`](/docs/api/hashing#bun-cryptohasher)

## import.meta

- [`import.meta`](/docs/api/import-meta)

## SQLite

- [`bun:sqlite`](/docs/api/sqlite)

## FFI

- [`bun:ffi`](/docs/api/ffi)

## Testing

- [`bun:test`](/docs/cli/test)

---

## Node-API

- [`Node-API`](/docs/api/node-api)

## Utilities

- [`Bun.version`](/docs/api/utils#bun-version)

- [`Bun.revision`](/docs/api/utils#bun-revision)

- [`Bun.env`](/docs/api/utils#bun-env)

- [`Bun.main`](/docs/api/utils#bun-main)

- [`Bun.sleep()`](/docs/api/utils#bun-sleep)

- [`Bun.sleepSync()`](/docs/api/utils#bun-sleepsync)

- [`Bun.which()`](/docs/api/utils#bun-which)

- [`Bun.peek()`](/docs/api/utils#bun-peek)

- [`Bun.openInEditor()`](/docs/api/utils#bun-openineditor)

- [`Bun.deepEquals()`](/docs/api/utils#bun-deepequals)

- [`Bun.escapeHTML()`](/docs/api/utils#bun-escapehtml)

- [`Bun.fileURLToPath()`](/docs/api/utils#bun-fileurltopath)

- [`Bun.pathToFileURL()`](/docs/api/utils#bun-pathtofileurl)

- [`Bun.gzipSync()`](/docs/api/utils#bun-gzipsync)

- [`Bun.gunzipSync()`](/docs/api/utils#bun-gunzipsync)

- [`Bun.deflateSync()`](/docs/api/utils#bun-deflatesync)

- [`Bun.inflateSync()`](/docs/api/utils#bun-inflatesync)

- [`Bun.inspect()`](/docs/api/utils#bun-inspect)

- [`Bun.nanoseconds()`](/docs/api/utils#bun-nanoseconds)

- [`Bun.readableStreamTo*()`](/docs/api/utils#bun-readablestreamto)
- [`Bun.resolveSync()`](/docs/api/utils#bun-resolvesync)

---
