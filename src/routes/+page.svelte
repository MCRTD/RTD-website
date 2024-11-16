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
      Images: Array<{ ImagePath: string }>
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

<div class="drawer lg:hidden">
	<input id="index-drawer" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content">
		<div class="mainshow px-2 sm:px-4 flex-grow max-w-[1100px]">
			<div class="join w-full">
				<input
					type="text"
					placeholder="Type here"
					class="input input-accent input-bordered join-item flex-grow"
				/>
				<button class="btn btn-accent join-item">搜尋</button>
			</div>
			<div class="main flex flex-col lg:flex-row mt-4 gap-4">
				{#await posts}
					<p>Loading...</p>
				{:then value}
					<div class="grid sm:grid-cols-1 xl:grid-cols-2 gap-2">
						{#each value.litematicas as litematica, i}
							<div>
								<Showcard
                  image={litematica?.Images[0]?.ImagePath || 'https://pbs.twimg.com/media/GNOM-TkbgAA2OjU?format=jpg&name=small'}
									tags={litematica.Tags.split(',')}
									ID={litematica.ID}
									vote={litematica.vote}
									author={litematica.Creators.map((creator) => creator.Username)}
									download={litematica.Files.map((file) => file.DownloadCount)}
								/>
							</div>
						{/each}
					</div>
          <div class="flex flex-col items-center justify-center py-8 bg-gradient-to-t from-base-300 to-transparent">
            <p class="text-lg font-medium text-base-content/80 mb-2">到底啦</p>
            <div class="h-20"></div>
          </div>
				{/await}
			</div>
		</div>
		<div class="btm-nav lg:hidden">
			<label for="index-drawer" class="text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
				<span class="btm-nav-label">選單</span>
			</label>
		</div>
	</div>

  <div class="drawer-side z-[51]">
    <label for="index-drawer" class="drawer-overlay z-[50]"></label>
    <div class="menu p-4 w-[250px] min-h-full bg-base-200 z-[51] pt-[64px]">
      <Sidebar />
    </div>
  </div>
</div>

<section class="flex-col lg:flex-row justify-center hidden lg:flex max-w-[1300px] mx-auto">
	<Sidebar />
	<div class="mainshow px-2 sm:px-4 flex-grow max-w-[1100px]">
		<div class="join w-full">
			<input
				type="text"
				placeholder="Type here"
				class="input input-accent input-bordered join-item flex-grow"
			/>
			<button class="btn btn-accent join-item">搜尋</button>
		</div>
		<div class="main flex flex-col lg:flex-row mt-4 gap-4">
			<div class="flex-grow">
				<div
					class="flex items-center bg-accent text-[oklch(var(--ac))] radio-sm p-2 rounded-md mb-4 flex-col"
				>
					<h1 class="text-2xl sm:text-4xl">{sortstr[$nowsort || 'newest']}</h1>
				</div>
				{#await posts}
					<p>Loading...</p>
				{:then value}
					<div class="grid sm:grid-cols-1 xl:grid-cols-2 gap-2">
						{#each value.litematicas as litematica, i}
							<div>
								<Showcard
									image={litematica?.Images[0]?.ImagePath || 'https://pbs.twimg.com/media/GNOM-TkbgAA2OjU?format=jpg&name=small'}
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
			<div class="w-full lg:w-[280px] lg:flex-shrink-0">
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
