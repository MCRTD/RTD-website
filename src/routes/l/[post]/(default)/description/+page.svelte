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
		<div id="item3" class="carousel-item w-full">
			<img
				src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
				class="w-full object-scale-down"
				alt="litematica"
			/>
		</div>

		<div id="item4" class="carousel-item w-full">
			<img
				src="https://im.bahamut.com.tw/chatimg%2Faa2b637504f093b18ab7867dab55bf8c.jpeg?alt=media"
				class="w-full object-scale-down"
				alt="litematica"
			/>
		</div>
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		{#if data.postdata.Files[0].LitematicaObj.ObjFilePath != ''}
			<a href="#obj" class="btn btn-xs">1</a>
			<a href="#item3" class="btn btn-xs">2</a>
			<a href="#item4" class="btn btn-xs">3</a>
		{:else}
			<a href="#item3" class="btn btn-xs">1</a>
			<a href="#item4" class="btn btn-xs">2</a>
		{/if}
	</div>
	<div class="markdown">
		<Markdown {md} {plugins} />
	</div>
</div>
