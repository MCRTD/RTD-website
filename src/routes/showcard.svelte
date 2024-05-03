<script lang="ts">
    export let image: string = ""
    export let tags: string[] = []
    export let author: string[] = []
    export let download: number = 0
    export let vote: number = 0
</script>

<div class="flex flex-col items-center">
    <div class="flex-1">
        <img src={image} alt="Litematica" class="object-cover max-h-60" />
    </div>
    <div class="w-full">
        <p>Tags: {tags.join(", ")}</p>
    </div>
    <div class="w-full">
        <p>Author: {author.join(", ")}</p>
    </div>
    <div class="w-full">
        <p>Download: {download}</p>
    </div>
    <div class="w-full">
        <p>Vote: {vote}</p>
    </div>
</div>