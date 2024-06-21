<script lang="ts">
  import SettingSidebar from './setting_sidebar.svelte'

  const sidebarNavItems = [
		{
			title: 'Profile',
			href: '/user/settings/profile'
		},
		{
			title: 'guild',
			href: '/user/settings/guilds'
		},
		{
			title: 'server',
			href: '/user/settings/servers'
		}
	]
</script>


<div class="setting">

  <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
    <aside class="-mx-4 lg:w-1/5">
      <SettingSidebar items={sidebarNavItems} />
    </aside>
    <div class="flex-1 lg:max-w-2xl">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .setting {
		max-width: 1300px;
		margin: 0 auto;
	}
</style>