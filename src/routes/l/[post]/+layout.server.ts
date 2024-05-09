import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ params }) => {
	return {
		post: params.post
	}
}
