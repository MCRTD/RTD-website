import type { PageServerLoad } from './$types'

import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()

		const litematicaname = data.get('name') as string
		const lietmaticaID = data.get('lietmaticaID') as string
		const info = data.get('info') as string
		// const author = data.get('author') as string
		// const server = data.get('server') as string
		// const group = data.get('group') as string
		const tags = data.get('tag') as string

		const cookies = event.cookies.getAll()
		let cookie = ''
		for (const cookieObj of cookies) {
			cookie += `${cookieObj.name}=${cookieObj.value}; `
		}

		const res = await fetch(servername + '/api/litematica', {
			method: 'PATCH',
			headers: {
				Description: info,
				GroupId: '-1',
				ServerId: '-1',
				LitematicaName: litematicaname,
				LitematicaID: lietmaticaID,
				Tags: tags,
				// Author: author,
				cookie: cookie
			}
		})
		if (!res.ok) {
			const status = await res.json()
			return fail(401, { error: status.detail })
		}
		const resdata = await res.json()
		return {
			status: 200,
			body: {
				resdata
			}
		}
	}
} satisfies Actions

export const load = (async () => {
	return {}
}) satisfies PageServerLoad
