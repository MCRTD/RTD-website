<script lang="ts">
	import Showcard from '../../showcard.svelte'
	export let data
	console.log(data)

	const socials = [
		{
			name: 'Discord',
			ui: 'icon-[bi--discord]'
		},
		{
			name: 'Twitter',
			ui: 'icon-[mdi--twitter]'
		},
		{
			name: 'YouTube',
			ui: 'icon-[mdi--youtube]'
		},
		{
			name: 'Instagram',
			ui: 'icon-[mdi--instagram]'
		},
		{
			name: 'Telegram',
			ui: 'icon-[mdi--telegram]'
		}
	]
</script>

<section class="flex flex-row max-w-[1300px] mx-auto justify-center">
	<div class="mainshow px-4 flex-grow max-w-[1100px]">
		<div class="main flex flex-row mt-4 gap-4">
			<div class="w-[280px] flex-shrink-0">
				<div class="infocards">
					<p class="text-lg">{data.userdata.Username}</p>
					<div class="avatar">
						<div class="w-24 rounded-full">
							<img src={data.userdata.Avatar} alt="avatar" />
						</div>
					</div>
					<div class="flex">
						{#each socials as social}
							{#if data.userdata.Social[social.name]}
								<a
									href={data.userdata.Social[social.name]}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span class="{social.ui} text-2xl"></span>
								</a>
							{/if}
						{/each}
					</div>
					<div class="flex">
						<p>伺服器</p>
					</div>
					<div class="flex">
						<p>群組</p>
					</div>
				</div>
			</div>
			<div class="flex-grow">
				<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
					{#each data.userdata.Litematicas as litematica}
						<div>
							<Showcard
								image="https://pbs.twimg.com/media/GNOM-TkbgAA2OjU?format=jpg&name=small"
								tags={litematica.Tags.split(',')}
								ID={litematica.ID}
								vote={litematica.vote}
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.infocards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: oklch(var(--n));
		color: oklch(var(--nc));
		padding: 1rem;
		border-radius: 0.5rem;
		align-items: center;
	}
</style>
