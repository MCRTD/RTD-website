<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div>
	<h3 class="text-lg font-medium">Profile</h3>
</div>

<div class="flex flex-col bg-base-200 p-4 items-center mb-2">
  <div class="flex">
    <div class="flex-none w-48 relative p-4 ">
      <h2 class="text-lg font-medium">UserData</h2>
    </div>
    <div class="flex-auto p-6">
      <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Username" class="input input-bordered w-full max-w-xs" />
    </div>
  </div>
  <button class="btn btn-primary ml-auto">Save</button>
</div>
<div class="flex flex-col bg-base-200 p-4 items-center mb-2">
  <div class="flex">
    <div class="flex-none w-48 relative p-4 ">
      <h2 class="text-lg font-medium">Password</h2>
    </div>
    <div class="flex-auto p-6">
      <input type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Password again" class="input input-bordered w-full max-w-xs" />
    </div>
  </div>
  <button class="btn btn-primary ml-auto">Save</button>
</div>
<div class="flex bg-base-200 p-4 items-center mb-2">
  <div class="flex-none w-48 relative p-4 ">
    <h2 class="text-lg font-medium">Third-party account</h2>
  </div>
  <div class="flex-auto p-6">
    <div class="flex">
      <p>gogole</p>
    </div>
  </div>
</div>

