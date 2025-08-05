<script setup>

</script>

<template>
	<div class="guideTit">Form Guide page</div>

	<div class="guideTit02">Input text</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VTxtField
					v-model="exVuetifyTxt01"
					label="이름"
					placeholder="이름을 입력해주세요"
					autocomplate="false"
					@update:focused="exVtfFocused01"
					@update:modelValue="exVtfValue01"
				/>
                <!-- <v-text-field class="inpTxtField" clearable label="이름"></v-text-field> -->
			</v-col>
			<v-col col="auto">
				<VTxtField
					v-model="exVuetifyTxt02"
					label="이름"
					placeholder="이름을 입력해주세요"
					clearable
					:rules="[
						v => !!v || '이름을 입력해주세요.',
						v => v.length >= 2 || '이름은 최소 2자 이상이어야 합니다.'
					]"
					@update:focused="exVtfFocused02"
					@update:modelValue="exVtfValue02"
				/>
                <!-- <v-text-field class="inpTxtField" clearable label="이름"></v-text-field> -->
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
                <VTextUi
					ref="exTextRef01"
					v-model="exText01"
					title="이름을 입력해주세요"
					guide="필수 입력 항목입니다."
					:guideMessages="'<strong>가이드</strong> 문구 추가'"
					@update:focused="focusExText01"
					@update:modelValue="updateExText01"
				/>
			</v-col>
			<v-col col="auto">
                <VTextUi
					label="이름"
					v-model="exText02"
					placeholder='이름을 입력해주세요'
					title='이름을 입력해주세요'
					:guideMessages="[
						'가이드 문구 추가',
						'<strong>가이드</strong> 문구 추가 : 2'
					]"
					@update:focused="focusExText02"
					@update:modelValue="updateExText02"
				/>
			</v-col>
			<v-col col="auto">
                <VTextUi
					label="이름"
					v-model="exText03"
					placeholder='이름을 입력해주세요'
					title='이름을 입력해주세요'
					:guideMessages="[
						'가이드 문구 추가',
						'<strong>가이드</strong> 문구 추가 : 2'
					]"
					:rules="[
						v => !!v || '이름을 입력해주세요.',
						v => v.length >= 2 || '이름은 최소 2자 이상이어야 합니다.'
					]"
					@update:focused="focusExText03"
					@update:modelValue="updateExText03"
				/>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VfSelect
					label="선택"
					v-model="exSlct01"
					:items="exSlctOpt01"
					@update:modelValue="onUpdateExSlct01"
				/>
			</v-col>
			<v-col col="auto">
				<VfSelect
					label="선택"
					v-model="exSlct02"
					:items="exSlctOpt02"
					@update:modelValue="onUpdateExSlct02"
				/>
			</v-col>
		</v-row>
	</v-container>

</template>

<script setup>
import {watch, ref, onMounted} from 'vue';

const exVuetifyTxt01 = ref('초기값 셋팅');
const exVtfFocused01 = (v)=>{
	console.log('exVtfFocused01 ============ ', v);
}
const exVtfValue01 = (v)=>{
	console.log('exVtfValue01 ============ ', v);

}

const exVuetifyTxt02 = ref('');
const exVtfFocused02 = (v)=>{
	console.log('exVtfFocused02 ============ ', v);
}
const exVtfValue02 = (v)=>{
	console.log('exVtfValue02 ============ ', v);

}


const exTextRef01 = ref(null);
const exText01 = ref('초기값 입력 방법');

const updateExText01 = (v)=>{
	console.log(v);
}

const focusExText01 = (isFocus)=>{
	console.log('isFocus ========= ', isFocus);
}

const exText02 = ref('');
watch(exText02, (val)=>{
	console.log('exTexxt02 ===== ', val);
});

const updateExText02 = (v)=>{
	console.log(v);
}

const focusExText02 = (isFocus)=>{
	console.log('isFocus ========= ', isFocus);
}

const exText03 = ref('');
watch(exText03, (val)=>{
	console.log('exTexxt02 ===== ', val);
});

const updateExText03 = (v)=>{
	console.log(v);
}

const focusExText03 = (isFocus)=>{
	console.log('isFocus ========= ', isFocus);
}


const exSlct01 = ref(null);
const exSlctOpt01=['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'];
const onUpdateExSlct01 = (v)=>{
	console.log('onUpdateExSlct01 ===== ', v);
}
watch(exSlct01, (v)=>{
	console.log('onUpdateExSlct01 watch ===== ', v);
});

const exSlct02 = ref('Wyoming');
const exSlctOpt02=['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'];
const onUpdateExSlct02 = (v)=>{
	console.log('onUpdateExSlct02 ===== ', v);
}
watch(exSlct02, (v)=>{
	console.log('onUpdateExSlct02 watch ===== ', v);
});

onMounted(()=>{
	exTextRef01.value.focus();
});
</script>

