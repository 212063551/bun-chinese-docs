import{_ as s,o as a,c as o,Q as l}from"./chunks/framework.400dfe9a.js";const m=JSON.parse('{"title":"自动安装","description":"","frontmatter":{},"headers":[],"relativePath":"docs/runtime/autoimport.md","filePath":"docs/runtime/autoimport.md","lastUpdated":1695572839000}'),n={name:"docs/runtime/autoimport.md"},p=l(`<h1 id="自动安装" tabindex="-1">自动安装 <a class="header-anchor" href="#自动安装" aria-label="Permalink to &quot;自动安装&quot;">​</a></h1><p>如果在工作目录或更高版本中找不到 <code>node_modules</code> 目录，则 Bun 将放弃 Node.js 风格的模块解析，而采用 Bun 模块解析算法。</p><p>在 Bun 风格的模块解析下，所有导入的软件包在执行期间都会自动安装到[<code>全局模块缓存</code>]/docs/install/cache) 中 (与 bun install 使用的缓存相同)。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { foo } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 安装 “最新” 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { foo } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 安装 “最新” 版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">();</span></span></code></pre></div><p>第一次运行该脚本时，Bun 会自动安装&quot;foo&quot;并存储它。下一次运行脚本时，将使用存储的版本。</p><h2 id="版本解析" tabindex="-1">版本解析 <a class="header-anchor" href="#版本解析" aria-label="Permalink to &quot;版本解析&quot;">​</a></h2><p>为了确定要安装的版本，Bun 遵循以下算法：</p><ul><li>检查项目根目录中的 bun.lockb 文件。如果存在，请使用固定文件中指定的版本。</li><li>否则，向上扫描树以查找包含 package.json 作为依赖项的&quot;foo&quot;。如果找到，请使用指定的 semver 版本或版本范围。</li><li>否则，请使用 <code>Latest</code>。</li></ul><h2 id="缓存行为" tabindex="-1">缓存行为 <a class="header-anchor" href="#缓存行为" aria-label="Permalink to &quot;缓存行为&quot;">​</a></h2><p>一旦确定了版本或版本范围，Bun 将：</p><ol><li>检查模块缓存中是否有兼容版本。如果存在，就使用它。</li><li>在解析 Latest 时，Bun 将检查是否在过去 24 小时内下载并缓存了 Package@Latest。如果是这样的话，就使用它。</li><li>否则，请从 npm 注册表下载并安装适当的版本。</li></ol><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>软件包安装并缓存到 <code>&lt;cache&gt;/&lt;pkg&gt;@&lt;version&gt;</code> 中，因此可以一次性缓存同一软件包的多个版本。此外，在 <code>&lt;cache&gt;/&lt;pkg&gt;/&lt;version&gt;</code> 下创建了一个符号链接，以更快地查找缓存中存在的软件包的所有版本。</p><h2 id="版本说明符" tabindex="-1">版本说明符 <a class="header-anchor" href="#版本说明符" aria-label="Permalink to &quot;版本说明符&quot;">​</a></h2><p>通过直接在 import 语句中指定版本或版本范围，可以省略整个解析算法。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;zod@3.0.0&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">特定版本</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;zod@next&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm标签</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">z</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;zod@^3.20.0&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">semver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">range</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;zod@3.0.0&quot;</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">特定版本</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;zod@next&quot;</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm标签</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">z</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;zod@^3.20.0&quot;</span><span style="color:#24292E;">; </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">semver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">range</span></span></code></pre></div><h2 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h2><p>这种自动安装方法非常有用，原因如下：</p><ul><li><p>空间效率 依赖项的每个版本仅存在于磁盘上的一个位置。与每个项目的冗余安装相比，这可以节省大量空间和时间。</p></li><li><p>可移植性 为了共享简单的脚本和要点，您的源文件是独立的。无需将 <code>zip</code> 包含代码和配置文件的目录放在一起。通过 <code>import</code> 语句中的版本说明符，甚至 <code>package.json</code> 也不是必需的。</p></li><li><p>方便 无需在运行文件或脚本之前运行 <code>npm install</code> 或运行<code>bun install</code> 可以直接使用 <code>bun run</code>运行项目。</p></li><li><p>向后兼容性 Bun 仍然支持在 Package.json 中指定的版本(如果存在)，您可以使用单个命令切换到 Bun 样式的解析：<code>rm -rf node_modules</code>。</p></li></ul><h2 id="局限性" tabindex="-1">局限性 <a class="header-anchor" href="#局限性" aria-label="Permalink to &quot;局限性&quot;">​</a></h2><ul><li><p>当然上述方法也存在缺点，那就是部分代码编辑器无法智能感知，例如 IDE 中的 TypeScript 自动完成依赖于 node_modules 内部类型声明文件的存在。我们正在研究各种解决方案。</p></li><li><p>不支持 <a href="https://github.com/ds300/patch-package" target="_blank" rel="noreferrer">补丁程序包</a></p></li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><details class="details custom-block"><summary>这与 pnpm 的工作有何不同？</summary><p>使用 pnpm，您必须运行 <code>pnpm install</code>，它会创建一个符号链接的 <code>node_modules </code>文件夹，供运行时解析。相比之下，Bun 在运行文件时会即时解决依赖关系。无需提前运行任何安装命令。Bun 也不会创建 <code>node_modules</code> 文件夹。</p></details><details class="details custom-block"><summary>这与 Yarn Plug&#39;N&#39;Play 有什么不同？</summary><p>使用 Yarn，您必须在运行脚本之前运行 yarn install。相比之下，Bun 在运行文件时会即时解决依赖关系。无需提前运行任何安装命令。Yarn Plug&#39;N&#39;Play 还使用 zip 文件来存储依赖关系。这使得依赖项在运行时<a href="https://twitter.com/jarredsumner/status/1458207919636287490" target="_blank" rel="noreferrer">加载速度变慢</a>，因为随机访问对压缩文件的读取往往比同等的磁盘查找慢。</p></details><details class="details custom-block"><summary>这与 Deno 所做的有什么不同？</summary><p>Deno 在每次 npm 导入之前都需要一个 npm: <code>import</code>，在 <code>tsconfig.json</code> 中缺少对通过 <code>compilerOptions.pats</code> 导入映射的支持，并且对 <code>package.json</code> 设置的支持不完整。与 Deno 不同，Bun 目前不支持 URL 导入。</p></details>`,25),e=[p];function t(c,r,i,d,E,y){return a(),o("div",null,e)}const F=s(n,[["render",t]]);export{m as __pageData,F as default};
