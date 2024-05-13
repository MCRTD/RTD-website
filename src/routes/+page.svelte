<script>
	import Sidebar from './Sidebar.svelte'
	import Showcard from './showcard.svelte'

	export let data
	const { posts } = data
</script>

<svelte:head>
	<title>探索 | RTD 紅石資料庫</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Sidebar />
	<div class="mainshow px-4">
		<div class="join">
			<input
				type="text"
				placeholder="Type here"
				class="input input-accent input-bordered join-item w-full"
			/>
			<button class="btn btn-accent join-item">Search</button>
		</div>
		<div class="main flex flex-row flex-grow mt-4">
			<div class="w-[300px] flex-grow">
				<div
					class="flex items-center bg-accent text-[oklch(var(--ac))] radio-sm p-2 rounded-md mb-4 flex-col"
				>
					<h1 class="text-4xl">探索</h1>
				</div>
				{#await posts then value}
					<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
						{#each value.servers as litematica, i}
							<div>
								<Showcard
									image="https://cdn.discordapp.com/attachments/1105452240292040806/1236493511369691177/Screenshot_20240430-180736.jpg?ex=663835d2&is=6636e452&hm=c66fc3aef2ce1ec6f798250f64f6bc8b7de8c083dd0850feecea3b396bf29600&"
									tags={litematica.Tags.split(',')}
									ID={litematica.ID}
									vote={litematica.vote}
									author={litematica.Creators.map(
										(/** @type {{ Username: string; }} */ creator) => creator.Username
									)}
									download={litematica.Files.map(
										(/** @type {{ DownloadCount: number; }} */ file) => file.DownloadCount
									)}
								/>
							</div>
						{/each}
					</div>
				{:catch error}
					<p>{error.message}</p>
				{/await}
			</div>
			<div class="w-[280px] flex-shrink">
				<div class="infocards">
					<p class="text-lg">這裡是廣告</p>
					<img
						src="https://p2.bahamut.com.tw/S/2KU/98/e30d11a8a9f73a57a1eabce89a1pjyy5.JPG"
						alt="廣告"
						class="w-full h-auto"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		max-width: 1300px;
		margin: 0 auto;
		justify-content: center;
		flex: 0.6;
	}

	.mainshow {
		width: 600px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.main {
		gap: 1rem;
	}

	.infocards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: oklch(var(--n));
		color: oklch(var(--nc));
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>
