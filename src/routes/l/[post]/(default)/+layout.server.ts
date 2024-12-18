import type { LayoutServerLoad } from './$types'
import servername from '$lib/data'

export const load: LayoutServerLoad = async ({ params }) => {
	const getpost = async () => {
		try {
			const data = await fetch(servername + '/api/litematica/?LitematicaID=' + params.post, {})
			const json = await data.json()
			return json.litematicas[0]
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
