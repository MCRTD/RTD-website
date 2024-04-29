<script>
	import Sidebar from './Sidebar.svelte';
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
			<div class="w-[300px] flex-grow grid xl:grid-cols-2 grid-cols-1 gap-2 ">
				<div>
                    <h2 class="text-2xl">test text</h2>
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
			<div class="infocards w-[280px] flex-shrink">
				<p class="text-lg">這裡是廣告</p>
                <img src="https://p2.bahamut.com.tw/S/2KU/56/39a4da01b592a7029dbd57530a1poho5.JPG" alt="廣告" class="w-full h-auto" />
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
