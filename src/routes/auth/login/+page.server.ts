import type { CookieSerializeOptions } from 'cookie'
import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'
import scp from 'set-cookie-parser'
import { dev } from '$app/environment'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()

		const username = data.get('username') as string
		const password = data.get('password') as string

		const res = await fetch(servername + '/api/user/login', {
			headers: {
				username: username,
				password: password
			}
		})
		if (!res.ok) {
			return fail(401, { error: 'Failed to login' })
		}
		const setCookie = res.headers.get('set-cookie')
		if (setCookie) {
			const splitCookieHeaders = scp.splitCookiesString(setCookie)
			const parsed = scp.parse(splitCookieHeaders)
			parsed.forEach((cookie) => {
				event.cookies.set(cookie.name, cookie.value, {
					secure: !dev,
					...cookie,
					path: cookie.path || '/',
					sameSite: cookie.sameSite as CookieSerializeOptions['sameSite']
				})
			})
		}

		const token = await res.json()
		return {
			status: 200,
			body: {
				token
			}
		}
	}
} satisfies Actions
