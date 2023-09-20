import DefaultTheme from 'vitepress/theme';
import Link from '../../components/link.vue';
import './styles/global.css';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.component('Link', Link);
	},
};
