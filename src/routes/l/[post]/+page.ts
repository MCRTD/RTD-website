import { error, redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
export const load: PageLoad = ({ url }) => {
	if (url.pathname.split('/')[1] === 'l') {
		redirect(302, '/l/' + url.pathname.split('/')[2] + '/description')
	}

	error(404, 'Not found')
}
