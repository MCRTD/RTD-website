<script lang="ts">
	import type { LayoutData } from './$types'
  import { browser } from '$app/environment';

	export let data: LayoutData
  let checking = true
  if (browser) {
    if (!data.userdata || !data.userdata.Admin) {
      location.href = '/'
    }else{
      checking = false
    }
  }
</script>

{#if checking}
  <div class="fixed inset-0 flex items-center justify-center bg-base-300 bg-opacity-50 z-50">
    <div class="text-center">
      <div class="loading loading-spinner loading-lg"></div>
      <p class="mt-4 text-lg font-semibold">Checking permissions...</p>
    </div>
  </div>
{:else}
  <slot />
{/if}
