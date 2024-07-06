import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
	cookies.delete('reflashtoken', { path: '/' })
	cookies.delete('token', { path: '/' })
	throw redirect(302, '/')
}) satisfies PageServerLoad
