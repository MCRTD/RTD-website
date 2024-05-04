<script>
	import Sidebar from './Sidebar.svelte';
    import Showcard from './showcard.svelte';
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
				<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
					<div>
						<Showcard image="https://cdn.discordapp.com/attachments/1001472836625518612/1231553847323787276/mmexport1713695657329.png?ex=66360f66&is=6634bde6&hm=3ef01ccb59ff66a3e3ded4ae1df9c92b6f79905320df4d996e62279889b0f152&"/>
					</div>
					<div>
						<h2 class="text-2xl">test text</h2>
					</div>
					<div>
						<h2 class="text-2xl">test text</h2>
					</div>
					<div>
						<h2 class="text-2xl">test text</h2>
					</div>
				</div>
			</div>
			<div class="infocards w-[280px] flex-shrink">
				<p class="text-lg">這裡是廣告</p>
				<img
					src="https://p2.bahamut.com.tw/S/2KU/98/e30d11a8a9f73a57a1eabce89a1pjyy5.JPG"
					alt="廣告"
					class="w-full h-auto"
				/>
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
