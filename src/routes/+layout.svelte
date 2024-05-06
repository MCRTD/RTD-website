<script>
	import Header from './Header.svelte';
	import '../app.css';
	import './styles.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import NProgress from 'nprogress'
	import {navigating} from '$app/stores'
	import 'nprogress/nprogress.css'

	onMount(() => {
		themeChange(false);
	});

	NProgress.configure({
			minimum: 0.16,
			showSpinner: false
		})

	$: {
		if ($navigating) {
		NProgress.start();
		}
		if (!$navigating) {
		NProgress.done();
		}
	}
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;
	}
</style>
