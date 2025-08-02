<script setup>

</script>

<template>
	<div class="guideTit">Form Guide page</div>

	<div class="guideTit02">Input text</div>
	<v-container>
		<v-row>
			<v-col col="auto">
                <v-text-field class="inpTxtField" clearable label="이름"></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
                <v-text-field class="inpTxtField" clearable label="이름" placeholder="이름을 입력해주세요"></v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
                <VTextUi
					ref="exTextRef01"
					v-model="exText01"
					title="이름을 입력해주세요"
					guide="필수 입력 항목입니다."
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
					guide="[
						'필수 입력 항목입니다.',
						'필수 입력 항목입니다.2'
					]"
					@update:focused="focusExText02"
					@update:modelValue="updateExText02"
				/>
			</v-col>
			<v-col col="auto">
                <VTextUi02
					label="이름"
					placeholder='이름을 입력해주세요'
					title='이름을 입력해주세요'
				/>
			</v-col>
		</v-row>
	</v-container>

</template>

<script setup>
import {watch, ref, onMounted} from 'vue';

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


onMounted(()=>{
	exTextRef01.value.focus();
});
</script>

