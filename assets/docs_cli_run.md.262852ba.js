import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.2e4ef904.js";const h=JSON.parse('{"title":"bun run","description":"","frontmatter":{},"headers":[],"relativePath":"docs/cli/run.md","filePath":"docs/cli/run.md","lastUpdated":1695293529000}'),l={name:"docs/cli/run.md"},o=p(`<h1 id="bun-run" tabindex="-1"><code>bun run</code> <a class="header-anchor" href="#bun-run" aria-label="Permalink to &quot;\`bun run\`&quot;">​</a></h1><p><code>bun</code> cli 可用于执行 JavaScript / TypeScript 文件、package.json 脚本和 <a href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json/#bin" target="_blank" rel="noreferrer">npm 包</a>。</p><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><p>Bun 设计为快速启动和快速运行。Bun 使用了 JavaScriptCore 引擎，该引擎由 Apple 为 Safari 开发。Bun 在大多数情况下，启动和运行性能比 V8 更快，V8 是 Node.js 和基于 Chromium 的浏览器使用的引擎。Bun 的转换编译器和运行时用 Zig (一种现代的高性能语言) 编写。在 Linux 上，这意味着启动时间比 Node.js 快 4 倍。</p><p>在 Linux 上运行同一个简单的 Hello World 脚本</p><table><thead><tr><th>命令</th><th>耗时</th></tr></thead><tbody><tr><td><code>bun hello.js</code></td><td>5.2ms</td></tr><tr><td><code>node hello.js</code></td><td>25.1ms</td></tr></tbody></table><h2 id="运行文件" tabindex="-1">运行文件 <a class="header-anchor" href="#运行文件" aria-label="Permalink to &quot;运行文件&quot;">​</a></h2><p>请比较 <code>node &lt;file&gt;</code></p><p>使用 bun run 执行源文件。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span></span></code></pre></div><p>Bun 支持开箱即用的 TypeScrip 和 JSX。在执行之前，每个文件都会被 Bun 的快速原生转译程序动态转译。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 无需转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.jsx</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 快速转译</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 无需转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.jsx</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 快速转译</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 快速转译</span></span></code></pre></div><p>您可以省略 run 关键字并使用 “naked” 命令 它们的执行结果是一致的。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.js</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.js</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span></span></code></pre></div><h2 id="watch" tabindex="-1"><code>--watch</code> <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;\`--watch\`&quot;">​</a></h2><p>要在监视模式下运行文件，请使用 <code>--watch</code> 标志。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">🚨 注意事项：</p><p>在使用 bun run 时应该将 <code>--watch</code> 放置在 bun 后面，出现在命令末尾的标志将被忽略，并传递到 <code>dev</code> 上。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># ✅ 推荐用法</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># ❌ 请不要这样使用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># ✅ 推荐用法</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># ❌ 请不要这样使用</span></span></code></pre></div></div><h2 id="smol" tabindex="-1"><code>--smol</code> <a class="header-anchor" href="#smol" aria-label="Permalink to &quot;\`--smol\`&quot;">​</a></h2><p>在内存受限的环境中，使用 <code>--smol</code> 标志以降低性能为代价来减少内存使用。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--smol</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.tsx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--smol</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.tsx</span></span></code></pre></div><h2 id="运行一个-package-json-脚本" tabindex="-1">运行一个 package.json 脚本 <a class="header-anchor" href="#运行一个-package-json-脚本" aria-label="Permalink to &quot;运行一个 package.json 脚本&quot;">​</a></h2><p>请比较 <code>npm run &lt;script&gt;</code> 和 <code>yarn &lt;script&gt;</code></p><p>您可以在 package.json 定义为多个与 shell 命令相对应的命名脚本。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ... 其他字段</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;clean&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;rm -rf dist &amp;&amp; echo &#39;Done.&#39;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bun server.ts&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ... 其他字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;clean&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;rm -rf dist &amp;&amp; echo &#39;Done.&#39;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;bun server.ts&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>你可以使用 <code>bun &lt;script&gt;</code> 或 <code>bun run &lt;script</code>&gt; 来执行上述命令。</p><p>🌰 举个例子</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用自定的 bun clean 将执行以下命令</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># $ rm -rf dist &amp;&amp; echo &#39;Done.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Cleaning...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Done.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用自定的 bun clean 将执行以下命令</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># $ rm -rf dist &amp;&amp; echo &#39;Done.&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Cleaning...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Done.</span></span></code></pre></div><p>Bun 在 shell 中执行命令。bun 将使用它找到的第一个 shell，bun 默认以下顺序查找 shell : <code>bash</code>、<code>sh</code>、<code>zsh</code>。</p><div class="info custom-block"><p class="custom-block-title">📌 小知识</p><p><b>⚡️ bun 拥有更快的的速度</b></p><p>npm 在 Linux 上运行的启动时间大约是 170ms；而在 Bun 上则是 6ms。</p></div><p>如果 package.json 脚本和内置的 bun 命令( <code>install</code> , <code>dev</code> , <code>upgrade</code> 等 )之间存在名称冲突，那么 Bun 的内置命令优先，在这种情况下，使用更明确的 bun run 命令来执行你的包脚本。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>项目中不带任何参数运行 <code>bun run</code> 会展示 package.json 文件中 <code>&quot;scripts&quot;</code> 字段里的所有命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span></span>
<span class="line"><span style="color:#6A737D;"># 预期结果：</span></span>
<span class="line"><span style="color:#6A737D;"># quickstart scripts:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  bun run clean</span></span>
<span class="line"><span style="color:#6A737D;">#    rm -rf dist &amp;&amp; echo &#39;Done.&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  bun run dev</span></span>
<span class="line"><span style="color:#6A737D;">#    bun server.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 2 scripts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span></span>
<span class="line"><span style="color:#6A737D;"># 预期结果：</span></span>
<span class="line"><span style="color:#6A737D;"># quickstart scripts:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  bun run clean</span></span>
<span class="line"><span style="color:#6A737D;">#    rm -rf dist &amp;&amp; echo &#39;Done.&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#  bun run dev</span></span>
<span class="line"><span style="color:#6A737D;">#    bun server.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 2 scripts</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">📌 注意点</p><p>原理 ： 不带任何参数运行 <code>bun run</code>，bun 会读取当前目录中的 package.json 文件里的 <code>&quot;scripts&quot;</code> 字段，获取项目 <code>&quot;scripts&quot;</code> 里的命令并展示到控制台。</p></div><p>Bun 尊重生命周期钩子( hook )。例如定义了，<code>bun run clean</code> 它将执行 preclean 和 postclean。如果 <code>pre&lt;script&gt;</code> 失败，Bun 将不会执行脚本本身。</p><h2 id="bun" tabindex="-1"><code>--bun</code> <a class="header-anchor" href="#bun" aria-label="Permalink to &quot;\`--bun\`&quot;">​</a></h2><p>package.json 脚本引用本地安装的 CLI (如 <code>vite</code> 或 <code>Next</code>) 这是很常见的操作。这些 CLI 通常是标记了 <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" target="_blank" rel="noreferrer">shebang</a> 的 JavaScript 文件，以指示它们应该使用 <code>node</code> 执行。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">do</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stuff</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">do</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stuff</span></span></code></pre></div><p>默认情况下，Bun 尊重这个 <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" target="_blank" rel="noreferrer">shebang</a> 并使用 node 执行脚本。但是，您可以使用--bun 标志覆盖此行为。对于基于 Node.js 的 CLI，这将使用 Bun 而不是 Node.js 运行 CLI。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">📌 小知识</p><p><b> bun 在默认情况( 即不添加 <code>--bun</code> ) 的情况下 bun 会使用 node 调用 cli 而不是 bun 自身 <code>--bun</code> 则可以使用 bun 来替代 node </b></p></div>`,42),e=[o];function c(t,r,i,y,d,E){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{h as __pageData,F as default};