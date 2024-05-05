<script>
	export let data;
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
			class="w-80 flex flex-col flex-shrink bg-[oklch(var(--n))] rounded-xl p-4 text-[oklch(var(--nc))]"
		>
            <h2 class="text-lg font-bold mb-4">creator</h2>
			<div class="flex items-center mb-2">
				<div class="avatar pr-4">
					<div class="w-12 rounded-full">
						<img
							src="https://cdn.discordapp.com/avatars/762484891945664542/a3d0e4d30b78ce30a2ed22b51bf80df4.png?size=1024"
							alt="User 1"
						/>
					</div>
				</div>
				<h2>
					<a href="/u/1">User 1</a>
				</h2>
			</div>
			<div class="flex items-center mb-2">
				<div class="avatar pr-4">
					<div class="w-12 rounded-full">
						<img
							src="https://cdn.discordapp.com/avatars/762484891945664542/a3d0e4d30b78ce30a2ed22b51bf80df4.png?size=1024"
							alt="User 1"
						/>
					</div>
				</div>
				<h2>
					<a href="/u/1">User 1</a>
				</h2>
			</div>
            <h2 class="text-lg font-bold mb-4">server</h2>
            <div>

            </div>
            <h2 class="text-lg font-bold mb-4">group</h2>
            <div>

            </div>
		</div>
	</aside>
</div>
