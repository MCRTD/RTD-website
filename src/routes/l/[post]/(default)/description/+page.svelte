<script lang="ts">
	import Markdown from 'svelte-exmarkdown'
	import { Canvas } from '@threlte/core'
	import Obj from './litematicaobj.svelte'
	import rehypeHighlight from 'rehype-highlight'
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'
	import type { Plugin } from 'svelte-exmarkdown'
	const plugins: Plugin[] = [
		{
			rehypePlugin: [rehypeHighlight]
		},
		gfmPlugin()
	]
	export let data
	let md = data.postdata.Description
</script>

<div class="bg-[oklch(var(--n))] rounded-xl p-2">
	<div class="carousel w-full max-h-[500px]">
		{#if data.postdata.Files[0].LitematicaObj.ObjFilePath != ''}
			<div id="obj" class="carousel-item w-full">
				<Canvas>
					<Obj objdata={data.postdata.Files[0]} />
				</Canvas>
			</div>
		{/if}
		{#each data.postdata.Images as image, i}
			<div id="item{i}" class="carousel-item w-full">
				<img src={image.ImagePath} class="w-full object-scale-down" alt="litematica" />
			</div>
		{/each}
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		{#if data.postdata.Files[0].LitematicaObj.ObjFilePath != ''}
			<a href="#obj" class="btn btn-xs">1</a>
			{#each data.postdata.Images as image, i}
				<a href={`#item${i}`} class="btn btn-xs">{i + 2}</a>
			{/each}
		{:else}
			{#each data.postdata.Images as image, i}
				<a href={`#item${i}`} class="btn btn-xs">{i + 1}</a>
			{/each}
		{/if}
	</div>
	<div class="markdown">
		<Markdown {md} {plugins} />
	</div>
</div>
