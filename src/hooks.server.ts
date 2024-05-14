import type { Handle } from '@sveltejs/kit'
import { jwtDecode, type JwtPayload } from 'jwt-decode'
import { locale } from 'svelte-i18n'

interface jwt extends JwtPayload {
	userid: string
}

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0]
	if (lang) {
		locale.set(lang)
	}
	const cookie_token = event.cookies.get('reflashtoken') as string
	if (cookie_token) {
		try {
			const decoded = jwtDecode<jwt>(cookie_token)
			if (decoded && decoded.exp && decoded.exp > Date.now() / 1000) {
				event.locals.user = {
					id: decoded.userid
				}
			}
		} catch (error) {
			console.error('Failed to decode JWT:', error)
		}
	}

	return resolve(event)
}
