<script lang="ts">
	import { onMount } from 'svelte'
	import { useLoader } from '@threlte/core'

	import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
	import { InstancedMesh } from '@threlte/extras'
	import { Group } from 'three'

	import * as THREE from 'three'
	import { T } from '@threlte/core'
	import { OrbitControls } from '@threlte/extras'

	export const ref = new Group()

	// const avatar = useLoader(OBJLoader).load(
	// 	'https://threejs.org/examples/models/obj/male02/male02.obj',
	// 	{
	// 		transform: (object) => {
	// 			object.traverse((child) => {
	// 				if (child instanceof THREE.Mesh) {
	// 					const shinyMaterial = new THREE.MeshStandardMaterial({
	// 						map: child.material.map,
	// 						color: 0xffffff,
	// 						roughness: 0.0,
	// 						metalness: 0.2
	// 					});

	// 					child.material = shinyMaterial;
	// 				}
	// 			});
	// 			return object;
	// 		}
	// 	}
	// );
	const model = useLoader(OBJLoader).load(
		'https://threejs.org/examples/models/obj/male02/male02.obj'
	)
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 25]} lookAt.y={0}>
	<OrbitControls enableZoom={true} />
</T.PerspectiveCamera>
<T.DirectionalLight position={[3, 10, 10]} />
<T.HemisphereLight intensity={0.2} />

{#if $model}
	<T is={$model} />
{/if}
