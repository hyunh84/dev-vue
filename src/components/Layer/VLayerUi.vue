<template>
	<teleport to="#layerAreaWrap">
		<article :class="class">
			<div class="dim" aria-hidden="true" @click="closeFn"></div>
			<div class="layerBox">
				<div :class="['layerHeader', props.hideHead && 'blind']">
					<h1 class="layerTitle" v-html="title"></h1>
				</div>

				<div class="layerBody">
					<div class="layerConts">
							<slot />
					</div>
				</div>

				<template v-if="slots.close">
					<slot name="close" />
				</template>
			</div>
		</article>
	</teleport>
</template>

<script setup>
import { useSlots} from 'vue';

// 속성 정의
const props = defineProps({
	modelValue: Boolean,
	class: [String, Array],
	title: String,
	hideHead: Boolean,
	closeFn: Function,
});

// 슬롯
const slots = useSlots();

</script>