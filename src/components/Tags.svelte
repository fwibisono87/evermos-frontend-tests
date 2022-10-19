<script lang="ts">
	import Tag from './Tag.svelte';

	export let addPad = false;
	export let data: string[];
</script>

<div
	class="flex flex-row snap-x snap-mandatory overflow-x-auto overflow-y-hidden gap-2 {addPad &&
		'pb-5'} h-min scroll-smooth scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-orange-500"
>
	{#each data as tag}
		<Tag title={tag} />
	{/each}
</div>
