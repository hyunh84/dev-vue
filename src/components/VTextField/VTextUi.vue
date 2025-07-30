<template>

	<div :class="mergedClass">
		<v-input
		:model-value = "modelValue"
		:rules = "rules"
		:error-messages="errorMessages"
		>
		<template #default="{props:vInputProps}">
			<div class="inpField">
				<template v-if="label">
					<label :for="inpID">{{label}}</label>
				</template>
				<span class="inp">
					<input
						v-bind="{...vInputProps, ...mergedAttrs}"
						:id="inpID"
					/>
				</span>
			</div>
			</template>
		</v-input>
	</div>

</template>

<script setup>
import {computed, watch, ref} from 'vue';
import { v4 as uuidv4 } from 'uuid'

// input default attrs
const defaultAttrs = ref({
  type: 'text',
  autocomplete: 'off',
//   placeholder: "입력해주세요"
})

// 컴포넌트 전달 받는 속성 선언
const props = defineProps({
	modelValue : String,
	label : String,
	rules : Array,
	errorMessages : [String, Array],
	class : [String, Array, Object],
	inputAttrs: {
		type: Object,
	}
});

// 클래스 병합
const mergedClass = computed(() => {
  return ['inpTxtItems', ...(Array.isArray(props.class) ? props.class : [props.class])]
})

// 임의 랜덤 id 생성
const inpID = ref(`input-${uuidv4()}`);

// input attr 병합
const mergedAttrs = computed(()=>{
	return {
		...defaultAttrs.value,
		...props.inputAttrs
	}
});

</script>

