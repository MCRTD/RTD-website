<script lang="ts">
	import Showcard from '../../showcard.svelte'
	export let data

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
		{#await data.props.user}
			<div class="main flex flex-row mt-4 gap-4">
				<div class="w-[280px] flex-shrink-0">
					<div class="infocards">
						<div class="skeleton h-4 w-28 mb-2"></div>
						<div class="skeleton w-24 h-24 rounded-full mb-2"></div>
						<div class="flex gap-2 mb-2">
							{#each Array(3) as _}
								<div class="skeleton w-8 h-8 rounded-full"></div>
							{/each}
						</div>
						<div class="skeleton h-4 w-20 mb-2"></div>
						<div class="skeleton h-4 w-16"></div>
					</div>
				</div>
				<div class="flex-grow">
					<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
						{#each Array(4) as _}
							<div class="skeleton h-28 w-full"></div>
						{/each}
					</div>
				</div>
			</div>
		{:then user}
			<div class="main flex flex-row mt-4 gap-4">
				<div class="w-[280px] flex-shrink-0">
					<div class="infocards">
						<p class="text-lg">{user.Username}</p>
						<div class="avatar">
							<div class="w-24 rounded-full">
								<img
									alt="user avatar"
									src={user.Avatar
										? user.Avatar
										: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'}
								/>
							</div>
						</div>
						<div class="flex">
							{#each socials as social}
								{#if user.Social[social.name]}
									<a href={user.Social[social.name]} target="_blank" rel="noopener noreferrer">
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
						{#each user.Litematicas as litematica}
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
		{/await}
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
