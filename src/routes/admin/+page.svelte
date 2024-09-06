<script lang="ts">
	import { goto } from '$app/navigation'
    import type { PageData } from './$types';

    export let data: PageData;
    console.log(data);
</script>

<div>
  <p>admin page</p>
  <button class="btn btn-primary btn-sm" on:click={() => goto('admin/parser_server')}>藍圖伺服器管理</button>
</div>