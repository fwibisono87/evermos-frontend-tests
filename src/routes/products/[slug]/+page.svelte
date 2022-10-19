<script>
	/** @type {import('./$types').PageData} */ export let data;
	import { currencyFormatter } from '$lib/formatter';
	import Tags from '$components/Tags.svelte';
	import Variants from '$components/Variants.svelte';
	import { currentVariantId } from '$lib/stores';
  import { onDestroy } from 'svelte';

  onDestroy(() => {
    currentVariantId.set(0)
  })
</script>

<head>
	<title>{data.product.name}</title>
</head>

<div
	class="flex flex-col md:flex-row bg-white w-full md:max-w-6xl mx-auto p-4 gap-6 md:gap-0 min-h-screen"
>
	<div id="images" class="md:w-[45%]">
		<div
			class="w-[90%] snap-x snap-mandatory scrollbar pb-4 rounded-xl mx-auto md:sticky md:top-24 flex flex-row overflow-x-auto overflow-y-hidden gap-2 croll-smooth scrollbar-track-slate-200 scrollbar-thumb-orange-500"
		>
			{#each data.product.imageURLS as imageURL}
				<img
					src={imageURL}
					class="snap-center shadow-2xl rounded-xl"
					alt="Image for {data.product.name}"
				/>
			{/each}
		</div>
	</div>
	<div id="info" class="flex flex-col md:w-[55%] gap-4">
		<div class="flex flex-col gap-2">
			<h2 class="text-3xl font-semibold">{data.product.name}</h2>
			<Tags data={data.product.tags} />
			<h3 class="text-4xl font-bold text-green-900">
				{currencyFormatter.format(data.product.variants[$currentVariantId].price)}
			</h3>
			<span class="font-semibold">{data.product.headline}</span>
		</div>
		<div class="flex flex-col gap-2">
			<h4 class="text-xl font-semibold">
				Variant: <span class="underline">{data.product.variants[$currentVariantId].name}</span>
			</h4>
			<Variants variantsData={data.product.variants} />
			<h4 class="text-xl font-semibold mt-2">Product Description</h4>
			<span>{@html data.product.variants[$currentVariantId].description}</span>
		</div>
		<div class="flex flex-col gap-2">
			<h4 class="text-xl font-semibold">Related Information</h4>
			<span>{@html data.product.relatedInfo}</span>
			<h4 class="text-xl font-semibold mt-2">Purchasing Information</h4>
			<span>{@html data.product.options}</span>
		</div>
	</div>
</div>
