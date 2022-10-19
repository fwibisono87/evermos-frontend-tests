<script lang="ts">
	import Tag from './Tag.svelte';

	export let addPading = false;
	export let data: string[];
</script>

<div
	class="flex flex-row snap-x snap-mandatory overflow-x-auto overflow-y-hidden gap-2 {addPading &&
		'pb-5'} h-min scroll-smooth scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-orange-500"
>
	{#each data as tag}
		<Tag title={tag} />
	{/each}
</div>
