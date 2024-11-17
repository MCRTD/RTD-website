<script lang="ts">
	import Header from './Header.svelte'
	import '../app.css'
	import './styles.css'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import NProgress from 'nprogress'
	import { navigating } from '$app/stores'
	import 'nprogress/nprogress.css'
	import session from '$lib/stores/session'
	import { Toaster } from 'svelte-french-toast'

	export let data

	$: if (data?.user) $session.user = data.user

	onMount(() => {
		themeChange(false)
	})

	NProgress.configure({
		minimum: 0.16,
		showSpinner: false
	})

	$: {
		if ($navigating) {
			NProgress.start()
		}
		if (!$navigating) {
			NProgress.done()
		}
	}
</script>

<svelte:head>
	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="786a5f0c-248c-4130-a561-474a3ca4f151"
	></script>
</svelte:head>

<Toaster />
<div class="flex flex-col min-h-screen overflow-x-hidden">
	<Header user={data.userdata} />

	<main>
		<slot />
	</main>
</div>
