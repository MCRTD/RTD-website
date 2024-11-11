<script lang="ts">
	import SettingSidebar from '$lib/components/setting_sidebar.svelte'
	import { page } from '$app/stores'

	const getBaseUrl = (pathname: string) => {
		// 如果路徑包含 panel，則取到 panel 之前的部分
		if (pathname.includes('/panel')) {
			return pathname.split('/panel')[0]
		}
		// 否則取到最後一個斜線之前的部分
		return pathname.split('/').slice(0, -1).join('/')
	}

	const sidebarNavItems = [
		{
			title: 'overview',
			href: `${getBaseUrl($page.url.pathname)}/panel`
		},
		{
			title: 'edit',
			href: `${getBaseUrl($page.url.pathname)}/panel/update`
		},
		{
			title: 'file',
			href: `${getBaseUrl($page.url.pathname)}/panel/file`
		},
		{
			title: 'image',
			href: `${getBaseUrl($page.url.pathname)}/panel/image`
		}
	]
</script>

<div class="panel">
	<div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
		<aside class="-mx-4 lg:w-1/5" id="l-panel">
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
