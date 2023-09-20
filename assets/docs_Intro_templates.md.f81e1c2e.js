import{_ as n,C as o,o as l,c as p,H as e,a as t,Q as s}from"./chunks/framework.2e4ef904.js";const q=JSON.parse('{"title":"模板","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Intro/templates.md","filePath":"docs/Intro/templates.md","lastUpdated":1695186047000}'),c={name:"docs/Intro/templates.md"},r=s('<h1 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h1><h2 id="bun-init" tabindex="-1"><code>bun init</code> <a class="header-anchor" href="#bun-init" aria-label="Permalink to &quot;`bun init`&quot;">​</a></h2><p>使用交互式 <code>bun init</code> 命令搭建一个空项目。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>按 Enter 接受每个提示的默认答案，或传递-y 标志以自动接受默认答案。</p><h2 id="bun-create" tabindex="-1"><code>bun create</code> <a class="header-anchor" href="#bun-create" aria-label="Permalink to &quot;`bun create`&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">📌 小知识</p><p>注意 - 您不需要通过 <code>bun create</code> 来使用 Bun。您根本不需要任何配置。此命令的存在使入门更快，更容易。</p></div><p>用 Bun 创建一个新的 bun 项目模板。这是一个灵活的命令，可用于使用 <code>create-&lt;template&gt;</code> npm 包、GitHub、 或本地模板创建新项目。</p><h2 id="来自-npm" tabindex="-1">来自 npm <a class="header-anchor" href="#来自-npm" aria-label="Permalink to &quot;来自 npm&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">templat</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [&lt;destination&gt;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">templat</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [&lt;destination&gt;]</span></span></code></pre></div><p>假设您没有同名的 <a href="#本地模板">本地模板</a>，此命令将从 npm 下载并执行 <code>create-&lt;template&gt;</code> 包。以下两个命令的结果是相同的：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remix</span></span>\n<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-remix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remix</span></span>\n<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-remix</span></span></code></pre></div><p>有关完整的文档和使用说明，请参阅关联的 <code>create-&lt;template&gt;</code> 包的文档。</p><h2 id="来自-github" tabindex="-1">来自 GitHub <a class="header-anchor" href="#来自-github" aria-label="Permalink to &quot;来自 GitHub&quot;">​</a></h2><p>此操作将 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a> 资源库的内容下载到磁盘。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span>\n<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span>\n<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div>',16),i=s(`<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydir</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydir</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">use</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydir</span></span></code></pre></div><p>上述操作中 Bun 将执行以下步骤:</p><ul><li>下载模板</li><li>将所有模板文件复制到目标文件夹中</li><li>使用<code>bun install</code>安装依赖项。</li><li>初始化新的 Git 存储库，使用<code>--no-git</code>标志选择退出。</li><li>运行模板的配置开始脚本</li></ul><div class="info custom-block"><p class="custom-block-title">📌 小知识</p><p>默认情况下，Bun 不会覆盖任何现有文件。但是使用<code>--force</code>标志就覆盖现有文件。</p></div><h2 id="来自-本地模板" tabindex="-1">来自 本地模板 <a class="header-anchor" href="#来自-本地模板" aria-label="Permalink to &quot;来自 本地模板&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">🚨 注意</p><p>⚠️ 本地模板与远程模板不同，本地模板运行<code>bun create</code>会删除整个目标文件夹！</p></div><p>Bun 的模板可以扩展为支持在本地文件系统上定义的自定义模板。这些模板应位于以下目录之一中:</p><ul><li><p><code>$HOME/.bun-create/自定义模版名称</code>: 全局模板</p></li><li><p><code>项目根目录/.bun-create/自定义模版名称</code>: 项目特定的模板</p></li><li><p>您可以通过设置<code>BUN_CREATE_DIR</code>环境变量自定义全局模板路径。</p></li></ul><p>创建本地模板，请导航到 <code>$HOME/.bun-create</code> 并使用模板的所需名称创建一个新目录。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 打开 $HOME/.bun-create</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bun-create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 foo 文件夹</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打开 foo 文件夹</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 打开 $HOME/.bun-create</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bun-create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 foo 文件夹</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 打开 foo 文件夹</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo</span></span></code></pre></div><p>然后，在该目录中创建一个 package.json 文件，内容如下:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;foo&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;foo&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="设置逻辑" tabindex="-1">设置逻辑 <a class="header-anchor" href="#设置逻辑" aria-label="Permalink to &quot;设置逻辑&quot;">​</a></h2><p>您可以在本地模板的<code>package.json</code>的 <code>bun-create</code> 部分中指定安装前和安装后的安装脚本。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;@bun-examples/simplereact&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.0.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;react&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^17.0.2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;react-dom&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^17.0.2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;bun-create&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;preinstall&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;echo &#39;Installing...&#39;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 单个命令</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;postinstall&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;echo &#39;Done!&#39;&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 命令数组</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;bun run echo &#39;Hello world!&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;@bun-examples/simplereact&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.0.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;index.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;dependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;react&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^17.0.2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;react-dom&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^17.0.2&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;bun-create&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;preinstall&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;echo &#39;Installing...&#39;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 单个命令</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;postinstall&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;echo &#39;Done!&#39;&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 命令数组</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;bun run echo &#39;Hello world!&#39;&quot;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>支持以下字段。其中每一个都可以对应一个字符串或字符串数组。命令数组将按顺序执行。</p><p><code>postinstall</code> 安装依赖项后运行</p><p><code>preinstall</code> 在安装依赖项之前运行</p><p>克隆模板后，<code>bun create</code>会自动从<code>package.json</code>中删除 <code>bun-create</code> 部分，然后再将其写入目标文件夹。</p><h2 id="cli-命令参考" tabindex="-1">cli 命令参考 <a class="header-anchor" href="#cli-命令参考" aria-label="Permalink to &quot;cli 命令参考&quot;">​</a></h2><table><thead><tr><th>命令</th><th>命令描述</th></tr></thead><tbody><tr><td><code>--force</code></td><td>覆盖现有文件</td></tr><tr><td><code>--no-install</code></td><td>跳过安装 <code>node_modules</code>任务</td></tr><tr><td><code>--no-git</code></td><td>不要初始化 git 存储库</td></tr><tr><td><code>--open</code></td><td>完成后自动在浏览器中打开</td></tr></tbody></table><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>GITHUB_API_DOMAIN</code></td><td>如果您使用的是 GitHub 企业或代理，您可以自定义 GitHub 域名下载</td></tr><tr><td><code>GITHUB_API_TOKEN</code></td><td>这允许 <code>bun create</code> 使用私有存储库创建工作，或者如果您受到速率限制</td></tr></tbody></table><h4 id="bun-create-是如何工作的" tabindex="-1">Bun create 是如何工作的？ <a class="header-anchor" href="#bun-create-是如何工作的" aria-label="Permalink to &quot;Bun create 是如何工作的？&quot;">​</a></h4><p>当您在终端输入<code>bun create 模板 Destination</code> 时，程序会执行以下操作：</p><div class="warning custom-block"><p class="custom-block-title">🚨 请注意以下内容</p><p><a href="https://bun.sh/docs/templates#environment-variables" target="_blank" rel="noreferrer">以下内容参杂个人理解,请阅读原文获取更详细的内容</a></p></div><h5 id="远程模板" tabindex="-1">远程模板 <a class="header-anchor" href="#远程模板" aria-label="Permalink to &quot;远程模板&quot;">​</a></h5><ol><li><p><code>GET</code> 请求查询远程模板</p></li><li><p><code>GET</code> 请求下载最新的远程模板</p></li><li><p>解压并提取远程模板到指定位置</p><ul><li>如果存在会覆盖的文件，请发出警告并退出，除非传递了--force</li></ul></li></ol><h5 id="github-模版" tabindex="-1">Github 模版 <a class="header-anchor" href="#github-模版" aria-label="Permalink to &quot;Github 模版&quot;">​</a></h5><ol><li><p>从 GitHub 下载远程模板</p></li><li><p>解压并提取远程模板到指定位置</p><ul><li>如果存在会覆盖的文件，请发出警告并退出，除非传递了--force</li></ul></li></ol><h5 id="本地模版" tabindex="-1">本地模版 <a class="header-anchor" href="#本地模版" aria-label="Permalink to &quot;本地模版&quot;">​</a></h5><ol><li><p>打开本地模板文件</p></li><li><p>递归删除目标目录</p></li><li><p>复制文件到指定目录</p></li><li><p>解析 Package.json，修改名称 删除 Package.json 文件中<code>bun-create</code>部分，并将更新后的 Package.json 保存到磁盘。</p><ul><li>如果检测到 <code>Next.js</code> ，则在依赖项列表中添加 <code>bun-framework-next</code></li><li>如果检测到 <code>Create React App</code> ，请将/src/index.{js，jsx，ts，tsx} 中的入口点添加到 public/index.html</li><li>如果检测到 <code>Relay</code> ，请添加 <code>bun-macro-relay</code> ，以使 Relay 工作</li></ul></li><li><p>自动检测 npm 客户端，首选 pnpm、yarn (v1)，最后是 npm</p></li><li><p>使用 npm 客户端运行 <code>&quot;bun-create&quot;: {&quot;preinstall&quot;}</code> 中定义的任何任务</p></li><li><p>运行 npm 客户端安装，除非 <code>--no-install</code> 被传递或 <code>package.json</code>中没有依赖关系</p></li><li><p>使用 npm 客户端运行 <code>&quot;bun-create&quot;: {&quot;preinstall&quot;}</code> 中定义的任何任务</p></li><li><p>运行 <code>git init</code>; <code>git add -A .</code>; <code>git commit -am &quot;初始提交&quot;</code>；</p><ul><li>将<code>gitignore</code>重命名为<code>.gitignore</code>。npm 会自动删除包中显示的<code>.gitignore</code>文件。</li><li>如果存在依赖关系，则在安装 node_modules 时,同步在单独的线程中运行。</li><li>使用 libgit2(如果可用)进行了测试，在微基准测试中执行速度降低了 3 倍</li></ul></li></ol>`,32);function y(E,d,u,F,h,b){const a=o("Badge");return l(),p("div",null,[r,e(a,{type:"tip",text:"可选"}),t(" 指定目标文件夹的名称。如果未指定目的地，则将使用回购名称。"),i])}const C=n(c,[["render",y]]);export{q as __pageData,C as default};
