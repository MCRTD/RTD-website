<script lang="ts">
	import Sidebar from './Sidebar.svelte'
	import Showcard from './showcard.svelte'
	import { queryParam } from 'sveltekit-search-params'

	export let data: { posts: Promise<PostsData> }
	const { posts } = data

	interface PostsData {
		litematicas: Array<{
			ID: number
			Tags: string
			vote: number
			Creators: Array<{ Username: string }>
			Files: Array<{ DownloadCount: number }>
		}>
	}
	const sortstr: { [key: string]: string } = {
		newest: '最新上傳',
		mostvote: '最多投票',
		mostdownload: '最多下載'
	}
	const nowsort = queryParam('sort', {
		defaultValue: 'newest',
		encode: (value) => value,
		decode: (value) => value
	})
</script>

<svelte:head>
	<title>探索 | RTD 紅石資料庫</title>
	<meta name="description" content="Minecraft Redstone Database" />
</svelte:head>

<section class="flex flex-row max-w-[1300px] mx-auto justify-center">
	<Sidebar />
	<div class="mainshow px-4 flex-grow max-w-[1100px]">
		<div class="join w-full">
			<input
				type="text"
				placeholder="Type here"
				class="input input-accent input-bordered join-item flex-grow"
			/>
			<button class="btn btn-accent join-item">搜尋</button>
		</div>
		<div class="main flex flex-row mt-4 gap-4">
			<div class="flex-grow">
				<div
					class="flex items-center bg-accent text-[oklch(var(--ac))] radio-sm p-2 rounded-md mb-4 flex-col"
				>
					<h1 class="text-4xl">{sortstr[$nowsort || 'newest']}</h1>
				</div>
				{#await posts}
					<p>Loading...</p>
				{:then value}
					<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
						{#each value.litematicas as litematica, i}
							<div>
								<Showcard
									image="https://pbs.twimg.com/media/GNOM-TkbgAA2OjU?format=jpg&name=small"
									tags={litematica.Tags.split(',')}
									ID={litematica.ID}
									vote={litematica.vote}
									author={litematica.Creators.map((creator) => creator.Username)}
									download={litematica.Files.map((file) => file.DownloadCount)}
								/>
							</div>
						{/each}
					</div>
				{:catch error}
					<p>{error.message}</p>
				{/await}
			</div>
			<div class="w-[280px] flex-shrink-0">
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
