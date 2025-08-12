<script setup>

</script>

<template>
	<div class="guideTit">Form Guide page</div>

	<div class="guideTit02">Input text</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VLayer
					class="alert"
					title="template"
					@transitionend="onTransitionend01"
				>
					<template #openBtn={props}>
						<v-btn class="btn-primary" size="large" rounded="xl" block @click="props.open">
							<span class="txtCase">popup full</span>
						</v-btn>
					</template>

					<div>
						layer body contents .........
					</div>
				</VLayer>
			</v-col>

		</v-row>
	</v-container>

</template>

<script setup>
	import {watch, ref, onMounted} from 'vue';

	const onTransitionend01 = (v)=>{
		/*
			v.evt : event object,
			v.isOpen : Boolean(open/close 상태)
		*/
		console.log('onTransitionend01 isOpen ========= ', v.isOpen);
	}

</script>

