<script lang="ts">
	import { goto } from '$app/navigation'
	export let ID: number = 0
	export let image: string = ''
	export let tags: string[] = []
	export let author: string[] = []
	export let download: number[] = []
	export let vote: number = 0
	var newdownload = download.reduce((acc, curr) => acc + curr, 0)
</script>

<div
	class="flex flex-col items-center bg-[var(--bg-200)] rounded-lg p-4 text-white glow"
	on:click={() => goto(`/l/${ID}`)}
	on:keydown={(e) => e.key === 'Enter' && goto(`/l/${ID}`)}
	tabindex="0"
	role="button"
	aria-label="PANIC!"
>
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
		<p>Download: {newdownload}</p>
	</div>
	<div class="w-full">
		<p>Vote: {vote}</p>
	</div>
</div>
