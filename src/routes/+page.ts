import servername from '$lib/data'

export const load = async () => {
	const getposts = async () => {
		try {
			const data = await fetch(servername + '/api/litematica')
			const json = await data.json()
			return json
		} catch (e) {
			console.error(e)
		}
	}

	return {
		posts: getposts()
	}
}
