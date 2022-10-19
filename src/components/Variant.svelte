<script lang="ts">
	export let title: string;
	export let isDisabled = false;
	export let isSelected = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="h-min my-auto w-min py-1 px-2 rounded-lg border-orange-400 border-2 {isSelected &&
		'font-semibold border-4 '} {isDisabled && 'bg-gray-300  border-dashed'} snap-center"
>
	<span class="text-md whitespace-nowrap my-auto text-orange-400">
		{title}
	</span>
</div>
