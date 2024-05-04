<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { queryParam } from 'sveltekit-search-params';

	const sort = queryParam('sort', {
		defaultValue: 'newest',
		encode: (value) => value,
		decode: (value) => value
	});

	function setSort(newSort: string) {
		sort.set(newSort);
	}
</script>

<div class="sidebar scrollbar-thin overflow-y-scroll">
	<div class="sort">
		<button
			class="btn"
			class:btn-outline={$sort !== 'newest'}
			class:btn-accent={$sort === 'newest'}
			on:click={() => setSort('newest')}>最新上傳</button
		>
		<button
			class="btn"
			class:btn-outline={$sort !== 'mostvote'}
			class:btn-accent={$sort === 'mostvote'}
			on:click={() => setSort('mostvote')}>最多投票</button
		>
		<button
			class="btn"
			class:btn-outline={$sort !== 'mostdownload'}
			class:btn-accent={$sort === 'mostdownload'}
			on:click={() => setSort('mostdownload')}>最多下載</button
		>
	</div>
	<h3>分類</h3>
	<div class="tags">
		<button class="btn">Normal</button>
		<button class="btn">Normal</button>
		<button class="btn">Normal</button>
		<button class="btn">Normal</button>
		<button class="btn">Normal</button>
		<button class="btn">Normal</button>
	</div>
</div>

<style>
	.sidebar {
		--sidebar-width: 200px;
		width: var(--sidebar-width);
		overflow-y: scroll;
		padding: 2px;
	}
	.sidebar > h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.sort {
		max-width: calc(var(--sidebar-width) - 2rem);
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.tags {
		max-width: calc(var(--sidebar-width) - 2rem);
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
