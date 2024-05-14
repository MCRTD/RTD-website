<script lang="ts">
	import { browser } from '$app/environment'
	export let data
	function yymmddtostring(Datetime: string) {
		var date = new Date(Datetime)
		return (
			date.getFullYear() +
			'-' +
			(date.getMonth() + 1) +
			'-' +
			date.getDate() +
			' --  ' +
			date.getHours() +
			':' +
			date.getMinutes()
		)
	}
	function openInNewTab(url: string) {
		if (!browser) return
		const newWindow = window.open(url, '_blank')
		if (newWindow) newWindow.focus()
	}
</script>

<div class="bg-[oklch(var(--n))] rounded-xl p-2">
	<div class="overflow-x-auto">
		<table class="table table-zebra">
			<!-- head -->
			<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Release date</th>
					<th>File Size</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each data.postdata.Files as item}
					<tr>
						<th></th>
						<td>
							<h2 class="text-sm font-bold">{item.FileName}</h2>
						</td>
						<td>
							{yymmddtostring(item.ReleaseDate)}
						</td>
						{#if item.Size / 1204 > 1024}
							<td>{(item.Size / 1024 / 1024).toFixed(2)} MB</td>
						{:else}
							<td>{(item.Size / 1024).toFixed(2)} KB</td>
						{/if}
						<th>
							<button class="btn btn-success btn-outline btn-xs" on:click={() => openInNewTab(item.FilePath)}
								>Download</button
							>
						</th>
					</tr>
				{/each}
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Release date</th>
					<th>File Size</th>
					<th></th>
				</tr>
			</tfoot>
		</table>
	</div>
</div>
