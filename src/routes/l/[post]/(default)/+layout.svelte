<script lang="ts">
	import toast from 'svelte-french-toast'
	import servername from '$lib/data'

	export let data
	var downloads = data.postdata.Files.map(
		(file: { DownloadCount: any }) => file.DownloadCount
	).reduce((acc: number, curr: number) => acc + curr, 0)
	async function handleVote() {
		try {
			const response = await fetch(servername + '/api/litematica/vote', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id: data.post
				})
			})

			if (response.status === 403) {
				throw new Error('You need to login to vote')
			}

			if (!response.ok) {
				throw new Error('Vote failed')
			}

			const result = await response.json()
			console.log(result)
			if (result.message === 'Vote added') {
				toast.success('Vote added')
				data.postdata.Vote += 1
			} else {
				toast.success('Vote removed')
				data.postdata.Vote -= 1
			}
		} catch (error) {
			toast.error((error as Error).message)
		}
	}
</script>

<div class="mx-auto flex flex-row max-w-7xl gap-4">
	<div class="flex flex-grow flex-col w-[600px] px-4">
		<div class="card bg-[oklch(var(--n))] rounded-xl mb-4">
			<ul class="menu menu-horizontal">
				<li><a href="/l/{data.post}/description">Description</a></li>
				<li><a href="/l/{data.post}/file">Files</a></li>
			</ul>
		</div>
		<slot />
	</div>
	<aside>
		<div
			class="w-80 flex flex-col flex-shrink bg-[oklch(var(--n))] rounded-xl p-4 text-[oklch(var(--nc))] mb-4"
		>
			<h2 class="text-lg font-bold mb-4">creator</h2>
			{#each data.postdata.Creators as creator}
				<div class="flex items-center mb-2">
					<div class="avatar pr-4">
						<div class="w-12 rounded-full">
							<img
								src={creator.Avatar
									? creator.Avatar
									: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'}
								alt="User 1"
							/>
						</div>
					</div>
					<h2>
						<a href="/u/1">{creator.Username}</a>
					</h2>
				</div>
			{/each}
			<h2 class="text-lg font-bold mb-4">server</h2>
			<div>
				<p>in process...</p>
			</div>
			<h2 class="text-lg font-bold mb-4">group</h2>
			<div>
				<p>in process...</p>
			</div>
		</div>
		<div
			class="flex flex-col flex-shrink bg-[oklch(var(--n))] rounded-xl p-4 text-[oklch(var(--nc))]"
		>
			<div class="stats stats-vertical bg-[oklch(var(--n))]">
				<div class="stat p-2">
					<div class="stat-title">Downloads</div>
					<div class="stat-value">{downloads}</div>
				</div>

				<div class="stat p-2">
					<div class="stat-title">Vote</div>
					<div class="stat-value">{data.postdata.Vote}</div>
				</div>
			</div>
			<button class="btn btn-primary w-20 ml-auto" on:click={handleVote}>Vote</button>
		</div>
	</aside>
</div>
