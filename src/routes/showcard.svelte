<script lang="ts">
	export let image: string = '';
	export let tags: string[] = [];
	export let author: string[] = [];
	export let download: number = 0;
	export let vote: number = 0;
</script>

<div class="flex flex-col items-center bg-sky-800 rounded-lg p-4 text-white">
	<div class="flex-1">
		<img src={image} alt="Litematica" class="object-cover max-h-60" />
	</div>
	<div class="w-full">
		{#each tags as tag}
			<div class="badge badge-info mr-1">{tag}</div>
		{/each}
	</div>
	<div class="w-full">
		<p>Author: {author.join(', ')}</p>
	</div>
	<div class="w-full">
		<p>Download: {download}</p>
	</div>
	<div class="w-full">
		<p>Vote: {vote}</p>
	</div>
</div>
