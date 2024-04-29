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
            <input type="text" placeholder="Type here" class="input input-accent input-bordered join-item w-full" />
            <button class="btn btn-accent join-item ">Search</button>
        </div>
		<div class="main flex flex-row flex-grow">
			<h1 class="text-3xl w-[300px] flex-grow">主</h1>
			<div class="w-[320px] flex-shrink">
				<p class="text-lg">這裡是廣告</p>
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
</style>
