<script>
	export let data;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
<div>
    <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img
			src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
			class="w-full"
            />
        </div>
        <div id="item2" class="carousel-item w-full">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img
			src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
			class="w-full"
            />
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <div id="item3" class="carousel-item w-full">
            <img
			src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
			class="w-full"
            />
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <div id="item4" class="carousel-item w-full">
            <img
			src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
			class="w-full"
            />
        </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
    </div>
</div>

    <div class="card">
        <div class="card-body">
		<ul class="menu menu-horizontal bg-base-200">
			<li><a>Item 1</a></li>
			<li><a>Item 2</a></li>
			<li><a>Item 3</a></li>
		</ul>
	</div>
</div>

<div class="">
    <div class="avatar">
        <div class="w-16 rounded-full">
            <img src="https://cdn.discordapp.com/avatars/762484891945664542/a3d0e4d30b78ce30a2ed22b51bf80df4.png?size=1024" />
        </div>
    </div>
    <h2>
        <a href="/u/1">User 1</a>
    </h2>
</div>
