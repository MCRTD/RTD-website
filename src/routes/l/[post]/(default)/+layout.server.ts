import type { LayoutServerLoad } from './$types'
import servername from '$lib/data'

export const load: LayoutServerLoad = async ({ params }) => {
	const getpost = async () => {
		try {
			const data = await fetch(servername + '/api/litematica/', {
				headers: {
					LitematicaID: params.post
				}
			})
			const json = await data.json()
			return json.servers[0]
		} catch (e) {
			console.error(e)
		}
	}
	const postdata = await getpost()
	return {
		postdata: postdata,
		post: params.post
	}
}
