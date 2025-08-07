<template>

	<div
		:class="mergedClass"
	>
		<div class="inpField">
			<template v-if="label">
				<div
					class="placeholder"
					:aria-hidden="isFocus || hasVal"
					:tabindex="(isFocus || hasVal) ? -1 : 0"
					@focus="onPlaceFocus"
				>
					<span>{{placeholder}}</span>
				</div>
				<div class="label" :aria-hidden="(isFocus || hasVal) ? false : true">
					<label :for="inpID">{{label}}</label>
				</div>
			</template>
			<div class="inp">
				<input
					ref="inpEl"
					:value="inpVal"
					:id="inpID"
					:type="type"
					:placeholder = "placeholder"
					:title="title"
					:aria-label="title"
					@focus="onUpdateFocused(true)"
					@blur="onUpdateFocused(false)"
					@input="onInputChange"
				/>
			</div>
		</div>

		<template v-if="hasError">
			<div class="inpGuide error" v-for="(errorTxt, idx) in errorMessagesArray" :key="idx" v-html="errorTxt"></div>
		</template>
		<template v-if="guideMessagesArray.length">
			<div class="inpGuide" v-for="(guideTxt, idx) in guideMessagesArray" :key="idx" v-html="guideTxt"></div>
		</template>
	</div>

</template>

<script setup>
import {computed, ref, nextTick, watch} from 'vue';
import { v4 as uuidv4 } from 'uuid'

const emit = defineEmits(['update:focused', 'update:modelValue']);

// 컴포넌트 전달 받는 속성 선언
const props = defineProps({
	modelValue : String,
	class : [String, Array, Object],
	label : String,
	placeholder: String,
	disabled: Boolean,
	placeholder: String,
	title: String,
	guideMessages : [String, Array],
	rules: {
		type: Array,
		default: () => [],
	},
	error: {
		type: Boolean,
		default: false,
	},
	errorMessages: {
		type: [String, Array],
		default: () => [],
	},
	type: {
		type: String,
		default: 'text'
	},
});

// 외부에 내부 변수/함수 전달
defineExpose({
	focus : ()=>{
		inpEl.value.focus();
	},
	setVal : (val)=>{
		valChangeFn(val);
	}
});

// element
const inpEl = ref(null);

// input state value
const inpVal = ref('');
const isFocus = ref(false);
const hasVal = ref(false);
const isError = ref(false);

// 임의 랜덤 id 생성
const inpID = ref(`input-${uuidv4()}`);

// 클래스 병합
const mergedClass = computed(() => {
  return [
		'inpTxtItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
		isFocus.value && 'isFocused',
		hasVal.value && 'isVal',
		hasError.value && 'isError',
	]
})

// 가이드 문구 배열
const guideMessagesArray = computed(() =>
  Array.isArray(props.guideMessages)
    ? props.guideMessages
    : props.guideMessages
    ? [props.guideMessages]
    : []
);

// text field error
const internalErrors = computed(() => {
  if (!props.rules.length) return [];

  return props.rules
    .map(rule => rule(props.modelValue))
    .filter(r => r !== true);
});

const errorMessagesArray = computed(() => {
  const internal = internalErrors.value ?? [];

  if(!isError.value) return [];

  if (internal.length > 0) return internal;

  const val = props.errorMessages;
  return Array.isArray(val)
    ? val
    : typeof val === 'string' && val.trim() !== ''
    ? [val]
    : [];
});

const hasError = computed(() => {
  return props.error || (isError.value && errorMessagesArray.value.length > 0);
});

// placehoder in focus function
const onPlaceFocus = async ()=>{
	focusSetFn(true);

	await nextTick();
	inpEl.value.focus();
}

// input focuse function
const onUpdateFocused = (v)=>{
	focusSetFn(v);
	emit('update:focused', v);

	if(!v) {
		isError.value = true;
	}
}

// focus property setting
const focusSetFn = (v)=>{
	isFocus.value = v;
}

// input change value
const onInputChange = (e)=>{
	var val = e.target.value;

	valChangeFn(val);
}

const valChangeFn = (val)=>{
	inpVal.value = val;

	if(isError.value) isError.value = false;

	if(!val) {
		hasVal.value = false;
	} else {
		hasVal.value = true;
	}

	emit('update:modelValue', val);
}


watch(()=>props.modelValue, (v)=>{
	valChangeFn(v)
}, {immediate : true});

</script>

