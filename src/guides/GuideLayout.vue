<template>
	<v-app>
		<Header />
		<v-main>
			<!--
				v-container :
				- 중앙 정렬 + max-width (기본)	<v-container>
				- 전체 너비 사용	<v-container fluid>
				- 여백 넣기	class="pa-4" {pa: 위아래좌우 전체,pt:탑 , pl:왼쪽 , pr:오른쪽 , pb:바텀 , px:좌우 , py:위아래}
				- 배경색	class="bg-grey-lighten4"
				- 반응형 레이아웃 구성	v-container > v-row > v-col 구조
			-->
			<v-container class="guideLayout pa-20 pb-50">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup>
	import './css/guide.scss';
	import Header from '@/layout/Header.vue';
</script>