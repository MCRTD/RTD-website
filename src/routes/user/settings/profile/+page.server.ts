import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()
		const id = data.get('id') as string

		if (id === 'userinfo') {
			const username = data.get('username') as string
			const email = data.get('email') as string
			const description = data.get('description') as string

			const cookies = event.cookies.getAll()
			let cookie = ''
			for (const cookieObj of cookies) {
				cookie += `${cookieObj.name}=${cookieObj.value}; `
			}
			const res = await fetch(servername + '/api/user', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					cookie: cookie
				},
				body: JSON.stringify({
					Username: username,
					Email: email,
					Description: description
				})
			})
			if (!res.ok) {
				const status = await res.json()
				return fail(401, { error: status.detail })
			}
			const token = await res.json()
			return {
				status: 200,
				body: {
					token
				}
			}
		} else if (id === 'userpassword') {
			const password = data.get('password') as string

			const cookies = event.cookies.getAll()
			let cookie = ''
			for (const cookieObj of cookies) {
				cookie += `${cookieObj.name}=${cookieObj.value}; `
			}
			const res = await fetch(servername + '/api/user/password', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					cookie: cookie
				},
				body: JSON.stringify({
					Password: password
				})
			})
			if (!res.ok) {
				const status = await res.json()
				return fail(401, { error: status.detail })
			}
			const token = await res.json()
			return {
				status: 200,
				body: {
					token
				}
			}
		} else if (id === 'useravatar') {
			const avatar = data.get('avatar') as File
			const formData = new FormData()
			formData.append('avatar', avatar)
			const cookies = event.cookies.getAll()
			let cookie = ''
			for (const cookieObj of cookies) {
				cookie += `${cookieObj.name}=${cookieObj.value}; `
			}
			const res = await fetch(servername + '/api/user/avatar', {
				method: 'POST',
				headers: {
					cookie: cookie
				},
				body: formData
			})
			if (!res.ok) {
				const status = await res.json()
				return fail(401, { error: status.detail })
			}
			const token = await res.json()
			return {
				status: 200,
				body: {
					token
				}
			}
		}
	}
} satisfies Actions
