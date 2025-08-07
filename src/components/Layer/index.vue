<template>

	<slot name="openBtn" />

	<template>
		<VLayerUi
			:class="mergedClass"
			:title="title"
		>
			<slot />
		</VLayerUi>
	</template>

</template>

<script setup>
import {computed, ref, useSlots, onMounted} from 'vue';

// 속성 정의
const props = defineProps({
	modelValue: Boolean,
	class: [String, Array],
	title: String,
	hideHead: {
		type: Boolean,
		default: false,
	}
});

const mergedClass =  computed(() => {
  return [
		'slctItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
	]
})

const slots = useSlots();

</script>