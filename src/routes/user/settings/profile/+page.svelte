<script lang="ts">
	import type { PageData } from './$types'
	import { onMount } from 'svelte'
  import { browser } from '$app/environment'
	export let data: PageData
	const { userdata } = data
	let username = ''
	let email = ''
  let Description = ''
	const Save_user_data = async () => {
    try{
      await fetch('http://localhost:3000/api/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Username: username,
          Email: email,
          Description: Description,
          cookie: browser ? document.cookie : ''
        },
        body: JSON.stringify({ username, email })
      })
    }catch(e){
      console.error(e)
    }
	}

	onMount(async () => {
		const user = await userdata()
		username = user.Username
		email = user.Email
    Description = user.Description
	})
</script>

<div>
	<h3 class="text-lg font-medium">Profile</h3>
</div>

<div class="flex flex-col bg-base-200 p-4 mb-2">
	<div class="p-4">
		<div class="flex-none w-48 relative mb-3">
			<h2 class="text-lg font-medium">UserData</h2>
		</div>
		<div class="flex-auto">
      <div class="label">
        <span class="label-text">用戶名稱</span>
      </div>
			<input
				type="text"
				placeholder="Email"
				class="input input-bordered w-full max-w-xs mb-2"
				bind:value={username}
			/>
      <div class="label">
        <span class="label-text">電子郵件</span>
      </div>
			<input
				type="text"
				placeholder="Username"
				class="input input-bordered w-full max-w-xs"
				bind:value={email}
			/>
      <div class="label">
        <span class="label-text">個人介紹</span>
      </div>
			<input
				type="text"
				placeholder="Description"
				class="input input-bordered w-full max-w-xs"
				bind:value={Description}
			/>
		</div>
	</div>
	<button class="btn btn-primary ml-auto" on:click={() => {Save_user_data()}}>Save</button>
</div>

<div class="flex flex-col bg-base-200 p-4 mb-2">
	<div class="p-4">
		<div class="flex-none w-48 relative mb-3">
			<h2 class="text-lg font-medium">Password</h2>
		</div>
		<div class="flex-auto">
			<input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs mb-2" />
			<input
				type="text"
				placeholder="Password again"
				class="input input-bordered w-full max-w-xs"
			/>
		</div>
	</div>
	<button class="btn btn-primary ml-auto">Save</button>
</div>

<div class="flex bg-base-200 p-4 items-center mb-2">
	<div class="flex-none w-48 relative p-4">
		<h2 class="text-lg font-medium">Third-party account</h2>
	</div>
	<div class="flex-auto p-6">
		<div class="flex">
			<p>gogole</p>
		</div>
	</div>
</div>
