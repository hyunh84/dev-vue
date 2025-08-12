<template>
	<teleport to="#layerAreaWrap">
		<article :class="class">
			<div class="dim" aria-hidden="true" @click="closeFn"></div>
			<div
				class="layerBox"
				@transitionend="onTransitionend"
			>
				<div :class="['layerHeader', props.hideHead && 'sr-only']">
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

const emit = defineEmits(['transitionend', 'evtClose']);

// 속성 정의
const props = defineProps({
	modelValue: Boolean,
	class: [String, Array],
	title: String,
	hideHead: Boolean,
	hideClose: Boolean,
	closeFn: Function,
});

// 슬롯
const slots = useSlots();

const onTransitionend = (e)=> {
	emit('transitionend', e);
}

const closeFn = (e)=>{
	emit('evtClose', e);

}

</script>