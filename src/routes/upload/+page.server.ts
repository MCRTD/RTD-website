import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()

		const file = data.get('file') as File
		const info = data.get('info') as string
		const author = data.get('author') as string
		// const server = data.get('server') as string
		// const group = data.get('group') as string
		const tags = data.get('tags') as string
		const name = data.get('name') as string

		const formData = new FormData()

		formData.append('litematica', file)

		const cookies = event.cookies.getAll()
		let cookie = ''
		for (const cookieObj of cookies) {
			cookie += `${cookieObj.name}=${cookieObj.value}; `
		}
		console.log(cookie)

		const res = await fetch(servername + '/api/litematica', {
			method: 'POST',
			headers: {
				Description: info,
				GroupId: -1,
				ServerId: -1,
				Name: name,
				Tags: tags,
				Author: author,
				cookie: cookie
			},
			body: formData
		})
		console.log(res)
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
} satisfies Actions
