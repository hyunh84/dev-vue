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
				>
					<template #openBtn={props}>
						<v-btn class="btn-primary" size="large" rounded="xl" block @click="props.open">
							<span class="txtCase">popup full</span>
						</v-btn>
					</template>
				</VLayer>
			</v-col>

		</v-row>
	</v-container>

</template>

<script setup>
	import {watch, ref, onMounted} from 'vue';

</script>

