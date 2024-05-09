<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	let md = '# Hello world!';
    import { Canvas } from '@threlte/core'
    import Scene from './testthree.svelte'
    import Obj from './testobj.svelte'
</script>

<div class="bg-[oklch(var(--n))] rounded-xl p-2">
	<div class="carousel w-full max-h-[500px]">
		<div id="item1" class="carousel-item w-full">
			<!-- svelte-ignore a11y-missing-attribute -->
            <Canvas>
                <Scene/>
            </Canvas>
		</div>
		<div id="item2" class="carousel-item w-full">
			<!-- svelte-ignore a11y-missing-attribute -->
            <Canvas>
                <Obj/>
            </Canvas>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div id="item3" class="carousel-item w-full">
			<img
				src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
				class="w-full object-scale-down"
			/>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div id="item4" class="carousel-item w-full">
			<img
				src="https://im.bahamut.com.tw/chatimg%2Faa2b637504f093b18ab7867dab55bf8c.jpeg?alt=media"
				class="w-full object-scale-down"
			/>
		</div>
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		<a href="#item1" class="btn btn-xs">1</a>
		<a href="#item2" class="btn btn-xs">2</a>
		<a href="#item3" class="btn btn-xs">3</a>
		<a href="#item4" class="btn btn-xs">4</a>
	</div>
	<div class="">
		<Markdown {md} />
	</div>
</div>
