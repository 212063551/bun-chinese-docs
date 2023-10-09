import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.9b1e551d.js";const o="/assets/workspaces.c2d7f274.png",k=JSON.parse('{"title":"工作区","description":"","frontmatter":{},"headers":[],"relativePath":"docs/install/workspaces.md","filePath":"docs/install/workspaces.md","lastUpdated":1696865530000}'),e={name:"docs/install/workspaces.md"},l=p(`<h1 id="工作区" tabindex="-1">工作区 <a class="header-anchor" href="#工作区" aria-label="Permalink to &quot;工作区&quot;">​</a></h1><p>Bun 支持 <code>Package.json</code> 中的 <a href="https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true#description" target="_blank" rel="noreferrer">工作区</a> 。工作区使得将复杂的软件开发成由几个独立的包组成的 Monorepo 变得很容易。</p><p>Monorepo 通常具有以下结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tree</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;root&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── bun.lockb</span></span>
<span class="line"><span style="color:#e1e4e8;">├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">└── packages</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── pkg-a</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   ├── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   ├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   └── tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── pkg-b</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   ├── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   ├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">    │   └── tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── pkg-c</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── index.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">        ├── package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">        └── tsconfig.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tree</span></span>
<span class="line"><span style="color:#24292e;">&lt;root&gt;</span></span>
<span class="line"><span style="color:#24292e;">├── README.md</span></span>
<span class="line"><span style="color:#24292e;">├── bun.lockb</span></span>
<span class="line"><span style="color:#24292e;">├── package.json</span></span>
<span class="line"><span style="color:#24292e;">├── tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">└── packages</span></span>
<span class="line"><span style="color:#24292e;">    ├── pkg-a</span></span>
<span class="line"><span style="color:#24292e;">    │   ├── index.ts</span></span>
<span class="line"><span style="color:#24292e;">    │   ├── package.json</span></span>
<span class="line"><span style="color:#24292e;">    │   └── tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">    ├── pkg-b</span></span>
<span class="line"><span style="color:#24292e;">    │   ├── index.ts</span></span>
<span class="line"><span style="color:#24292e;">    │   ├── package.json</span></span>
<span class="line"><span style="color:#24292e;">    │   └── tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">    └── pkg-c</span></span>
<span class="line"><span style="color:#24292e;">        ├── index.ts</span></span>
<span class="line"><span style="color:#24292e;">        ├── package.json</span></span>
<span class="line"><span style="color:#24292e;">        └── tsconfig.json</span></span></code></pre></div><p>在根目录的 <code>package.json</code> 中，“workspaces” 键用于指示哪些子目录应被视为 <code>monorepo</code> 中的包/工作区。通常将所有工作区放在一个名为 <code>packages</code> 的目录中。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my-project&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;workspaces&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;packages/*&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;devDependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;example-package-in-monorepo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;workspace:*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;my-project&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;workspaces&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;packages/*&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;devDependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;example-package-in-monorepo&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;workspace:*&quot;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>Glob 支持 - Bun 在工作区支持简单的<code>&lt;directory&gt;/*</code> globs 。尚不支持完整的 glob 语法 (例如 ** 和 ？)。</p></blockquote><p>每个工作区都有自己的 <code>package.json</code> 在 <code>monorepo</code> 中引用其他包时，请使用 &quot;workspace:*&quot; 作为 package.json 中的 version 字段。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pkg-a&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;pkg-b&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;workspace:*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pkg-a&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;dependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;pkg-b&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;workspace:*&quot;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>版本支持— 面包支持简单 workspace:* 版本在 &quot;dependencies&quot;. 尚不支持完整版语法 (例如： workspace:^* ) .</p></blockquote><h2 id="工作空间有几个主要的好处。" tabindex="-1">工作空间有几个主要的好处。 <a class="header-anchor" href="#工作空间有几个主要的好处。" aria-label="Permalink to &quot;工作空间有几个主要的好处。&quot;">​</a></h2><ul><li><p>代码可以拆分为逻辑部分 - 如果一个包依赖于另一个包，您只需将其作为依赖项添加到 <code>package.json</code> 中。如果程序包 b 依赖于 a，<code>bun install</code> 会将您的本地 <code>packages/a</code> 目录安装到 <code>node_modules</code> 中，而不是从 npm 注册表下载它。</p></li><li><p>可以消除重复的依赖关系 - 如果 a 和 b 共享一个共同的依赖关系，它将被提升到根 node_modules 目录。这减少了冗余磁盘的使用，并最大限度地减少了与同时安装多个版本的软件包相关的 “依赖性地狱” 问题。</p></li></ul><div class="info custom-block"><p class="custom-block-title">⚡️ 速度</p><p>即使对于大型 monorepos，安装也很快。Bun 在 Linux 上大约 500 毫秒内安装 Remix monorepo。</p><ul><li>28x 比 npm 安装更快</li><li>12x 比 yarn 安装更快 (v1)</li><li>8x 比 pnpm 安装更快</li></ul><p><img src="`+o+'" alt="workspaces"></p></div>',13),c=[l];function t(r,i,y,E,u,d){return n(),a("div",null,c)}const g=s(e,[["render",t]]);export{k as __pageData,g as default};
