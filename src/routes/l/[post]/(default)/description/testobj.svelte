<script lang="ts">
	import { onMount } from 'svelte'
	import { useLoader } from '@threlte/core'

	import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
	import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
	import { InstancedMesh } from '@threlte/extras'
	import { Group } from 'three'

	import * as THREE from 'three'
	import { T } from '@threlte/core'
	import { OrbitControls } from '@threlte/extras'
	import { cameraControls, mesh } from '$lib/stores/stores'
	import CameraControls from './camera.svelte'

	export const ref = new Group()
	export let objdata
	let mtlpath = objdata.LitematicaObj.MtlFilePath.split('/')
	mtlpath = mtlpath.slice(0, -2)

	const { load } = useLoader(MTLLoader, {
		extend: async (loader) => {
			loader.setResourcePath(mtlpath.join('/') + '/texturepack' + '/vanilla/')
		}
	})
	const model = useLoader(OBJLoader, {
		extend: async (loader) => {
			const materials = await load(objdata.LitematicaObj.MtlFilePath as string)
			loader.setMaterials(materials)
		}
	}).load(objdata.LitematicaObj.ObjFilePath, {
		transform: (object) => {
			object.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					for (let material of child.material) {
						material.map.minFilter = THREE.NearestFilter
						material.map.magFilter = THREE.NearestFilter
						material.transparent = true
						material.blending = THREE.NormalBlending
					}
				}
			})
			return object
		}
	})
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 25]} lookAt.y={0}>
	<CameraControls
		on:create={({ ref }) => {
			$cameraControls = ref
		}}
	/>
	<OrbitControls enableZoom={true} />
</T.PerspectiveCamera>
<T.DirectionalLight position={[3, 10, 10]} />
<T.HemisphereLight intensity={0.2} />

{#if $model}
	<T is={$model} />
{/if}
