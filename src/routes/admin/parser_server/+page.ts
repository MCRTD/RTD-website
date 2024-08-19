import type { PageLoad } from './$types'
import { browser } from '$app/environment'
import servername from '$lib/data'

export const load = (async () => {
	const getservers = async () => {
    if (browser) {
      try {
        const data = await fetch(servername+'/api/node')
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`)
        }
        const json = await data.json()
        return json["servers"]
      } catch (e) {
        console.error(e)
        throw new Error(`Failed to fetch servers`)
      }
    }
    return []
  }
  return {
    servers: getservers()
  }
}) satisfies PageLoad
