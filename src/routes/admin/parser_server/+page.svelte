<script lang="ts">
	import { goto } from '$app/navigation'
	import type { PageData } from './$types'
	import type { Node } from './servertype'
	export let data: PageData
	const { servers, addserver } = data
	let isModalOpen = false
	let serverdata: Node = {
		ip: '',
		name: '',
		password: '',
		port: ''
	}
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
							<button
								class="btn btn-primary btn-sm"
								on:click={() => goto('/admin/parser_server/edit/' + server.ID)}>修改</button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{error.message}</span>
			</div>
		</div>
	{/await}
</div>
<button class="btn modal-button" on:click={() => (isModalOpen = true)}>add server</button>
<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<div class="label">
			<span class="label-text">名稱</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				class="input input-bordered"
				placeholder="server name"
				bind:value={serverdata.name}
			/>
		</label>
		<div class="label">
			<span class="label-text">IP</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				class="input input-bordered"
				placeholder="server ip"
				bind:value={serverdata.ip}
			/>
		</label>
		<div class="label">
			<span class="label-text">PORT</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				class="input input-bordered"
				placeholder="server port"
				bind:value={serverdata.port}
			/>
		</label>
		<div class="label">
			<span class="label-text">密碼</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				class="input input-bordered"
				placeholder="server password"
				bind:value={serverdata.password}
			/>
		</label>
		<div class="modal-action">
			<button class="btn" on:click={() => addserver(serverdata)}>send</button>
			<button class="btn btn-error" on:click={() => (isModalOpen = false)}>close</button>
		</div>
	</div>
</div>
