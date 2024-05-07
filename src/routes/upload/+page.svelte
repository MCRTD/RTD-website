<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	let md = '';
    let agreen = false
	let cansubmit = (aagreen:Boolean) => {
        if (aagreen) {
            return true
        }
        return false
    }
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col-reverse lg:flex-row-reverse items-start">
		<div class="text-center max-w-lg lg:text-left break-words">
			<h1 class="mb-5 text-5xl font-bold">Preview</h1>
			<Markdown {md} />
		</div>
		<div class="card w-full max-w-lg bg-base-100 m-auto">
			<form class="card-body">
				<div class="label">
					<span class="label-text"
						>檔案詳細檔案詳細檔案詳細檔案詳細檔案詳細檔案詳細檔案詳細檔案詳細檔案詳細</span
					>
				</div>
				<input
					type="file"
					class="file-input file-input-bordered file-input-primary w-full max-w-xs"
				/>
				<div class="label">
					<span class="label-text"
						>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</span
					>
				</div>
				<textarea class="textarea textarea-primary" placeholder="Info" bind:value={md}
				></textarea>
				<div class="label">
					<span class="label-text"
						>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</span
					>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						class="grow input input-bordered input-primary"
						placeholder="其他作者"
					/>
				</label>
				<div class="label">
					<span class="label-text"
						>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</span
					>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						class="grow input input-bordered input-primary"
						placeholder="伺服器"
						disabled
					/>
				</label>
				<div class="label">
					<span class="label-text"
						>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</span
					>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						class="grow input input-bordered input-primary"
						placeholder="群組"
						disabled
					/>
				</label>
				<div class="label">
					<span class="label-text"
						>詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</span
					>
				</div>
				<label class="input input-bordered input-primary flex items-center gap-2">
					<input type="text" class="grow" placeholder="Add Tag" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="w-4 h-4 opacity-70"
						><path
							fill-rule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clip-rule="evenodd"
						/></svg
					>
				</label>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="label-text">同意條款</span>
						<input type="checkbox" class="checkbox" bind:checked={agreen} />
					</label>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" disabled={!cansubmit(agreen)}>Register</button>
				</div>
			</form>
		</div>
	</div>
</div>
