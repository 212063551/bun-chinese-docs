# Bun 对 Node.js 的兼容性

Bun 旨在实现完整的 Node.js API 兼容性。大多数用于 Node.js 环境的 npm 软件包都可以使用 Bun 来替代; 最佳方法是尝试一下。此页面会定期更新，以反映最新版本的 Bun 的兼容性状态。如果您遇到特定软件包的任何错误，请[联系我们](https://bun.sh/issues) 这将有助于我们确定下一步工作的优先级。

::: warning 🚨 注意事项
**此页面更新呢 与 官方文档 并非同步，页面内容可能有所不同，请及时参考 [官方文档](https://bun.sh/docs/runtime/nodejs-apis)**
:::

## 内置模块

## [`node:assert`](https://nodejs.org/api/assert.html)

🟢 已兼容

## [`node:async_hooks`](https://nodejs.org/api/async_hooks.html)

🟡 仅兼容 `AsyncLocalStorage`, 和 `AsyncResource`

## [`node:buffer`](https://nodejs.org/api/buffer.html)

🟢 已兼容

## [`node:child_process`](https://nodejs.org/api/child_process.html)

🟡 缺少 `Stream` 标准输入输出, `proc.gid`, `proc.uid`. IPC 仅有部分支持目前与其他设备配合使用 `bun` processes.

## [`node:cluster`](https://nodejs.org/api/cluster.html)

🔴 尚未兼容

## [`node:console`](https://nodejs.org/api/console.html)

🟡 缺少 `Console`构造函数。

## [`node:crypto`](https://nodejs.org/api/crypto.html)

🟡 缺少 `crypto.Certificate` `crypto.ECDH` `crypto.KeyObject` `crypto.X509Certificate` `crypto.checkPrime{Sync}` `crypto.createPrivateKey` `crypto.createPublicKey` `crypto.createSecretKey` `crypto.diffieHellman` `crypto.generateKey{Sync}` `crypto.generateKeyPair{Sync}` `crypto.generatePrime{Sync}` `crypto.getCipherInfo` `crypto.{get|set}Fips` `crypto.hkdf` `crypto.hkdfSync` `crypto.secureHeapUsed` `crypto.setEngine` `crypto.sign` `crypto.verify`。有些方法还没有优化。

## [`node:dgram`](https://nodejs.org/api/dgram.html)

🔴 尚未兼容

## [`node:diagnostics_channel`](https://nodejs.org/api/diagnostics_channel.html)

🟢 已兼容

## [`node:dns`](https://nodejs.org/api/dns.html)

🟢 已兼容

## [`node:domain`](https://nodejs.org/api/domain.html)

🟢 已兼容

## [`node:events`](https://nodejs.org/api/events.html)

🟡 缺少 `on`.

## [`node:fs`](https://nodejs.org/api/fs.html)

🟡 缺少 `fs.fdatasync{Sync}` `fs.opendir{Sync}`. `fs.promises.open` 错误地返回文件描述符，而不是 `FileHandle`.

## [`node:http`](https://nodejs.org/api/http.html)

🟢 已兼容

## [`node:http2`](https://nodejs.org/api/http2.html)

🔴 尚未兼容

## [`node:https`](https://nodejs.org/api/https.html)

🟢 已兼容

## [`node:inspector`](https://nodejs.org/api/inspector.html)

🔴 尚未兼容

## [`node:module`](https://nodejs.org/api/module.html)

🟢 已兼容

## [`node:net`](https://nodejs.org/api/net.html)

🟡 缺少 `net.{get|set}DefaultAutoSelectFamily` `net.SocketAddress` `net.BlockList` `net.Server.ref()` `net.Server.unref()` `net.Socket.ref()` `net.Socket.unref()`.

## [`node:os`](https://nodejs.org/api/os.html)

🟢 已兼容

## [`node:path`](https://nodejs.org/api/path.html)

🟢 已兼容

## [`node:perf_hooks`](https://nodejs.org/api/perf_hooks.html)

🟡 仅 `perf_hooks.performance.now()` 和 `perf_hooks.performance.timeOrigin`都实施了。推荐使用全局`performance` 而不是 `perf_hooks.performance`.

## [`node:process`](https://nodejs.org/api/process.html)

🟡 参照全局 [`process`](#process).

## [`node:punycode`](https://nodejs.org/api/punycode.html)

🟢 已兼容 但已被 Node.js 弃用。

## [`node:querystring`](https://nodejs.org/api/querystring.html)

🟢 已兼容

## [`node:readline`](https://nodejs.org/api/readline.html)

🟢 已兼容

## [`node:repl`](https://nodejs.org/api/repl.html)

🔴 尚未兼容

## [`node:stream`](https://nodejs.org/api/stream.html)

🟢 已兼容

## [`node:string_decoder`](https://nodejs.org/api/string_decoder.html)

🟢 已兼容

## [`node:sys`](https://nodejs.org/api/util.html)

🟡 参照 [`node:util`](#node-util).

## [`node:timers`](https://nodejs.org/api/timers.html)

🟢 建议使用全局 `setTimeout`, 取而代之.

## [`node:tls`](https://nodejs.org/api/tls.html)

🟡 缺少 `tls.createSecurePair`.

## [`node:trace_events`](https://nodejs.org/api/tracing.html)

🔴 尚未兼容

## [`node:tty`](https://nodejs.org/api/tty.html)

🟢 已兼容

## [`node:url`](https://nodejs.org/api/url.html)

🟡 缺少 `url.domainTo{ASCII|Unicode}`. 推荐使用 `URL` 和 `URLSearchParams` 全局变量.

## [`node:util`](https://nodejs.org/api/util.html)

🟡 缺少 `util.MIMEParams` `util.MIMEType` `util.getSystemErrorMap()` `util.getSystemErrorName()` `util.parseArgs()` `util.stripVTControlCharacters()` `util.transferableAbortController()` `util.transferableAbortSignal()`.

## [`node:v8`](https://nodejs.org/api/v8.html)

🔴 `serialize` 和 `deserialize`使用 JavaScriptCore 的导线格式，而不是 V8。 否则，将不会实现。对于性能分析，请改用 [`bun:jsc`](/docs/project/benchmarking#bunjsc) 取而代之

## [`node:vm`](https://nodejs.org/api/vm.html)

🟡 核心功能正常工作，但未实施 VM 模块。可以使用 `ShadowRealm` 。

## [`node:wasi`](https://nodejs.org/api/wasi.html)

🟡 部分实施。

## [`node:worker_threads`](https://nodejs.org/api/worker_threads.html)

🟡 `Worker` 不支持以下选项: `eval`, `argv`, `execArgv`, `stdin`, `stdout`, `stderr`, `trackedUnmanagedFds`, `resourceLimits`. 缺少 `markAsUntransferable`, `moveMessagePortToContext`, `getHeapSnapshot`.

## [`node:zlib`](https://nodejs.org/api/zlib.html)

🟡 缺少 `zlib.brotli*`. 尚未优化。

## Globals

以下列出了 Node.js 实现的所有全局变量和 Bun 当前的兼容状态。

## [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

🟢 已兼容

## [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

🟢 已兼容

## [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

🟢 已兼容

## [`Buffer`](https://nodejs.org/api/buffer.html#class-buffer)

🟡 `'Base64'` 和 `'base64url'` 编码的不完全实现。

## [`ByteLengthQueuingStrategy`](https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy)

🟢 已兼容

## [`__dirname`](https://nodejs.org/api/globals.html#__dirname)

🟢 已兼容

## [`__filename`](https://nodejs.org/api/globals.html#__filename)

🟢 已兼容

## [`atob()`](https://developer.mozilla.org/en-US/docs/Web/API/atob)

🟢 已兼容

## [`BroadcastChannel`](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)

🟢 已兼容

## [`btoa()`](https://developer.mozilla.org/en-US/docs/Web/API/btoa)

🟢 已兼容

## [`clearImmediate()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearImmediate)

🟢 已兼容

## [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)

🟢 已兼容

## [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)

🟢 已兼容

## [`CompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream)

🔴 尚未兼容

## [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console)

🟡 缺少 `Console` 构造函数

## [`CountQueuingStrategy`](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)

🟢 已兼容

## [`Crypto`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)

🟢 已兼容

## [`SubtleCrypto (crypto)`](https://developer.mozilla.org/en-US/docs/Web/API/crypto)

🟢 已兼容

## [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)

🟢 已兼容

## [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)

🟢 已兼容

## [`DecompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream)

🔴 尚未兼容

## [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)

🟢 已兼容

## [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

🟢 已兼容

## [`exports`](https://nodejs.org/api/globals.html#exports)

🟢 已兼容

## [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

🟢 已兼容

## [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

🟢 已兼容

## [`global`](https://nodejs.org/api/globals.html#global)

🟢 已实现。这是一个包含全局命名空间中所有对象的对象。它很少被直接引用，因为它的内容没有额外的前缀，例如 `'__dirname'` 而不是 `global.__dirname`.

## [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

🟢 别名到 `global`.

## [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

🟢 已兼容

## [`MessageChannel`](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel)

🟢 已兼容

## [`MessageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)

🟢 已兼容

## [`MessagePort`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)

🟢 已兼容

## [`module`](https://nodejs.org/api/globals.html#module)

🟢 已兼容

## [`PerformanceEntry`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry)

🔴 尚未兼容

## [`PerformanceMark`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMark)

🔴 尚未兼容

## [`PerformanceMeasure`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMeasure)

🔴 尚未兼容

## [`PerformanceObserver`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)

🔴 尚未兼容

## [`PerformanceObserverEntryList`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserverEntryList)

🔴 尚未兼容

## [`PerformanceResourceTiming`](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming)

🔴 尚未兼容

## [`performance`](https://developer.mozilla.org/en-US/docs/Web/API/performance)

🟢 已兼容

## [`process`](https://nodejs.org/api/process.html)

🟡 缺少 `process.allowedNodeEnvironmentFlags` `process.channel` `process.constrainedMemory()` `process.getActiveResourcesInfo/setActiveResourcesInfo()` `process.setuid/setgid/setegid/seteuid/setgroups()` `process.hasUncaughtExceptionCaptureCallback` `process.initGroups()` `process.report` `process.resourceUsage()`. `process.binding` 是部分实施的。

## [`queueMicrotask()`](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask)

🟢 已兼容

## [`ReadableByteStreamController`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController)

🟢 已兼容

## [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

🟢 已兼容

## [`ReadableStreamBYOBReader`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader)

🔴 尚未兼容

## [`ReadableStreamBYOBRequest`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest)

🔴 尚未兼容

## [`ReadableStreamDefaultController`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)

🟢 已兼容

## [`ReadableStreamDefaultReader`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader)

🟢 已兼容

## [`require()`](https://nodejs.org/api/globals.html#require)

🟢 完全实施，以及 [`require.main`](https://nodejs.org/api/modules.html#requiremain), [`require.cache`](https://nodejs.org/api/modules.html#requirecache),和 [`require.resolve`](https://nodejs.org/api/modules.html#requireresolverequest-options).

## [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

🟢 已兼容

## [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)

🟢 已兼容

## [`setImmediate()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate)

🟢 已兼容

## [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)

🟢 已兼容

## [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)

🟢 已兼容

## [`structuredClone()`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

🟢 已兼容

## [`SubtleCrypto`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)

🟢 已兼容

## [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)

🟢 已兼容

## [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)

🟢 已兼容

## [`TextDecoderStream`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoderStream)

🔴 尚未兼容

## [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)

🟢 已兼容

## [`TextEncoderStream`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream)

🔴 尚未兼容

## [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream)

🟢 已兼容

## [`TransformStreamDefaultController`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController)

🟢 已兼容

## [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL)

🟢 已兼容

## [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

🟢 已兼容

## [`WebAssembly`](https://nodejs.org/api/globals.html#webassembly)

🟢 已兼容

## [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream)

🟢 已兼容

## [`WritableStreamDefaultController`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)

🟢 已兼容

## [`WritableStreamDefaultWriter`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter)

🟢 已兼容
