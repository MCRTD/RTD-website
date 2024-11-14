<script lang="ts">
	import toast from 'svelte-french-toast'
	import servername from '$lib/data'
	export let data

	async function handleImageUpload(event: Event) {
		const input = event.target as HTMLInputElement
		if (!input.files?.length) return

		const formData = new FormData()
		formData.append('image', input.files[0])
		formData.append('LitematicaID', data.posts.ID)

		try {
			const response = await fetch(servername + '/api/litematica/image', {
				method: 'POST',
				body: formData
			})
			if (!response.ok) throw new Error('Upload failed')
			toast.success('圖片上傳成功')
			location.reload()
		} catch (error) {
			toast.error('圖片上傳失敗')
		}
	}

	async function handleImageDelete(imageId: number) {
		if (!confirm('確定要刪除此圖片？')) return

		try {
			const response = await fetch(`${servername}/api/litematica/image`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ImageID: imageId })
			})
			if (!response.ok) throw new Error('Delete failed')
			toast.success('圖片刪除成功')
			location.reload()
		} catch (error) {
			toast.error('圖片刪除失敗')
		}
	}
</script>

<div class="max-w-4xl mx-auto p-4">
	<h1 class="text-2xl font-bold mb-4">圖片管理</h1>

	<div class="carousel w-full h-96 bg-base-200 rounded-box mb-4">
		{#if data.posts.Images && data.posts.Images.length > 0}
			{#each data.posts.Images as image, i}
				<div id="slide{i}" class="carousel-item relative w-full group">
					<img src={image.ImagePath} class="w-full h-full object-contain" alt="作品圖片 {i + 1}" />
					<div
						class="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					>
						<a
							href="#slide{i === 0 ? data.posts.Images.length - 1 : i - 1}"
							class="btn btn-circle bg-base-200 bg-opacity-50 hover:bg-opacity-75"
						>
							❮
						</a>
						<div class="absolute top-4 right-4">
							<button
								class="btn btn-error btn-circle btn-sm bg-opacity-70 hover:bg-opacity-50"
								on:click={() => handleImageDelete(image.ID)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
            </div>
						<a
							href="#slide{i === data.posts.Images.length - 1 ? 0 : i + 1}"
							class="btn btn-circle bg-base-200 bg-opacity-50 hover:bg-opacity-75"
						>
							❯
						</a>
					</div>
				</div>
			{/each}
		{:else}
			<div class="w-full h-full flex items-center justify-center">
				<p class="text-lg text-gray-500">尚無圖片</p>
			</div>
		{/if}
	</div>

	<div class="form-control">
		<label class="label" for="image-upload">
			<span class="label-text">上傳新圖片</span>
		</label>
		<input
			id="image-upload"
			type="file"
			accept="image/*"
			on:change={handleImageUpload}
			class="file-input file-input-bordered file-input-primary w-full"
		/>
	</div>
</div>
