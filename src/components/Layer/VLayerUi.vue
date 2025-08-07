<template>
	<teleport to="#layerAreaWrap">
		<article :class="class">
			<div class="layerBox">
				<div :class="['layerHeader', props.hideHead && 'blind']">
					<h1 class="layerTitle">{{title}}</h1>
				</div>

				<div class="layerBody">
					<div class="layerConts">
						<slot />
					</div>
				</div>

				<button type="button" class="layerCloseBtn"><span class="sr-only">닫기</span></button>
			</div>
		</article>
	</teleport>
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

// 슬롯
const slots = useSlots();

</script>