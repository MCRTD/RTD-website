import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()

		const username = data.get('username') as string
		const email = data.get('email') as string
		const password = data.get('password') as string
		let res
		try {
			res = await fetch(servername + '/api/user/register', {
				method: 'POST',
				headers: {
					username: username,
					password: password,
					email: email
				}
			})
		} catch (e) {
			return fail(401, { error: 'Server Error' })
		}
		if (!res.ok) {
			return fail(401, { error: 'Failed to Register' })
		}

		const token = await res.json()
		return {
			status: 200,
			token
		}
	}
} satisfies Actions
