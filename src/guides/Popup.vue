<script setup>

</script>

<template>
	<div class="guideTit">Form Guide page</div>

	<div class="guideTit02">Input text</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" size="large" rounded="xl" block>
					<span class="txtCase">popup full</span>
				</v-btn>
			</v-col>

            <VLayer
                class="alert"
                title="template"
            >
                <template #default>
                    layer Contents
                </template>
            </VLayer>
		</v-row>
	</v-container>

</template>

<script setup>
	import {watch, ref, onMounted} from 'vue';

</script>

