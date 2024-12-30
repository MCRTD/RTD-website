import type { PageLoad } from './$types'
import servername from '$lib/data.js'

export const load = (({ params }) => {
	const getserverdata = async () => {
		const serverid = params.server
		try {
			const response = await fetch(servername + '/api/server?serverid=' + serverid, {
				method: 'GET'
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			if (!data || !data.servers) {
				throw new Error('無效的伺服器資料')
			}

      if (data.servers.length === 0) {
        throw new Error('找不到指定的伺服器')
      }

			return data.servers[0]
		} catch (e) {
			console.error('獲取伺服器資料失敗:', e)
			throw new Error(`獲取伺服器資料失敗: ${e.message}`)
		}
	}

	return {
		server: getserverdata()
	}
}) satisfies PageLoad
