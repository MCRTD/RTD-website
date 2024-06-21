import { error, redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
export const load: PageLoad = ({url}) => {
	if (url.pathname.split('/')[2] === 'settings') {
		redirect(302, '/user/settings/profile')
	}
}
