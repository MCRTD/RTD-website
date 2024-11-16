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
	const goTo = (event: Event) => {
		event.preventDefault()
		const btn = event.currentTarget as HTMLSelectElement
		const carousel = document.querySelector('.carousel')
		const href = btn.getAttribute('href')!
		if (carousel) {
			const target = carousel.querySelector<HTMLDivElement>(href)!
			const left = target.offsetLeft
			carousel.scrollTo({ left: left })
		}
	}
</script>

<div class="bg-[oklch(var(--n))] rounded-xl p-2">
	<div class="carousel w-full max-h-[500px] h-full overflow-hidden">
		{#if data.postdata.Files[0].LitematicaObj.ObjFilePath != ''}
			<div id="obj" class="carousel-item w-full relative">
				<Canvas>
					<Obj objdata={data.postdata.Files[0]} />
				</Canvas>
			</div>
		{/if}
		{#each data.postdata.Images as image, i}
			<div id="item{i}" class="carousel-item w-full relative">
				<img src={image.ImagePath} class="w-full h-full object-contain mx-auto" alt="litematica" />
			</div>
		{/each}
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		{#if data.postdata.Files[0].LitematicaObj.ObjFilePath != ''}
			{#if data.postdata.Images.length > 0}
				<a href="#obj" class="btn btn-xs">1</a>
			{/if}
			{#each data.postdata.Images as image, i}
				<a href={`#item${i}`} class="btn btn-xs" on:click={goTo}>{i + 2}</a>
			{/each}
		{:else}
			{#each data.postdata.Images as image, i}
				<a href={`#item${i}`} class="btn btn-xs" on:click={goTo}>{i + 1}</a>
			{/each}
		{/if}
	</div>
	<div class="markdown">
		<Markdown {md} {plugins} />
	</div>
</div>
