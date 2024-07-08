import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad, LayoutLoadEvent } from './$types'
import servername from '$lib/data'
interface EventUser {
	user: {
		id: string
	}
}

export const load: LayoutLoad = async ({ data }: LayoutLoadEvent) => {
	const getuserdata = async () => {
		const user = ((await data) as EventUser)?.user
		if (!user) return false
		try {
			const serverdata = await fetch(servername + '/api/user?user=' + user.id, {
				method: 'GET'
			})
			if (!serverdata.ok) {
				throw new Error(`HTTP error! status: ${serverdata.status}`)
			}
			const theuser = await serverdata.json()
      return theuser.Users[0]
		} catch (e) {
			console.error(e)
			throw new Error(`Failed to fetch user`)
		}
	}
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
	const userdata = await getuserdata()
	return {
		...data,
		userdata: userdata
	}
}
