<script>
    import Sidebar from "./Sidebar.svelte";
</script>

<svelte:head>
	<title>探索 | RTD 紅石資料庫</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

    <Sidebar />
    <div class="mainshow">
        <div class="search">
            <input type="text" placeholder="搜尋" />
            <button>搜尋</button>
        </div>
        <div class="main flex flex-row">
            <h1 class="text-3xl font-bold underline w-[300px] flex-grow">
                wait...
            </h1>
            <div class="w-[320px] flex-shrink">
                <p class="text-lg">
                    這裡將會是一個探索頁面，用來展示最新上傳的資料庫。
                </p>
            </div>
        </div>
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

    .mainshow {
        width: 600px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-start;
    }


    .main {
        gap: 1rem;

    }
</style>