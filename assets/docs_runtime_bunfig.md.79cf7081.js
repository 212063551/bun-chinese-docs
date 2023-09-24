import{_ as s,o as a,c as o,Q as l}from"./chunks/framework.400dfe9a.js";const E=JSON.parse('{"title":"bunfig.toml","description":"","frontmatter":{},"headers":[],"relativePath":"docs/runtime/bunfig.md","filePath":"docs/runtime/bunfig.md","lastUpdated":1695572839000}'),n={name:"docs/runtime/bunfig.md"},e=l(`<h1 id="bunfig-toml" tabindex="-1">bunfig.toml <a class="header-anchor" href="#bunfig-toml" aria-label="Permalink to &quot;bunfig.toml&quot;">​</a></h1><p>Bun 的行为可以使用其配置文件 bunfig.toml 进行配置。</p><p>通常，Bun 依赖于预先存在的配置文件 (例如 package.json 和 tsconfig.json) 来配置其行为。bunfig.toml 仅用于配置 Bun 特定的东西。此文件是可选的，如果没有它，Bun 将开箱即用。</p><h2 id="全局-vs-本地" tabindex="-1">全局 vs 本地 <a class="header-anchor" href="#全局-vs-本地" aria-label="Permalink to &quot;全局 vs 本地&quot;">​</a></h2><p>通常，建议将 bunfig.toml 文件与 package.json 一起添加到项目根目录中。</p><p>要全局配置 Bun，您还可以在以下路径之一创建.bunfig.toml 文件：</p><ul><li><p><code>$HOME/.bunfig.toml</code></p></li><li><p><code>$XDG_CONFIG_HOME/.bunfig.toml</code></p></li></ul><p>如果同时检测到全局和局部 <code>bunfig</code>，则结果将被浅合并，局部优先于全局。CLI 标志将在适用的情况下覆盖 <code>bunfig</code> 设置。</p><h2 id="运行时" tabindex="-1">运行时 <a class="header-anchor" href="#运行时" aria-label="Permalink to &quot;运行时&quot;">​</a></h2><p>Bun 的运行时行为是使用 <code>bunfig.toml</code> 文件中的顶级字段配置的。</p><h2 id="preload" tabindex="-1"><code>preload</code> <a class="header-anchor" href="#preload" aria-label="Permalink to &quot;\`preload\`&quot;">​</a></h2><p>在运行文件或脚本之前要执行的脚本数组。这对于注册插件很有用。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#在运行文件或脚本之前运行的脚本</span></span>
<span class="line"><span style="color:#6A737D;">#用于注册插件</span></span>
<span class="line"><span style="color:#B392F0;">preload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;./preload.ts&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#在运行文件或脚本之前运行的脚本</span></span>
<span class="line"><span style="color:#6A737D;">#用于注册插件</span></span>
<span class="line"><span style="color:#6F42C1;">preload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;./preload.ts&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="jsx" tabindex="-1"><code>jsx</code> <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;\`jsx\`&quot;">​</a></h2><p>配置 Bun 如何处理 JSX。您也可以在 <code>tsconfig.json</code> 的编译器选项中设置这些字段，但这里也支持非 TypeScript 项目。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">jsx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react&quot;</span></span>
<span class="line"><span style="color:#B392F0;">jsxFactory</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;h&quot;</span></span>
<span class="line"><span style="color:#B392F0;">jsxFragment</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Fragment&quot;</span></span>
<span class="line"><span style="color:#B392F0;">jsxImportSource</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;react&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">jsx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;react&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">jsxFactory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;h&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">jsxFragment</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Fragment&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">jsxImportSource</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;react&quot;</span></span></code></pre></div><p>有关这些字段的更多信息，请参阅 tsconfig 文档。</p><ul><li><p><a href="https://www.typescriptlang.org/tsconfig#jsx" target="_blank" rel="noreferrer"><code>jsx</code></a></p></li><li><p><a href="https://www.typescriptlang.org/tsconfig#jsxFactory" target="_blank" rel="noreferrer"><code>jsxFactory</code></a></p></li><li><p><a href="https://www.typescriptlang.org/tsconfig#jsxFragment" target="_blank" rel="noreferrer"><code>jsxFragment</code></a></p></li><li><p><a href="https://www.typescriptlang.org/tsconfig#jsxImportSource" target="_blank" rel="noreferrer"><code>jsxImportSource</code></a></p></li></ul><h2 id="smol" tabindex="-1"><code>smol</code> <a class="header-anchor" href="#smol" aria-label="Permalink to &quot;\`smol\`&quot;">​</a></h2><p>启用 <code>smol</code> 模式。这以牺牲性能为代价从而减少了内存的使用。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 以性能为代价减少内存使用</span></span>
<span class="line"><span style="color:#B392F0;">smol</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 以性能为代价减少内存使用</span></span>
<span class="line"><span style="color:#6F42C1;">smol</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span></code></pre></div><h2 id="loglevel" tabindex="-1"><code>logLevel</code> <a class="header-anchor" href="#loglevel" aria-label="Permalink to &quot;\`logLevel\`&quot;">​</a></h2><p>设置日志级别。这可以是 <code>&quot;debug&quot;</code>, <code>&quot;warn&quot;</code>, 或 <code>&quot;error&quot;</code>。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">logLevel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;debug&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># &quot;debug&quot; | &quot;warn&quot; | &quot;error&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">logLevel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;debug&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># &quot;debug&quot; | &quot;warn&quot; | &quot;error&quot;</span></span></code></pre></div><h2 id="define" tabindex="-1"><code>define</code> <a class="header-anchor" href="#define" aria-label="Permalink to &quot;\`define\`&quot;">​</a></h2><p>定义字段允许您用常量表达式替换某些全局标识符。Bun 将用表达式替换标识符的任何用法。表达式应该是一个 JSON 字符串。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[define]</span></span>
<span class="line"><span style="color:#6A737D;"># 用字符串 &#39;lox&#39; 替换 “p<wbr>rocess.env.bagel” 的任何用法。</span></span>
<span class="line"><span style="color:#6A737D;"># 这些值被解析为JSON,除了支持单引号字符串和 “未定义”在JS中变成了 “未定义”。</span></span>
<span class="line"><span style="color:#6A737D;"># 这可能会在未来的版本中改变为只是常规的TOML。这是CLI参数解析的保留。</span></span>
<span class="line"><span style="color:#B392F0;">&quot;p<wbr>rocess.env.bagel&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&#39;lox&#39;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[define]</span></span>
<span class="line"><span style="color:#6A737D;"># 用字符串 &#39;lox&#39; 替换 “p<wbr>rocess.env.bagel” 的任何用法。</span></span>
<span class="line"><span style="color:#6A737D;"># 这些值被解析为JSON,除了支持单引号字符串和 “未定义”在JS中变成了 “未定义”。</span></span>
<span class="line"><span style="color:#6A737D;"># 这可能会在未来的版本中改变为只是常规的TOML。这是CLI参数解析的保留。</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;p<wbr>rocess.env.bagel&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&#39;lox&#39;&quot;</span></span></code></pre></div><h1 id="loader" tabindex="-1"><code>loader</code> <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;\`loader\`&quot;">​</a></h1><p>配置 Bun 如何将文件扩展名映射到加载器。这对于加载 Bun 本身不支持的文件很有用。如果</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[loader]</span></span>
<span class="line"><span style="color:#6A737D;"># when a .bagel file is imported, treat it like a tsx file</span></span>
<span class="line"><span style="color:#B392F0;">&quot;.bagel&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;tsx&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[loader]</span></span>
<span class="line"><span style="color:#6A737D;"># when a .bagel file is imported, treat it like a tsx file</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;.bagel&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;tsx&quot;</span></span></code></pre></div><p>Bun 支持以下加载器:</p><ul><li>jsx</li><li>js</li><li>ts</li><li>tsx</li><li>css</li><li>file</li><li>json</li><li>toml</li><li>wasm</li><li>napi</li><li>base64</li><li>dataurl</li><li>text</li></ul>`,32),p=[e];function t(c,r,i,d,u,y){return a(),o("div",null,p)}const g=s(n,[["render",t]]);export{E as __pageData,g as default};
