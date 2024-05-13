<script lang="ts">
	import Markdown from 'svelte-exmarkdown'
	import { applyAction, enhance } from '$app/forms'
	import toast, { Toaster } from 'svelte-french-toast'
  import Tags from "svelte-tags-input"
	let md = ''
  let tags: string[]
	let agreen = false
	let cansubmit = (aagreen: Boolean) => {
		if (aagreen) {
			return true
		}
		return false
	}
</script>
<Toaster />
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col-reverse lg:flex-row-reverse items-start">
		<div class="text-center max-w-lg lg:text-left break-words">
			<h1 class="mb-5 text-5xl font-bold">Preview</h1>
			<Markdown {md} />
		</div>
		<div class="card w-full max-w-lg bg-base-100 m-auto">
			<form
				class="card-body"
				enctype="multipart/form-data"
				method="POST"
				use:enhance={({ formData }) => {
					formData.append('tags', tags.join(','))
					return async ({ result }) => {
						await applyAction(result)
            if (result.type !== 'success') {
              toast.error(result.data.error)
              return
            }
            toast.success('Login successful')
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
        />
      </label>
				<div class="label">
					<span class="label-text">檔案</span>
				</div>
				<input
					type="file"
					name="file"
					class="file-input file-input-bordered file-input-primary w-full max-w-xs"
				/>
				<div class="label">
					<span class="label-text">關於作品的介紹，可以使用markdown</span>
				</div>
				<textarea class="textarea textarea-primary" placeholder="Info" name="info" bind:value={md}
				></textarea>
				<div class="label">
					<span class="label-text">作者的id 使用,分隔</span>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						name="author"
						class="grow input input-bordered input-primary"
						placeholder="1,2"
					/>
				</label>
				<div class="label">
					<span class="label-text">伺服器ID (尚未完成)</span>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						class="grow input input-bordered input-primary"
						placeholder="伺服器"
						name="server"
						disabled
					/>
				</label>
				<div class="label">
					<span class="label-text">群組ID (尚未完成)</span>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						class="grow input input-bordered input-primary"
						placeholder="群組"
						name="group"
						disabled
					/>
				</label>
				<div class="label">
					<span class="label-text">標籤</span>
				</div>
        <div class="input input-primary p-0 !important">
          <div class="tags-input override">
            <Tags
              bind:tags={tags}
              maxTags={3}
              placeholder="Add Tag"
            />
          </div>
        </div>
				<div class="input input-bordered input-primary flex items-center gap-2">
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
				</div>
				<!-- <div class="label">
					<span class="label-text">標籤</span>
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
				</label> -->
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

<style>
	.tags-input.override :global(.svelte-tags-input-layout) {
		background: none;
    padding: 0%;
    border: none;
    border-color: #00000000;
	}

  .tags-input.override :global(.svelte-tags-input-layout:focus-within) {
    outline: none;
  }

	/* .tags-input.override :global(.svelte-tags-input-tag) {
		background-color: #00ff00;
		border-radius: 5px;
	} */
</style>