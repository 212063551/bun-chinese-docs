import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.9b1e551d.js";const g=JSON.parse('{"title":"作用域和注册表","description":"","frontmatter":{},"headers":[],"relativePath":"docs/install/registries.md","filePath":"docs/install/registries.md","lastUpdated":1696865530000}'),p={name:"docs/install/registries.md"},l=o(`<h1 id="作用域和注册表" tabindex="-1">作用域和注册表 <a class="header-anchor" href="#作用域和注册表" aria-label="Permalink to &quot;作用域和注册表&quot;">​</a></h1><p>默认注册表是 registry.npmjs.org。可以在 bunfig.toml 中全局配置：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[install]</span></span>
<span class="line"><span style="color:#6A737D;"># 将默认注册表设置为字符串</span></span>
<span class="line"><span style="color:#B392F0;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://registry.npmjs.org&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置令牌</span></span>
<span class="line"><span style="color:#B392F0;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://registry.npmjs.org&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;123456&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 设置用户名/密码</span></span>
<span class="line"><span style="color:#B392F0;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://username:password@registry.npmjs.org&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[install]</span></span>
<span class="line"><span style="color:#6A737D;"># 将默认注册表设置为字符串</span></span>
<span class="line"><span style="color:#6F42C1;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://registry.npmjs.org&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置令牌</span></span>
<span class="line"><span style="color:#6F42C1;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://registry.npmjs.org&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;123456&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"><span style="color:#6A737D;"># 设置用户名/密码</span></span>
<span class="line"><span style="color:#6F42C1;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://username:password@registry.npmjs.org&quot;</span></span></code></pre></div><p>要配置范围为特定组织的专用注册表，请执行以下操作：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[install.scopes]</span></span>
<span class="line"><span style="color:#6A737D;"># 字符串形式的注册表</span></span>
<span class="line"><span style="color:#B392F0;">&quot;@myorg1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://username:password@registry.myorg.com/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用用户名/密码的注册表</span></span>
<span class="line"><span style="color:#6A737D;"># 您可以引用环境变量</span></span>
<span class="line"><span style="color:#B392F0;">&quot;@myorg2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">username</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;myusername&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">password</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$NPM_PASS</span><span style="color:#9ECBFF;">&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://registry.myorg.com/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 具有令牌的注册表</span></span>
<span class="line"><span style="color:#B392F0;">&quot;@myorg3&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$npm_token</span><span style="color:#9ECBFF;">&quot;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://registry.myorg.com/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[install.scopes]</span></span>
<span class="line"><span style="color:#6A737D;"># 字符串形式的注册表</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;@myorg1&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://username:password@registry.myorg.com/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用用户名/密码的注册表</span></span>
<span class="line"><span style="color:#6A737D;"># 您可以引用环境变量</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;@myorg2&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">username</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;myusername&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$NPM_PASS</span><span style="color:#032F62;">&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://registry.myorg.com/&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 具有令牌的注册表</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;@myorg3&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$npm_token</span><span style="color:#032F62;">&quot;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://registry.myorg.com/&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">}</span></span></code></pre></div><h2 id="npmrc" tabindex="-1"><code>.npmrc</code> <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;\`.npmrc\`&quot;">​</a></h2><p>Bun 当前不读取.npmrc 文件。对于私有注册表，按照上面的说明将注册表配置迁移到 bunfig.toml。</p>`,7),t=[l];function e(r,c,y,E,F,i){return n(),a("div",null,t)}const m=s(p,[["render",e]]);export{g as __pageData,m as default};