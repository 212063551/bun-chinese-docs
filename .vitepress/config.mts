import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Bun 中文文档',
	lang: 'zh-CN',
	description: '一个非官方的 Bun 中文文档',
	lastUpdated: true,
	ignoreDeadLinks: true,
	themeConfig: {
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '退出搜索',
						},
					},
				},
			},
		},
		footer: {
			message: '本文档遵循 MIT 协议',
			copyright: 'Made with ❤ by Rune ',
		},
		editLink: {
			pattern: 'https://github.com/212063551/bun-chinese-docs/blob/main/:path',
			text: '在 GitHub 上编辑此页面',
		},
		nav: [
			{ text: '文档', link: '/docs/installation' },
			{ text: '指南', link: '/guides/index.md' },
			{ text: '更新日志', link: '/logs/index.md' },
			{ text: '英文官网', link: 'https://bun.sh' },
			{ text: '进度', link: '/README.md' },
			{ text: 'v1.0.2', link: '' },
		],
		sidebar: [
			{
				text: '介绍',
				collapsed: true,
				items: [
					{ text: '什么是Bun？', link: '/docs/index.md' },
					{ text: '安装', link: '/docs/installation.md' },
					{ text: '快速入门', link: '/docs/quickstart.md' },
					{ text: 'TypeScript', link: '/docs/typescript.md' },
					{ text: '模板', link: '/docs/templates.md' },
				],
			},
			{
				text: '运行时',
				collapsed: true,
				items: [
					{ text: 'bun run', link: '/docs/cli/run.md' },
					{ text: '文件类型', link: '/docs/runtime/loaders.md' },
					{ text: 'TypeScript', link: '/docs/runtime/typescript.md' },
					{ text: 'JSX', link: '/docs/runtime/jsx.md' },
					{ text: '环境变量', link: '/docs/runtime/env.md' },
					{ text: 'Bun APIs', link: '/docs/runtime/bun-apis.md' },
					{ text: 'Web APIs', link: '/docs/runtime/web-apis.md' },
					{
						text: 'Bun 对 Node.js 的兼容性',
						link: '/docs/runtime/nodejs-apis.md',
					},
					{
						text: 'Plugins （ 插件 ）',
						link: '/docs/runtime/plugins.md',
					},
					{
						text: '监视模式',
						link: '/docs/runtime/hot.md',
					},
					{ text: '模块解析', link: '/docs/runtime/modules.md' },
					{ text: '自动安装', link: '/docs/runtime/autoimport.md' },
					{
						text: 'Bun 配置文件（ bunfig.toml ）',
						link: '/docs/runtime/bunfig.md',
					},
					{
						text: 'Bun 调试器（ Debugger ）',
						link: '/docs/runtime/debugger.md',
					},
				],
			},
			{
				text: '包管理器',
				collapsed: true,
				items: [
					{ text: 'bun安装', link: '/docs/cli/install.md' },
					{ text: '全局缓存', link: '/docs/install/cache.md' },
					{ text: '工作区', link: '/docs/install/workspaces.md' },
				],
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/212063551/bun-chinese-docs' },
		],
		lastUpdatedText: '最后更新',
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		outlineTitle: '本页',
		sidebarMenuLabel: '目录',
		returnToTopLabel: '返回顶部',
		darkModeSwitchLabel: '外观',
	},
});
