<template>

	<slot name="openBtn" :props="btnOpenProps" />

	<template v-if="unref(isCreateDom)">
		<VLayerUi
			:class="mergedClass"
			:title="title"
			:hideHead="hideHead"
			@evtClose="closePopup"
			@transitionend="onTransitionend"
		>
			<slot />

			<template v-if="!slots.close && !hideClose" #close>
				<button type="button" class="layerCloseBtn" @click="closePopup">
					<SvgIco icon="close" />
					<span class="sr-only">닫기</span>
				</button>
			</template>
		</VLayerUi>
	</template>

</template>

<script setup>
import {computed, ref, useSlots, unref, nextTick} from 'vue';

const popupLayerId = 'layerAreaWrap';
const el = document.createElement('div');
el.id = popupLayerId;
el.setAttribute('aria-hidden', 'true');

const emit = defineEmits(['transitionend']);

// 속성 정의
const props = defineProps({
	class: [String, Array],
	title: String,
	hideHead: {
		type: Boolean,
		default: false,
	},
	hideClose: {
		type: Boolean,
		default: false,
	},
	openAfterFn: Function,
});

const mergedClass =  computed(() => {
  return [
		'layerWrap',
		...(Array.isArray(props.class) ? props.class : [props.class]),
		unref(isOpen) && 'isOpen',
	]
})

const slots = useSlots();
const isCreateDom = ref(false);
const isOpen = ref(false);

const openPopup = ()=>{
	// console.log('openPopup ======= ');
	createLayerZone();
	isCreateDom.value = true;
	el.setAttribute('aria-hidden', 'false');

	nextTick(()=>{
		setTimeout(()=>{
			isOpen.value = true
		}, 10);
	});
}

const closePopup = ()=> {
	// console.log('closePopup ======= ');
	isOpen.value = false;
}

const btnOpenProps = {
	open : openPopup,
}

const createLayerZone = ()=> {
	if (!document.getElementById(popupLayerId)) {
		document.body.appendChild(el);
	}
}

const onTransitionend = (e)=>{
	const val = {
		evt : e,
		isOpen : isOpen.value,
	}

	if(!isOpen.value) {
		isCreateDom.value = false;
		el.setAttribute('aria-hidden', 'true');
	}
	emit('transitionend', val);
}

</script>