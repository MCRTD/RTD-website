<script lang="ts">
	import SettingSidebar from '$lib/components/setting_sidebar.svelte'
	import { page } from '$app/stores'

	const sidebarNavItems = [
		{
			title: 'overview',
			href: $page.url.pathname.split('/').slice(0, -1).join('/') + '/panel'
		},
		{
			title: 'edit',
			href: $page.url.pathname.split('/').slice(0, -1).join('/') + '/panel/update'
		},
		{
			title: 'file',
			href: $page.url.pathname.split('/').slice(0, -1).join('/') + '/panel/file'
		}
	]
</script>

<div class="panel">
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
	.panel {
		max-width: 1300px;
		margin: 0 auto;
	}
</style>
