import type { PageLoad } from './$types'
import servername from '$lib/data'
import { browser } from '$app/environment'

export const load: PageLoad = async ({ params, fetch }) => {
	const getposts = async () => {
		if (browser) {
			try {
				const data = await fetch(servername + '/api/litematica?LitematicaID=' + params.post)
				if (!data.ok) {
					throw new Error(`HTTP error! status: ${data.status}`)
				}
				const json = await data.json()
				return json.litematicas[0]
			} catch (e) {
				console.error(e)
				throw new Error(`Failed to fetch posts`)
			}
		} else {
			return {}
		}
	}
	const postdata = await getposts()
	return {
		posts: postdata
	}
}
