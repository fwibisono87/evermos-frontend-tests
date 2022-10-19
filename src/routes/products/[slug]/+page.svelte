<script>
  /** @type {import('./$types').PageData} */  export let data;
</script>

<h1>{data.title}</h1>
<span>{data.slug}</span>
<div>{@html data.content}</div>