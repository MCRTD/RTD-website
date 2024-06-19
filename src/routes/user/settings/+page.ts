import { error, redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
export const load: PageLoad = ({ url }) => {
	if (url.pathname.split('/')[1] === 'settings') {
		redirect(302, '/settings/profile')
	}

	error(404, 'Not found')
}
