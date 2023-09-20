import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.aa7dbb8c.js";const F=JSON.parse('{"title":"bun run","description":"","frontmatter":{},"headers":[],"relativePath":"docs/cli/run.md","filePath":"docs/cli/run.md","lastUpdated":1695187725000}'),p={name:"docs/cli/run.md"},l=o(`<h1 id="bun-run" tabindex="-1"><code>bun run</code> <a class="header-anchor" href="#bun-run" aria-label="Permalink to &quot;\`bun run\`&quot;">​</a></h1><p><code>bun</code> cli 可用于执行 JavaScript / TypeScript 文件、package.json 脚本和 <a href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json/#bin" target="_blank" rel="noreferrer">npm 包</a>。</p><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><p>Bun 设计为快速启动和快速运行。Bun 使用了 JavaScriptCore 引擎，该引擎由 Apple 为 Safari 开发。Bun 在大多数情况下，启动和运行性能比 V8 更快，V8 是 Node.js 和基于 Chromium 的浏览器使用的引擎。Bun 的转换编译器和运行时用 Zig (一种现代的高性能语言) 编写。在 Linux 上，这意味着启动时间比 Node.js 快 4 倍。</p><p>在 Linux 上运行同一个简单的 Hello World 脚本</p><table><thead><tr><th>命令</th><th>耗时</th></tr></thead><tbody><tr><td><code>bun hello.js</code></td><td>5.2ms</td></tr><tr><td><code>node hello.js</code></td><td>25.1ms</td></tr></tbody></table><h2 id="运行文件" tabindex="-1">运行文件 <a class="header-anchor" href="#运行文件" aria-label="Permalink to &quot;运行文件&quot;">​</a></h2><p>请比较 <code>node &lt;file&gt;</code></p><p>使用 bun run 执行源文件。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span></span></code></pre></div><p>Bun 支持开箱即用的 TypeScrip 和 JSX。在执行之前，每个文件都会被 Bun 的快速原生转译程序动态转译。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 无需转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.jsx</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 快速转译</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 无需转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.jsx</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 快速转译</span></span></code></pre></div><p>您可以省略 run 关键字并使用 “naked” 命令 它们的执行结果是一致的。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span></span></code></pre></div><h2 id="watch" tabindex="-1"><code>--watch</code> <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;\`--watch\`&quot;">​</a></h2><p>要在监视模式下运行文件，请使用 <code>--watch</code> 标志。</p>`,16),e=[l];function t(c,r,y,d,E,i){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};