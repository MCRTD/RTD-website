<script>
    import Sidebar from "./Sidebar.svelte";
</script>

<svelte:head>
	<title>探索 | RTD 紅石資料庫</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

    <Sidebar />
    <h1 class="text-3xl font-bold underline w-[300px] flex-grow">
        wait...
    </h1>
    <div class="w-[320px] flex-shrink">
        <p class="text-lg">
            這裡將會是一個探索頁面，用來展示最新上傳的資料庫。
        </p>


    </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
        max-width: 1300px;
        margin: 0 auto;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>