import { redirect } from '@sveltejs/kit'
import type { PageLoadEvent } from './$types'

export async function load(event: PageLoadEvent) {
	const { user } = await event.parent()
	if (user) {
		redirect(302, '/')
	}
}
