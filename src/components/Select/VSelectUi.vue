<template>

	<div :class="mergedClass">
		<VLayer
			class="bottomSheet"
			:title="!optTit ? title : optTit"
			:hideHead="!optTit ? true : false"
		>
			<template #openBtn={props}>
				<div
					class="txtSelected"
					role="button"
					tabindex="0"
					:title="title"
					:aria-label="title"
					@click="props.open"
				>
					<div class="default">선택해주세요</div>
				</div>
			</template>

			<div class="selectListBox">
				<ul>
					<li v-for="(item, index) in items" :key="index">
						<div>{{ item }}</div>
					</li>
				</ul>
			</div>
		</VLayer>
	</div>
</template>

<script setup>
import {computed, ref, watch, useSlots, onMounted} from 'vue';

const props = defineProps({
	modelValue: String,
	class: [String, Array],
	title: String,
	optTit: String,
	items: Array,
});

const slots = useSlots();

const layerOpt = ref(false);

const mergedClass =  computed(() => {
  return [
		'slctItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
	]
})

</script>