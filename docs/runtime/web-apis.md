# Web APIs

有些 Web API 与 Bun 或类似于 Bun 这样的服务器优先运行时的上下文无关，比如 DOM API 或 History API。不过，许多其他 API 在浏览器环境之外也非常有用；只要有可能，Bun 就会实现这些 Web 标准 API，而不是引入新的 API。

::: info 📌 小知识
Bun 部分或 完全支持 以下 Web api。
:::

## HTTP

- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

- [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

- [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)

- [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

- [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

- [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

## URLs

- [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL)

- [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## Web Workers

- [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker)

- [`self.postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)

- [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)

- [`MessagePort`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort)

- [`MessageChannel`](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel),

- [`BroadcastChannel`](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel).

## Streams

- [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

- [`WritableStream`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStream)

- [`TransformStream`](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream)

- [`ByteLengthQueuingStrategy`](https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy)

- [`CountQueuingStrategy`](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy) and associated classes

## Blob

- [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

## WebSockets

- [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) (_not production ready_)

## Encoding and decoding

- [`atob`](https://developer.mozilla.org/en-US/docs/Web/API/atob)

- [`btoa`](https://developer.mozilla.org/en-US/docs/Web/API/btoa)

- [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)

- [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)

## JSON

- [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## Timeouts

- [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

- [`clearTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)

## Intervals

- [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

- [`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)

## Crypto

- [`crypto`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)

- [`SubtleCrypto`](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)

- [`CryptoKey`](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey)

# Debugging

- [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console)

- [`performance`](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

## Microtasks

- [`queueMicrotask`](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask)

## Errors

- [`reportError`](https://developer.mozilla.org/en-US/docs/Web/API/reportError)

## User interaction

- [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

- [`confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

- [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)(适用于交互式 CLIs)

## Realms

- [`ShadowRealm`](https://github.com/tc39/proposal-shadowrealm)

## Events

- [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

- [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)

- [`ErrorEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent)

- [`CloseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)

- [`MessageEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)
