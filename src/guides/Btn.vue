<script setup>

</script>

<template>
	<div class="guideTit">Button Guide page</div>

	<div class="guideTit02">size large</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" size="large" rounded="xl" block>
					<span class="txtCase">Primary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-secondary" size="large" rounded="xl" block>
					<span class="txtCase">Secondary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-tertiary" size="large" rounded="xl" block>
					<span class="txtCase">Tertiary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn size="large" rounded="xl" block>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">size regular</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" rounded="xl" block >
					<span class="txtCase">Primary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-secondary" rounded="xl" block>
					<span class="txtCase">Secondary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-tertiary" rounded="xl" block>
					<span class="txtCase">Tertiary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn rounded="xl" block>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">size small</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" size="small" rounded="xl" block >
					<span class="txtCase">Primary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-secondary" size="small" rounded="xl" block>
					<span class="txtCase">Secondary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-tertiary" size="small" rounded="xl" block>
					<span class="txtCase">Tertiary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn size="small" rounded="xl" block>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">disabled</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" size="small" rounded="xl" block disabled>
					<span class="txtCase">Primary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-secondary" size="small" rounded="xl" block disabled>
					<span class="txtCase">Secondary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-tertiary" size="small" rounded="xl" block disabled>
					<span class="txtCase">Tertiary</span>
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<v-btn size="small" rounded="xl" block disabled>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">inline Icon</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<v-btn class="btn-primary" size="small" rounded="sm">
					<span class="txtCase">Primary</span>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn class="btn-secondary" size="small" rounded="sm">
					<span class="txtCase">Secondary</span>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn class="btn-tertiary" size="small" rounded="sm">
					<span class="txtCase">Tertiary</span>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn size="small" rounded="sm">
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn size="small" rounded="sm">
					<v-icon icon="VIco:plus" size="16" class="prepend-icon"></v-icon>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn size="small" rounded="sm">
					<span class="txtCase">Tertiary02</span>
					<v-icon icon="VIco:chevron-down" size="16" class="append-icon"></v-icon>
				</v-btn>
			</v-col>
			<v-col col="auto">
				<v-btn size="small" rounded="sm" stacked>
					<v-icon icon="VIco:plus" size="16" class="prepend-icon"></v-icon>
					<span class="txtCase">Tertiary02</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<!-- <div class="guideTit02">size large</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-primary" size="large"><span>Primary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-secondary" size="large"><span>Secondary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-tertiary" size="large"><span>Tertiary</span></VBtnUi>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">size regular</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-primary"><span>Primary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-secondary"><span>Secondary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-tertiary"><span>Tertiary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi><span>Tertiary02</span></VBtnUi>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">size small</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-primary" size="small"><span>Primary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-secondary" size="small"><span>Secondary</span></VBtnUi>
			</v-col>
		</v-row>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-tertiary" size="small"><span>Tertiary</span></VBtnUi>
			</v-col>
		</v-row>
	</v-container>

	<div class="guideTit02">inline</div>
	<v-container>
		<v-row>
			<v-col col="auto">
				<VBtnUi class="btn-primary" size="small" :block="false" rounded="sm"><span>Primary</span></VBtnUi>
			</v-col>
			<v-col col="auto">
				<VBtnUi class="btn-secondary" size="small" :block="false" rounded="sm"><span>Secondary</span></VBtnUi>
			</v-col>
			<v-col col="auto">
				<VBtnUi class="btn-tertiary" size="small" :block="false" rounded="sm"><span>Tertiary</span></VBtnUi>
			</v-col>
		</v-row>
	</v-container> -->


</template>