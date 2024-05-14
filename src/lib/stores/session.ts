import { writable } from 'svelte/store'
interface User {
	id?: string | null
}
interface Session {
	user: User | null
}

const session = writable<Session>({ user: null })
export default session
