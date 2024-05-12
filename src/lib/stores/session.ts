import { writable } from 'svelte/store'

interface Session {
	user: string | null
}

const session = writable<Session>({ user: null })

export default session
