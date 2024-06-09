<script lang="ts">
	import Markdown from 'svelte-exmarkdown'
	import { applyAction, enhance } from '$app/forms'
	import toast, { Toaster } from 'svelte-french-toast'
	import Tags from 'svelte-tags-input'
	import type { Plugin } from 'svelte-exmarkdown'
	import rehypeHighlight from 'rehype-highlight'
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'
	import 'highlight.js/styles/atom-one-dark.css'
	let tags: string[]
	export let data
	tags = data && data.posts && data.posts.Tags ? data.posts.Tags.split(',') : []
	let md = data.posts.Description
	const plugins: Plugin[] = [
		{
			rehypePlugin: [rehypeHighlight]
		},
		gfmPlugin()
	]
</script>

<Toaster />
<div class="hero min-h-screen">
	<div class="hero-content flex-col-reverse lg:flex-row-reverse items-start max-w-[1300px]">
		<div class="text-center max-w-xl lg:text-left break-words inline-block">
			<h1 class="mb-5 text-5xl font-bold">Preview</h1>
			<div class="markdown">
				<Markdown {md} {plugins} />
			</div>
		</div>
		<div class="card bg-base-200 m-auto">
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
				<div class=" w-[400px]"></div>
				<div class="label">
					<span class="label-text">名稱</span>
				</div>
				<label class="flex items-center gap-2">
					<input
						type="text"
						name="name"
						class="grow input input-bordered input-primary"
						placeholder="tnt duper"
						value={data.posts.LitematicaName}
					/>
				</label>
				<div class="label">
					<span class="label-text">關於作品的介紹，可以使用markdown</span>
				</div>
				<textarea class="textarea textarea-primary" placeholder="Info" name="info" bind:value={md}
				></textarea>
				<div class="label">
					<span class="label-text">檔案</span>
				</div>
				<input
					type="file"
					name="file"
					accept=".jpg, .png, .jpeg, .gif,"
					multiple={true}
					class="file-input file-input-bordered file-input-primary w-full"
				/>
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
						<Tags bind:tags maxTags={3} placeholder="Add Tag" value={['w']} />
					</div>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary">Update</button>
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
</style>
