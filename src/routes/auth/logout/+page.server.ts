import type { PageServerLoad } from './$types'
import { invalidateAll } from '$app/navigation'
import { redirect } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
	cookies.delete('reflashtoken', { path: '/' })
	cookies.delete('token', { path: '/' })
  invalidateAll()
	throw redirect(302, '/')
}) satisfies PageServerLoad
