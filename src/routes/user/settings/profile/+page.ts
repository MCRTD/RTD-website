import type { PageLoad } from './$types'
import { browser } from '$app/environment'
import servername from '$lib/data'
import session from '$lib/stores/session'
import { get } from 'svelte/store'

export const load = (async (event) => {
	const parent_user = (await event.parent())?.user
	const session_user = get(session)?.user
	const user = session_user || parent_user
	const getuserdata = async () => {
		if (browser) {
			try {
				const data = await fetch(servername + '/api/user?user=' + user.id, {
					method: 'GET'
				})
				if (!data.ok) {
					throw new Error(`HTTP error! status: ${data.status}`)
				}
				const json = await data.json()
				return json.Users[0]
			} catch (e) {
				console.error(e)
				throw new Error(`Failed to fetch user`)
			}
		} else {
			return false
		}
	}
	return {
		userdata: getuserdata,
	}
}) satisfies PageLoad
