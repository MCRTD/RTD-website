import servername from '$lib/data'
import { browser } from '$app/environment'

export const load = async () => {
	const getposts = async () => {
		if (browser) {
			try {
				const data = await fetch(servername + '/api/litematica')
				if (!data.ok) {
					throw new Error(`HTTP error! status: ${data.status}`)
				}
				const json = await data.json()
				return json
			} catch (e) {
				console.error(e)
				throw new Error(`Failed to fetch posts`)
			}
		} else {
			return []
		}
	}

	return {
		posts: getposts()
	}
}
