<template>

	<slot name="openBtn" :props="btnOpenProps" />

	<template v-if="unref(isOpen)">
		<VLayerUi
			:class="mergedClass"
			:title="title"
			:hideHead="hideHead"
			:closeFn="closePopup"
		>
			<slot />

			<template #close>
				<button type="button" class="layerCloseBtn"><span class="sr-only">닫기</span></button>
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
		'layerWrap',
		...(Array.isArray(props.class) ? props.class : [props.class]),
		unref(isShow) && 'isOpen',
	]
})

const slots = useSlots();
const isOpen = ref(false);
const isShow = ref(false);

const openPopup = ()=>{
	console.log('openPopup ======= ');
	createLayerZone();
	isOpen.value = true;
	el.setAttribute('aria-hidden', 'false');

	nextTick(()=>{
		setTimeout(()=>{
			if(isOpen.value) {
				isShow.value = true
			}
		}, 10);
	});
}

const closePopup = ()=> {
	console.log('closePopup ======= ');
	isShow.value = false;

	nextTick(()=> {
		setTimeout(()=>{
			if(isOpen.value) {
				isOpen.value = false;
				el.setAttribute('aria-hidden', 'true');
			}
		}, 300);
	});

}

const btnOpenProps = {
	open : openPopup,
}

const createLayerZone = ()=> {
	if (!document.getElementById(popupLayerId)) {
		document.body.appendChild(el);
	}
}

</script>