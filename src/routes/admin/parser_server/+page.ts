import type { PageLoad } from './$types'
import { browser } from '$app/environment'
import servername from '$lib/data'

export const load = (async () => {
	interface Node {
		ip: string
		name: string
		password: string
		poet: string
	}

	const getservers = async () => {
		if (browser) {
			try {
				const data = await fetch(servername + '/api/node')
				if (!data.ok) {
					throw new Error(`HTTP error! status: ${data.status}`)
				}
				const json = await data.json()
				return json['servers']
			} catch (e) {
				console.error(e)
				throw new Error(`Failed to fetch servers`)
			}
		}
		return []
	}
	const addserver = async (server: Node) => {
		if (browser) {
			try {
				const data = await fetch(servername + '/api/node', {
					method: 'POST',
					headers: {
            'ip': server.ip,
            'name': server.name,
            'password': server.password,
            'poet': server.poet,
					},
				})
				if (!data.ok) {
					throw new Error(`HTTP error! status: ${data.status}`)
				}
				return true
			} catch (e) {
				console.error(e)
				throw new Error(`Failed to add server`)
			}
		}
		return false
	}
	return {
		servers: getservers(),
		addserver: addserver
	}
}) satisfies PageLoad
