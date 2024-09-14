<script lang="ts">
	import type { PageData } from './$types'
	import { applyAction, enhance } from '$app/forms'
	import toast from 'svelte-french-toast'

	export let data: PageData
</script>

<div class="flex flex-col">
	<form
		class="card-body"
		enctype="multipart/form-data"
		method="POST"
		use:enhance={({formData}) => {
      formData.append('serverid', data.serverid)
			return async ({result }) => {
				await applyAction(result)
				if (result.type !== 'success') {
          console.error(result)
					toast.error('something went wrong')
					return
				}
				toast.success('edit success')
			}
		}}
	>
		<div class="label">
			<span class="label-text">名稱</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				name="name"
				class="grow input input-bordered input-primary"
				placeholder="tnt duper"
				value={data.serverdata.Name}
			/>
		</label>
		<div class="label">
			<span class="label-text">伺服器ip</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				name="ip"
				class="grow input input-bordered input-primary"
				placeholder="tnt duper"
				value={data.serverdata.IP}
			/>
		</label>
		<div class="label">
			<span class="label-text">伺服器port</span>
		</div>
		<label class="flex items-center gap-2">
			<input
				type="text"
				name="port"
				class="grow input input-bordered input-primary"
				placeholder="tnt duper"
				value={data.serverdata.Port}
			/>
		</label>
		<div class="form-control mt-6">
			<button class="btn btn-primary">Update</button>
		</div>
	</form>
</div>
