<script lang="ts">
	import Tags from './Tags.svelte';
	import type { ProductCardData } from '../lib/types';
	import { currencyFormatter } from '../lib/formatter';
	import { goto } from '$app/navigation';

	export let productCardData: ProductCardData;

	function route() {
		return goto(`/products/${productCardData.id}`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="flex flex-col w-72 h-[25rem] bg-white rounded-lg shadow-lg cursor-pointer"
	on:click={route}
>
	<div class="h-[60%] rounded-t-md flex">
		<img
			src={productCardData.imageURL}
			alt="Image for {productCardData.name}"
			class="h-[90%] max-w-[90%] mx-auto my-auto"
		/>
	</div>
	<div class="p-2 gap-2 flex flex-col mx-2 h-full">
		<Tags data={productCardData.tags} />
		<div class="flex flex-col h-full justify-between my-2">
			<h3 class="text-md font-semibold">
				{productCardData.name}
			</h3>
			<span class="text-lg font-semibold text-green-800"
				>{currencyFormatter.format(productCardData.defaultPrice)}</span
			>
		</div>
	</div>
</div>
