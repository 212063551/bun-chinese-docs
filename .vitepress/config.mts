import { defineConfig } from 'vitepress';

export default defineConfig({
	base: '/bun-chinese-docs/',
	title: 'Bun 中文文档',
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
			{ text: '文档', link: '/docs/intro/installation' },
			{ text: '指南', link: '/guides/index.md' },
			{ text: '更新日志', link: '/logs/index.md' },
			{ text: '英文官网', link: 'https://bun.sh' },
			{ text: '进度', link: '/README.md' },
			{ text: 'v1.0.2', link: '' },
		],
		sidebar: [
			{
				text: '介绍',
				items: [
					{ text: '什么是Bun？', link: '/docs/intro/index.md' },
					{ text: '安装', link: '/docs/intro/installation.md' },
					{ text: '快速入门', link: '/docs/intro/quickstart.md' },
					{ text: 'TypeScript', link: '/docs/intro/typescript.md' },
					{ text: '模板', link: '/docs/intro/templates.md' },
				],
			},
			{
				text: '运行时',
				items: [
					{ text: 'bun run', link: '/docs/cli/run.md' },
					{ text: '文件类型', link: '/docs/runtime/loaders.md' },
					{ text: 'TypeScript', link: '/docs/runtime/typescript.md' },
					{ text: 'JSX', link: '/docs/runtime/jsx.md' },
					{ text: '环境变量', link: '/docs/runtime/env.md' },
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
	},
});
