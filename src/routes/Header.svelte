<script lang="ts">
	import rtd from '$lib/images/rtd.svg'
	import ThemeSelect from '$lib/theme.svelte'
	import { _ } from 'svelte-i18n'
	import { browser } from '$app/environment'
	import session from '$lib/stores/session'
	import { goto } from '$app/navigation'
	let openDropdown: boolean = false

	export let user

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

<div class="drawer drawer-end">
	<input id="header-drawer" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content">
		<header class="sticky top-0 z-30 mb-2 w-full bg-base-100">
			<div class="max-w-[1300px] mx-auto">
				<div class="navbar">
					<div class="flex-1">
						<a class="text-2xl" href="/">RTD</a>
						<div class="pl-3">
							<img src={rtd} alt="Redstone Database logo" class="w-10 h-10" />
						</div>
						<ul class="menu menu-horizontal hidden lg:flex">
							<li class="justify-center"><a href="/">{$_('navbar.Export')}</a></li>
							<li class="justify-center"><a href="/upload">{$_('navbar.Upload')}</a></li>
							<li class="justify-center">
								<details bind:open={openDropdown} class="binddropdown">
									<summary> {$_('navbar.more.title')} </summary>
									<ul class="w-40 p-2 bg-base-100 rounded-t-none">
										<li><a on:click={handleClickItem} href="/">{$_('navbar.more.about')}</a></li>
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
						<label for="header-drawer" class="btn btn-ghost lg:hidden ml-auto">
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
						</label>
					</div>
					<div class="flex-none gap-2 hidden lg:flex">
						<ThemeSelect />
						{#if $session?.user}
							<div class="dropdown dropdown-end">
								<div tabindex="0" role="button" class="btn btn-outline btn-primary">
									<div class="avatar">
										<div class="w-10 rounded-full">
											<img
												alt="user avatar"
												src={user.Avatar
													? user.Avatar
													: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'}
											/>
										</div>
									</div>
									<p>{user.Username || 'User'}</p>
								</div>
								<ul
									class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
								>
									<li><a href="/u/{$session.user?.id}">個人檔案</a></li>
									<li><a href="/user/posts">{$_('navbar.profile.litematica')}</a></li>
									<li><a href="/user/settings">{$_('navbar.profile.settings')}</a></li>
									<li><a href="/auth/logout">{$_('navbar.profile.logout')}</a></li>
								</ul>
							</div>
						{:else}
							<div
								tabindex="0"
								role="button"
								class="btn btn-outline btn-primary"
								on:click={() => goto('/auth/login')}
								on:keydown={(e) => e.key === 'Enter' && goto(`/auth/login`)}
							>
								<p>{$_('navbar.login')}</p>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</header>
	</div>

  <div class="drawer-side z-40">
    <label for="header-drawer" class="drawer-overlay"></label>
    <div class="menu p-4 w-80 min-h-full bg-base-100 pt-[64px] flex flex-col">
      <div class="mb-4">
        {#if $session?.user}
          <div class="w-full flex flex-col gap-2">
            <div class="flex items-center gap-2 p-2">
              <div class="avatar">
                <div class="w-10 rounded-full">
                  <img
                    alt="user avatar"
                    src={user.Avatar
                      ? user.Avatar
                      : 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'}
                  />
                </div>
              </div>
              <p class="text-lg">{user.Username || 'User'}</p>
            </div>
            <div class="menu bg-base-200 rounded-box">
              <li><a href="/u/{$session.user?.id}">個人檔案</a></li>
              <li><a href="/user/posts">{$_('navbar.profile.litematica')}</a></li>
              <li><a href="/user/settings">{$_('navbar.profile.settings')}</a></li>
              <li><a href="/auth/logout">{$_('navbar.profile.logout')}</a></li>
            </div>
          </div>
        {:else}
          <button
            class="btn btn-primary w-full"
            on:click={() => goto('/auth/login')}
          >
            {$_('navbar.login')}
          </button>
        {/if}
      </div>

      <ul class="menu bg-base-200 rounded-box mb-4">
        <li><a href="/">{$_('navbar.Export')}</a></li>
        <li><a href="/upload">{$_('navbar.Upload')}</a></li>
        <li><a href="/">{$_('navbar.more.about')}</a></li>
        <li><a href="/terms">{$_('navbar.more.terms')}</a></li>
        <li><a href="/privacy">{$_('navbar.more.privacy')}</a></li>
      </ul>

      <div class="mt-auto">
        <ThemeSelect position="top" />
      </div>
    </div>
  </div>
</div>
