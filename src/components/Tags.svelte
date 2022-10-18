<script lang="ts">
    import Tag from './Tag.svelte'
    import type { TagData } from '../lib/types';

    export let data: TagData[]
    
</script>
<div class="flex flex-row overflow-auto gap-2 pb-2 scroll-smooth scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-orange-500">
    {#each data as tag}
        <Tag title={tag.title} />
    {/each}
</div>