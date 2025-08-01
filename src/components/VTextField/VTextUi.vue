<template>

	<div :class="mergedClass" ref="wrapEl">
		<div class="inpField">
			<template v-if="label">
				<div class="placeholder" aria-hidden="false" tabindex="0" ref="placeholderEl" @focus="focusPlaceholder"><span>{{placeholder}}</span></div>
				<div class="label" aria-hidden="true" ref="labelEl">
					<label :for="inpID">{{label}}</label>
				</div>
			</template>
			<div class="inp">
				<input
					ref="inpEl"
					:model-value="txtVal"
					:id="inpID"
					:type="type"
					:placeholder = "placeholder"
					@focus="onUpdateFocused(true)"
					@blur="onUpdateFocused(false)"
					@input="onInputChange"
				/>
			</div>
		</div>
	</div>

</template>

<script setup>
import {computed, watch, ref, onMounted} from 'vue';
import { v4 as uuidv4 } from 'uuid'

// element Selector
const wrapEl = ref(null);
const inpEl = ref(null);
const labelEl = ref(null);
const placeholderEl = ref(null);

// 컴포넌트 전달 받는 속성 선언
const props = defineProps({
	modelValue : String,
	class : [String, Array, Object],
	label : String,
	placeholder: String,
	disabled: Boolean,

	placeholder: String,
	errorMessages : [String, Array],
	type: {
		type: String,
		default: 'text'
	},
});

const emit = defineEmits(['update:focused', 'update:modelValue']);

// 외부에 내부 변수/함수 전달
defineExpose({
	focus : ()=>{
		inpEl.value.focus();
	},
	setVal: (val)=> {
		txtVal.value = val;
  		// emit('update:modelValue', val);
	}
});

// 임의 랜덤 id 생성
const inpID = ref(`input-${uuidv4()}`);

// 내부 input 값
const txtVal = ref(props.modelValue ?? '');  // 초기값 세팅

// 값 유무시
const hasValue = computed(() => txtVal.value !== '');
const isFocused = ref(false);

// Dom 마운트
onMounted(()=>{
	if(props.modelValue) {
		wrapEl.value.classList.add('isVal');
	}
});


// input default attrs
const defaultAttrs = ref({
  type: 'text',
  autocomplete: 'off',
})

// 클래스 병합
const mergedClass = computed(() => {
console.log('mergedClass ===== ')
  return ['inpTxtItems', ...(Array.isArray(props.class) ? props.class : [props.class]), {isVal : hasValue, isFocused : isFocused.value}]
})

// input attr 병합
const mergedAttrs = computed(()=>{
	return {
		...defaultAttrs.value,
		...props.inputAttrs
	}
});

// focus placeholder function
const focusPlaceholder = (evt) => {
	let thisInp = inpEl.value;

	focusUI(true);
	thisInp.focus();
}

// 포커스
const onUpdateFocused = (val)=> {
	console.log('onUpdateFocused');
	focusUI(val);
	emit('update:focused', val);
}

// input change
const onInputChange = (e)=>{
	const newVal = e.target.value
	if (newVal !== props.modelValue) {
		classInpValue(newVal);
		emit('update:modelValue', newVal)
	}
	txtVal.value = newVal
}

// input focusout ui set
const focusUI = (isFocus) => {
	let thisWrap = wrapEl.value;
	let thisLabel = labelEl.value;
	let thisPlaceholder = placeholderEl.value;


	if(isFocus) {
		isFocused.value = true;
		if(thisLabel !== null) {
			thisPlaceholder.setAttribute('aria-hidden', true);
			thisPlaceholder.removeAttribute('tabindex');
			thisLabel.setAttribute('aria-hidden', false);
		}
	} else {
		isFocused.value = false;
		if(thisLabel !== null && !txtVal.value) {
			thisPlaceholder.setAttribute('aria-hidden', false);
			thisPlaceholder.setAttribute('tabindex', '0');
			thisLabel.setAttribute('aria-hidden', true);
		}
	}

}

</script>

