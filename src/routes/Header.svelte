<script>
	import rtd from '$lib/images/rtd.svg';
	import { _ } from 'svelte-i18n'
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="text-xl px-6" href="/">RTD</a>
			<img src={rtd} alt="Redstone Database logo" class="w-10 h-10" />
			<ul class="menu px-1 menu-horizontal">
				<li><a href="/">{$_('navbar.Export')}</a></li>
				<li><a href="/">{$_('navbar.Upload')}</a></li>
				<li>
					<details>
						<summary> {$_('navbar.more.title')} </summary>
						<ul class="p-2 bg-base-100 rounded-t-none">
							<li><a href="/">{$_('navbar.more.about')}</a></li>
							<li><a href="/">{$_('navbar.more.terms')}</a></li>
							<li><a href="/">{$_('navbar.more.privacy')}</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
		<div class="flex-none gap-2">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-outline btn-primary">
					<!-- <div class="avatar">
						<div class="w-10 rounded-full">
							<img
							alt="user avatar"
							src="https://cdn.discordapp.com/avatars/762484891945664542/a3d0e4d30b78ce30a2ed22b51bf80df4.png?size=1024"
							/>
						</div>
					</div> -->
					<p>{$_('navbar.login')}</p>
				</div>
				<ul
					class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li><a href="/" class="justify-between">{$_('navbar.profile.litematica')}</a></li>
					<li><a href="/">{$_('navbar.profile.settings')}</a></li>
					<li><a href="/">{$_('navbar.profile.logout')}</a></li>
				</ul>
			</div>
		</div>
	</div>
</header>

<style>
</style>
