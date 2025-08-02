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
					@focus="onUpdateFocused(true)"
					@blur="onUpdateFocused(false)"
					@input="onInputChange"
				/>
			</div>
		</div>
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
	errorMessages : [String, Array],
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

// 임의 랜덤 id 생성
const inpID = ref(`input-${uuidv4()}`);

// 클래스 병합
const mergedClass = computed(() => {
  return [
		'inpTxtItems',
		...(Array.isArray(props.class) ? props.class : [props.class]),
		isFocus.value && 'isFocused',
		hasVal.value && 'isVal',
	]
})

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

