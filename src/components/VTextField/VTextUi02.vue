<template>

	<div :class="mergedClass" ref="wrapEl">
		<div class="inpField">
			<template v-if="label">
				<div class="placeholder" aria-hidden="false" tabindex="0" ref="placeholderEl" @focus="focusPlaceholder"><span>{{placeholder}}</span></div>
				<div class="label" aria-hidden="true" ref="labelEl">
					<label :for="inpID">{{label}}</label>
				</div>
			</template>
			<v-text-field
				:id="inpID"
				:model-value="modelValue"
				ref="inpEl"
				variant="plain"
				v-bind="inputAttrs"
				@update:focused="onUpdateFocused"
				@update:modelValue="onInputChange"
			/>
		</div>
	</div>

</template>

<script setup>
import {computed, watch, ref} from 'vue';
import { v4 as uuidv4 } from 'uuid'

const emit = defineEmits(['update:focused', 'update:modelValue']);

// 임의 랜덤 id 생성
const inpID = ref(`input-${uuidv4()}`);

// element selector
const wrapEl = ref(null);
const labelEl = ref(null);
const inpEl = ref(null);
const placeholderEl = ref(null);

const txtVal = ref('');

// 컴포넌트 전달 받는 속성 선언
const props = defineProps({
	modelValue : String,
	class : [String, Array, Object],
	label : String,
	placeholder: String,
	title : String,
	autocomplete : {
		type : String,
		default : 'off'
	}
});

// VTextField전달 속성 이외의 속성 제거
const inputAttrs = computed(() => {
  const { label, class: _, ...rest } = props
  return rest
})

// 클래스 병합
const mergedClass = computed(() => {
  return ['vueTxtField', ...(Array.isArray(props.class) ? props.class : [props.class])]
})

// focus placeholder
const focusPlaceholder = () => {
	let thisInp = inpEl.value;

	focusUI(true);
	thisInp.focus();
}

// update foucsed
const onUpdateFocused = (val)=>{
	focusUI(val);
	// 외부로 이벤트 전달
	emit('update:focused', val)
}

// update input change
const onInputChange = (val)=> {
	let thisWrap = wrapEl.value;

	txtVal.value = val;

	if(val === '') {
		if(thisWrap.classList.contains('isVal')) thisWrap.classList.remove('isVal');
	}else{
		if(!thisWrap.classList.contains('isVal')) thisWrap.classList.add('isVal');
	}
	// 외부로 값 전달
	emit('update:modelValue', val)
}

// input focusout ui set
const focusUI = (isFocus) => {
	let thisWrap = wrapEl.value;
	let thisLabel = labelEl.value;
	let thisPlaceholder = placeholderEl.value;

	if(isFocus) {
		thisWrap.classList.add('isFocused');
		thisPlaceholder.setAttribute('aria-hidden', true);
		thisPlaceholder.removeAttribute('tabindex');
		thisLabel.setAttribute('aria-hidden', false);
	} else {
		thisWrap.classList.remove('isFocused');
		console.log(`!txtVal.value ------- ${!txtVal.value}`);
		if(!txtVal.value) {
			thisPlaceholder.setAttribute('aria-hidden', false);
			thisPlaceholder.setAttribute('tabindex', '0');
			thisLabel.setAttribute('aria-hidden', true);
		}
	}

}
</script>

