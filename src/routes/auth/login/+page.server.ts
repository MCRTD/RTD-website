
import type { Actions } from './$types';
import servername from '$lib/data'
export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

    const username = data.get('username') as string;
    const password = data.get('password') as string;

    const rest = await fetch(servername+'/api/user/login', {
        headers: {
          "useename": username,
          "password": password
        }
      })
    if (!rest.ok) {
      return {
        status: rest.status,
        body: {
          error: await rest.text()
        }
      }
    }
    const token = await rest.json();
    return {
      status: 200,
      body: {
        token
      }
    }
	},
} satisfies Actions;