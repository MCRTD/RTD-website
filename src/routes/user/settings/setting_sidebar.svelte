<script lang="ts">
	import { cubicInOut } from 'svelte/easing'
	import { crossfade } from 'svelte/transition'
	import { page } from '$app/stores'
	export let items: { href: string; title: string }[]

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	})
</script>

<nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
	{#each items as item}
		{@const isActive = $page.url.pathname === item.href}

		<a
			href={item.href}
			class={`${!isActive ? 'hover:underline' : ''} relative justify-start hover:bg-transparent btn`}
			data-sveltekit-noscroll
		>
			{#if isActive}
				<div
					class="absolute inset-0 rounded-md btn-active"
					in:send={{ key: 'active-sidebar-tab-setting' }}
					out:receive={{ key: 'active-sidebar-tab-setting' }}
				/>
			{/if}
			<div class="relative">
				{item.title}
			</div>
		</a>
	{/each}
</nav>
