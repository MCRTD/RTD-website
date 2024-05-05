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
				src="https://cdn.discordapp.com/attachments/1105452240292040806/1236626907781402644/Screenshot_2024-05-05-17-14-16-73_090d9ae461b065ca11c329abb9cd0d70.jpg?ex=6638b20e&is=6637608e&hm=17583d82f6ea57b08cf6b8d0769668f32d2fcf2581e72368f7c4366dab924944&"
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
