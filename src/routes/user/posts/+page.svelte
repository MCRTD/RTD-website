<script lang="ts">
	import { goto } from '$app/navigation'
	export let data
	const { user } = data
</script>

<div class="mx-auto max-w-xl">
	<h1 class="text-4xl font-bold">In process</h1>
	{#await user}
		<p>Loading...</p>
	{:then user}
		{#each user.Litematicas as Litematica}
			<div
				class="rounded-lg p-4 text-white glow flex gap-2 bg-[var(--bg-200)] my-4"
				on:click={() => goto(`/l/${Litematica.ID}`)}
				on:keydown={() => goto(`/l/${Litematica.ID}`)}
				role="button"
				tabindex="0"
			>
				<p>{Litematica.LitematicaName}</p>
				<p>{Litematica.ID}</p>
			</div>
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
