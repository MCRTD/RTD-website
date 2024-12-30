import servername from '$lib/data.js'
export function load({ params }) {
	const getuserdata = async () => {
		const userid = params.user
		try {
			const serverdata = await fetch(servername + '/api/user?user=' + userid, {
				method: 'GET'
			})
			if (!serverdata.ok) {
				throw new Error(`HTTP error! status: ${serverdata.status}`)
			}
			const theuser = await serverdata.json()
			if (!theuser || !theuser.Users) {
				throw new Error('Invalid user data')
			}

			if (theuser.Users.length === 0) {
				throw new Error('User not found')
			}
			return theuser.Users[0]
		} catch (e) {
			console.error(e)
			throw new Error(`Failed to fetch user`)
		}
	}
	return {
		props: {
			user: getuserdata()
		}
	}
}
