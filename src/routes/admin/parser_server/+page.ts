import type { PageLoad } from './$types'
import { browser } from '$app/environment'
import servername from '$lib/data'
import type { Node } from './servertype'
import toast from 'svelte-french-toast'
export const load = (async () => {
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
						ip: server.ip,
						name: server.name,
						password: server.password,
						port: server.port
					}
				})
				if (!data.ok) {
          toast.error('Failed to add server'+data.status)
          const body = await data.text()
					throw new Error(`HTTP error! status: ${data.status} ${body}`)
				}
				return true
			} catch (e) {
        toast.error('Something went wrong'+e)
				throw new Error('Failed to add server'+e)
			}
		}
		return false
	}
	return {
		servers: getservers(),
		addserver: addserver
	}
}) satisfies PageLoad
