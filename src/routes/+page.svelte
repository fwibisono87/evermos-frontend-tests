<script lang="ts">
	import { onMount } from 'svelte';
	import getAllProducts from '$lib/products/getAllProducts';
	import { products } from '$lib/stores';
	import ProductCard from '$components/ProductCard.svelte';
	import LineMdLoadingAltLoop from '~icons/line-md/loading-alt-loop';

	let loaded = false;
	onMount(async () => {
		await getAllProducts();
		loaded = true;
	});
</script>
<head>
	<title>Catalog</title>
</head>

{#if !loaded}
	<div class="flex flex-col mx-auto my-auto ">
		<LineMdLoadingAltLoop class="mx-auto w-12 h-12" />
		<h2 class="text-xl font-semibold">Loading</h2>
	</div>
{:else}
	<div class="flex flex-row flex-wrap gap-5 mx-auto my-6">
		<!-- {$products} -->
		{#each $products as product}
			<ProductCard productCardData={product} />
		{/each}
	</div>
{/if}
