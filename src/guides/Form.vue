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
					title='이름을 입력해주세요'
				/>
			</v-col>
			<v-col col="auto">
                <VTextUi
					v-model="exText02"
					label="이름"
					placeholder='이름을 입력해주세요'
					title='이름을 입력해주세요'
				/>
			</v-col>
			<v-col col="auto">
                <VTextUi02
					v-model="exText03"
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
watch(exText01, (val)=>{
	console.log('exTexxt01 ===== ', val);
});


const exText02 = ref('');
watch(exText02, (val)=>{
	console.log('exTexxt02 ===== ', val);
});
const exText03 = ref('');
watch(exText03, (val)=>{
	console.log('exTexxt03 ===== ', val);
});

onMounted(()=>{
	exTextRef01.value.focus();
	exTextRef01.value.setVal('');
});

</script>

