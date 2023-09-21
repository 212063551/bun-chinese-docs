import{_ as s,o as t,c as n,Q as a}from"./chunks/framework.2e4ef904.js";const g=JSON.parse('{"title":"Bun 非官方中文文档","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1695276017000}'),e={name:"README.md"},l=a(`<h1 id="bun-非官方中文文档" tabindex="-1">Bun 非官方中文文档 <a class="header-anchor" href="#bun-非官方中文文档" aria-label="Permalink to &quot;Bun 非官方中文文档&quot;">​</a></h1><h2 id="阅读事项-这很重要" tabindex="-1">阅读事项（这很重要！）： <a class="header-anchor" href="#阅读事项-这很重要" aria-label="Permalink to &quot;阅读事项（这很重要！）：&quot;">​</a></h2><ol><li>非官方中文文档。</li><li>非专业翻译人员 （ 绝大部使用机器翻译 ）。</li><li>文档翻译中包含个人理解</li><li>文档内容仅供参考，具体以 <a href="https://bun.sh/docs" target="_blank" rel="noreferrer">Bun 官方文档</a> 为准。</li><li>欢迎专业人士对此文档进行修正。</li></ol><h3 id="项目运行" tabindex="-1">项目运行 <a class="header-anchor" href="#项目运行" aria-label="Permalink to &quot;项目运行&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 克隆仓库</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/212063551/bun-chinese-docs.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> &amp; </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> &amp; </span><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行项目</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 克隆仓库</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/212063551/bun-chinese-docs.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> &amp; </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> &amp; </span><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行项目</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span></code></pre></div><h5 id="当前翻译进度" tabindex="-1">当前翻译进度： <a class="header-anchor" href="#当前翻译进度" aria-label="Permalink to &quot;当前翻译进度：&quot;">​</a></h5><table><thead><tr><th style="text-align:center;">英文目录</th><th style="text-align:center;">中文目录</th><th style="text-align:center;">进度</th><th style="text-align:center;">状态</th></tr></thead><tbody><tr><td style="text-align:center;">Intro</td><td style="text-align:center;">介绍</td><td style="text-align:center;">100%</td><td style="text-align:center;">✅</td></tr><tr><td style="text-align:center;">Runtime</td><td style="text-align:center;">运行时</td><td style="text-align:center;">1%</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">package manager</td><td style="text-align:center;">包管理器</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">Bundler</td><td style="text-align:center;">打包</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">Test runner</td><td style="text-align:center;">单元测试</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">package runner</td><td style="text-align:center;">npx bun 版本</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">API</td><td style="text-align:center;">应用编程接口</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr><tr><td style="text-align:center;">Project</td><td style="text-align:center;">项目</td><td style="text-align:center;">未开始</td><td style="text-align:center;">❌</td></tr></tbody></table>`,7),p=[l];function o(r,c,y,d,i,E){return t(),n("div",null,p)}const h=s(e,[["render",o]]);export{g as __pageData,h as default};
