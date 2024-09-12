<script lang="ts">
	import { _ } from 'svelte-i18n'
	import { queryParam } from 'sveltekit-search-params'

	const sort = queryParam('sort', {
		defaultValue: 'newest',
		encode: (value) => value,
		decode: (value) => value
	})

	function setSort(newSort: string) {
		sort.set(newSort)
	}
</script>

<div class="w-[200px] h-screen flex flex-col p-0.5">
	<div class="flex flex-col gap-1.5 mb-4">
		<button
			class="btn {$sort === 'newest' ? 'btn-accent' : 'btn-outline'}"
			on:click={() => setSort('newest')}>最新上傳</button
		>
		<button
			class="btn {$sort === 'mostvote' ? 'btn-accent' : 'btn-outline'}"
			on:click={() => setSort('mostvote')}>最多投票</button
		>
		<button
			class="btn {$sort === 'mostdownload' ? 'btn-accent' : 'btn-outline'}"
			on:click={() => setSort('mostdownload')}>最多下載</button
		>
	</div>

	<h3 class="text-base font-semibold mb-2">分類</h3>

	<div class="flex-1 overflow-y-auto scrollbar-thin pr-1">
		<div class="flex flex-col gap-1.5">
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
			<button class="btn">Normal</button>
		</div>
	</div>
</div>

