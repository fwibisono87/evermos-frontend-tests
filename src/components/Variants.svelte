<script lang="ts">
	import Variant from './Variant.svelte';
	import type { variant } from '$lib/types';

	export let variantsData: variant[];

	function handleChange(id: number) {
		currentVariantId.set(id);
		console.log('dor');
	}
	import { currentVariantId } from '$lib/stores';
</script>

<div class="flex flex-row gap-2 flex-wrap">
	{#each variantsData as varData, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				!varData.isDisabled ? handleChange(i) : null;
			}}
			class="my-auto cursor-pointer {varData.isDisabled && 'cursor-not-allowed'}"
		>
			<Variant
				title={varData.name}
				isDisabled={varData.isDisabled}
				isSelected={i === $currentVariantId}
			/>
		</div>
	{/each}
</div>
