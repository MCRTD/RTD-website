<script lang="ts">
	import type { PageData } from './$types'

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
		{#await data.server then server}
			<div class="main flex flex-row mt-4 gap-4">
				<div class="w-[280px] flex-shrink-0">
					<div class="infocards">
						<p class="text-lg">{server.ServerName}</p>
						<div class="avatar">
							<div class="w-24 rounded-full">
								<img
									alt="user avatar"
									src={server.Avatar
										? server.Avatar
										: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'}
								/>
							</div>
						</div>
						<div class="flex">
							{#each socials as social}
								{#if server.Social[social.name]}
									<a href={server.Social[social.name]} target="_blank" rel="noopener noreferrer">
										<span class="{social.ui} text-2xl"></span>
									</a>
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="flex-grow">
					<div class="grid xl:grid-cols-2 grid-cols-1 gap-2">
						<!-- placeholder -->
					</div>
				</div>
			</div>
    {:catch error}
        <p>{error.message}</p>
    {/await}
	</div>
</section>
