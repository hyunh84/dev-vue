<template>

	<v-select
		:class="mergedClass"
		:modelValue="modelValue"
		:label="label"
		:items="items"
		@update:modelValue="onUpdateModelvalue"
	></v-select>

</template>

<script setup>
import {computed, ref, watch} from 'vue';

const emit = defineEmits(['update:modelValue']);

const hasVal = ref(false);

// 속성 선언
const props = defineProps({
	modelValue : String,
	class:[String, Array],
	label: String,
	items: Array,
});

// 클래스 병합
const mergedClass = computed(() => {
  return [
		'slctItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
		hasVal.value && 'v-input--value',
	]
})

// data update
const onUpdateModelvalue = (v)=>{
	if(v) {
		hasVal.value = true;
	} else {
		hasVal.value = false;
	}

	emit('update:modelValue', v);
}

watch(()=>props.modelValue, (v)=>{
	if(v) {
		hasVal.value = true;
	} else {
		hasVal.value = false;
	}
}, {immediate : true});

</script>