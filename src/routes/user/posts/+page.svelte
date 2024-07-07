<script lang="ts">
	import { goto } from '$app/navigation'
	export let data
	const { user } = data
</script>

<div class="mx-auto max-w-xl">
	{#await user}
		<p>Loading...</p>
	{:then user}
		{#if user.Litematicas.length === 0}
			<h1 class="text-4xl font-bold">Nothing</h1>
		{/if}
		{#each user.Litematicas as Litematica}
			<div class="flex">
				<div
					class="rounded-lg p-4 text-white glow flex gap-2 bg-[var(--bg-200)] my-4 w-full mr-1"
					on:click={() => goto(`/l/${Litematica.ID}`)}
					on:keydown={() => goto(`/l/${Litematica.ID}`)}
					role="button"
					tabindex="0"
				>
					<p>{Litematica.LitematicaName}</p>
				</div>
				<div
					class="rounded-lg p-4 text-white glow flex gap-2 bg-[var(--bg-200)] my-4 w-2/12"
					on:click={() => goto(`/l/${Litematica.ID}/panel`)}
					on:keydown={() => goto(`/l/${Litematica.ID}/panel`)}
					role="button"
					tabindex="0"
				>
					<p>EDIT</p>
				</div>
			</div>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
