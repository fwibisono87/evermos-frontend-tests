<script>
	import '../app.css';
</script>

<div class="bg-slate-500 min-h-screen w-screen">
	<div class="flex flex-row shadow-md px-4 py-4 bg-primary top-0 sticky">
		<a href="/">
			<h1 class="text-3xl font-semibold text-slate-300 select-none">Catalogue</h1>
		</a>
	</div>
	<div class="flex flex-col">
		<slot />
	</div>
</div>
