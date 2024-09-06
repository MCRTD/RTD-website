import type { PageServerLoad } from './$types'
import type { Actions } from './$types'
import servername from '$lib/data'
import { fail } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	const get_server_data = async () => {
		try {
			const data = await fetch(servername + '/api/node/', {
				headers: {
					Nodeid: '1'
				}
			})
			const json = await data.json()
			return json.servers[0]
		} catch (e) {
			console.error(e)
		}
	}
	const serverdata = await get_server_data()
	return {
		serverdata: serverdata,
		serverid: params.server_id
	}
}) satisfies PageServerLoad

export const actions = {
	default: async (event) => {
		const data = await event.request.formData()

		const name = data.get('name') as string
		const ip = data.get('ip') as string
		const port = data.get('port') as string
		const serverid = data.get('serverid') as string
		const password = 'password'
		let res
		try {
			res = await fetch(servername + '/api/node/', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					ID: parseInt(serverid),
					Ip: ip,
					Name: name,
					Password: password,
					Port: parseInt(port)
				})
			})
		} catch (e) {
			console.error(e)
			return fail(401, { error: e })
		}
		if (!res.ok) {
			const errorData = await res.json()
			console.error('Error:', errorData)
			return fail(401, { error: errorData.error })
		}

		const token = await res.json()
		return {
			status: 200,
			token
		}
	}
} satisfies Actions
