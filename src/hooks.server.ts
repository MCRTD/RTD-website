import {sequence} from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import type { Handle, HandleFetch } from '@sveltejs/kit'
import { jwtDecode, type JwtPayload } from 'jwt-decode'
import { locale } from 'svelte-i18n'

Sentry.init({
    dsn: "https://41283f0a6bff13c0c019d4d542c6e785@o1362810.ingest.us.sentry.io/4507554758197248",
    tracesSampleRate: 1
})

interface jwt extends JwtPayload {
				userid: string
}

export const handle: Handle = sequence(Sentry.sentryHandle(), async ({ event, resolve }) => {
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
})

export const handleFetch = (async ({ event, request, fetch }) => {
				// const cookies = event.request.headers.get('cookie')

				request.headers.set(
								'cookie',
								event.cookies
												.getAll()
												.filter(({ value }) => value !== '')
												.map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
												.join('; ')
				)
				console.log('Cookies Are : ')
				console.log(request.headers)
				return fetch(request)
}) satisfies HandleFetch
export const handleError = Sentry.handleErrorWithSentry();