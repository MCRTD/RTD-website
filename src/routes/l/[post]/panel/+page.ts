import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	return { post: params.post }
}) satisfies PageLoad
