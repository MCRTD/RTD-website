<script lang="ts">
	import type { PageData } from '$types'
	export let data: PageData
	const { servers } = data
</script>

<div class="container mx-auto p-4">
	{#await servers}
		<div class="flex justify-center items-center h-screen">
			<span class="loading loading-spinner loading-lg"></span>
		</div>
	{:then value}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each value as server}
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h2 class="card-title text-xl mb-2">{server.Name}</h2>
						<p class="text-base">IP: {server.IP}</p>
						<p class="text-base">Port: {server.Port}</p>
						<p class="text-sm text-base-content/70">ID: {server.ID}</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-primary btn-sm">修改</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				<span>{error.message}</span>
			</div>
		</div>
	{/await}
</div>
