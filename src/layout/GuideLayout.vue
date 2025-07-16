<script setup>
	import '@/assets/css/guide.scss';
	import Header from './Header.vue';
</script>

<template>
	<v-app>
		<Header />
		<v-main class="guideLayout">
			<router-view />
		</v-main>
	</v-app>
</template>