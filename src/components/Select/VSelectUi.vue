<template>

	<VLayer
		v-model="layerOpt"
		class="bottomSheet"
		title="template"
	>
		<template #openBtn>
			<div :class="mergedClass">
				<div
					class="txtSelected"
					role="button"
					tabindex="0"
					:title="title"
					:aria-label="title"
					@click="onClickToggle"
				>
					<div class="default">선택해주세요</div>
				</div>
			</div>
		</template>

		<div>layer Contents</div>
	</VLayer>
</template>

<script setup>
import {computed, ref, watch} from 'vue';

const props = defineProps({
	modelValue: String,
	class: [String, Array],
	title: String,
});

const layerOpt = ref(false);

const mergedClass =  computed(() => {
  return [
		'slctItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
	]
})

// open/close options
const onClickToggle = ()=> {
	console.log('onClickToggle ========== ');
	if(!layerOpt.value) layerOpt.value = true;
}

</script>