<script lang="ts">
	import { useLoader } from '@threlte/core'

	import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
	import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
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
						if (material.map) {
              console.log(material.map);
							material.map.minFilter = THREE.NearestFilter
							material.map.magFilter = THREE.NearestFilter
						}
            material.side = THREE.DoubleSide
						material.transparent = true
						material.blending = THREE.NormalBlending
            material.alphaTest = 0.5
					}
				}
			})
			return object
		}
	})
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 25]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0)
	}}
>
	<CameraControls
    autoRotate={true}
		on:create={({ ref }) => {
			$cameraControls = ref
		}}
	/>
	<OrbitControls enableZoom={true} />
</T.PerspectiveCamera>
<T.DirectionalLight position={[3, 10, 10]} intensity={1.5} /> <!-- 增加方向光的強度 -->
<T.HemisphereLight intensity={0.5} /> <!-- 增加半球光的強度 -->

{#await model}
<p>Loading...</p>
{:then model}
	<T
		is={model}
		on:create={({ ref }) => {
			$mesh = ref
			$cameraControls.fitToSphere(ref, true)
		}}
	/>
{/await}
