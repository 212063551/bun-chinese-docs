<template>
	<a :href="data.href" ref="root" class="bun-link">
		{{ data.title }}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="18"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
				clip-rule="evenodd"
			></path>
		</svg>
	</a>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';

export default {
	setup() {
		const root = ref(null);

		const data = reactive({
			title: '',
			href: '',
		});
		onMounted(() => {
			data.title = root.value.title;
			data.href = root.value.href;
		});

		return {
			root,
			data,
		};
	},
};
</script>

<style scoped>
.bun-link {
	display: flex;
	justify-content: space-between;
	border-radius: 5px;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	border: 1px solid #3333;
	cursor: pointer;
	margin-top: 10px;
	margin-right: 10px;
	text-decoration: none !important;
	color: initial !important;
}

.bun-link:hover {
	background: #f3f4f6;
}
</style>
