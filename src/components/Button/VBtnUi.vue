<template>

	<v-btn
		:size="size"
		:density="density"
		:ripple="ripple"
		:block="block"
		:rounded="rounded"
		v-bind="$attrs"
	>
		<slot />
	</v-btn>

</template>

<script>
export default {
	name : 'VBtn',
	props : {
		size: { type: String, default: 'default' },
		ripple: { type: Boolean, default: false },
		density: { type: String, default: "default" },
		block: { type: Boolean, default: true },
		rounded: { type: String, default: '120' },
	},
	$inheritAttrs: false,
}
</script>