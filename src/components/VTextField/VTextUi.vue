<template>

	<div :class="mergedClass">
		<v-input
			:model-value = "modelValue"
			:rules = "rules"
			:error-messages="errorMessages"
			:disabled="disabled"
		>
		<template #default="{props:vInputProps}">
			<div class="inpField">
				<template v-if="label">
					<div class="label">
						<label :for="inpID">{{label}}</label>
					</div>
					<div class="placeholder">{{placeholder}}</div>
				</template>
				<div class="inp">
					<input
						v-bind="{...vInputProps, ...mergedAttrs}"
						:id="inpID"
					/>
				</div>
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
})

// 컴포넌트 전달 받는 속성 선언
const props = defineProps({
	modelValue : String,
	class : [String, Array, Object],
	label : String,
	placeholder: String,
	rules : Array,
	disabled: String,
	errorMessages : [String, Array],
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

