<template>

	<v-text-field
		v-bind="$attrs"
		:model-value="modelValue"
		:class="[...mergedClass, hasVal && 'v-input--value']"
		@update:focused="onUpdateFocused"
		@update:modelValue="onUpdateModelValue"
	></v-text-field>

</template>

<script setup>
import {computed, ref, nextTick, watch} from 'vue';

const emit = defineEmits(['update:focused', 'update:modelValue']);

defineOptions({ inheritAttrs: false })
// 컴포넌트 속성 정의
const props = defineProps({
	modelValue : String,
	class : [String, Array, Object],
});

const hasVal = ref(false);

// 클래스 병합
const mergedClass = computed(() => {
  return [
		'inpTxtField',
		...(Array.isArray(props.class) ? props.class : [props.class]),
	]
})

// 뷰티파이 텍스트 필드 이벤트
const onUpdateFocused = (v)=>{
	emit('update:focused', v);
}

// input value change
const onUpdateModelValue = (v)=>{
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

