<script lang="ts">
    import Tag from './Tag.svelte'
    export let data: string[]
</script>
<div class="flex flex-row overflow-x-auto overflow-y-hidden gap-2 pb-5 h-min scroll-smooth scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-orange-500">
    {#each data as tag}
        <Tag title={tag} />
    {/each}
</div>