<script lang="ts">
	import rtd from '$lib/images/rtd.svg'
	import ThemeSelect from '$lib/theme.svelte'
	import { _ } from 'svelte-i18n'
	import { browser } from '$app/environment'
	import session from '$lib/stores/session'
	import { goto } from '$app/navigation'
	let openDropdown: boolean = false

	function handleClickItem() {
		openDropdown = false
	}
	if (browser) {
		window.addEventListener('click', function (e: MouseEvent) {
			document.querySelectorAll('.binddropdown').forEach(function (dropdown) {
				if (!dropdown.contains(e.target as Node)) {
					;(dropdown as HTMLDetailsElement).open = false
				}
			})
		})
	}
</script>

<header class="sticky top-0 z-50 mb-2">
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="text-xl px-6" href="/">RTD</a>
			<img src={rtd} alt="Redstone Database logo" class="w-10 h-10" />
			<ul class="menu px-1 menu-horizontal">
				<li class="justify-center"><a href="/">{$_('navbar.Export')}</a></li>
				<li class="justify-center"><a href="/upload">{$_('navbar.Upload')}</a></li>
				<li class="justify-center">
					<details bind:open={openDropdown} class="binddropdown">
						<summary> {$_('navbar.more.title')} </summary>
						<ul class="w-40 p-2 bg-base-100 rounded-t-none">
							<li>
								<a on:click={handleClickItem} href="/">{$_('navbar.more.about')}</a>
							</li>
							<li>
								<a on:click={handleClickItem} href="/terms">{$_('navbar.more.terms')}</a>
							</li>
							<li>
								<a on:click={handleClickItem} href="/privacy">{$_('navbar.more.privacy')}</a>
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
		<div class="flex-none gap-2">
			<ThemeSelect />
			{#if $session?.user}
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-outline btn-primary">
						<div class="avatar">
							<div class="w-10 rounded-full">
								<img
									alt="user avatar"
									src="https://cdn.discordapp.com/avatars/762484891945664542/a3d0e4d30b78ce30a2ed22b51bf80df4.png?size=1024"
								/>
							</div>
						</div>
					</div>
					<ul
						class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/" class="justify-between">{$_('navbar.profile.litematica')}</a>
						</li>
						<li><a href="/">{$_('navbar.profile.settings')}</a></li>
						<li><a href="/">{$_('navbar.profile.logout')}</a></li>
					</ul>
				</div>
			{:else}
				<div tabindex="0" role="button" class="btn btn-outline btn-primary" on:click={() => goto("/auth/login")} on:keydown={(e) => e.key === 'Enter' && goto(`/auth/login`)}>
					<p>{$_('navbar.login')}</p>
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
</style>
