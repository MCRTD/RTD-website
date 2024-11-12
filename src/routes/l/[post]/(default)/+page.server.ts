// +page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import servername from '$lib/data';

export const actions: Actions = {  // 加上型別註記
    default: async ({ request, fetch }) => {  // 改用 default action
        try {
            const formData = await request.formData();
            const postId = formData.get('id');
            console.log(formData);

            const response = await fetch(`${servername}/api/litematica/vote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ LitematicaID: parseInt(postId as string) }),
            });

            console.log(response);

            if (!response.ok) {
                return fail(response.status, {
                    message: response.status === 403 ? 'You need to login to vote' : 'Vote failed'
                });
            }

            const result = await response.json();
            return {
                success: true,
                data: result
            };
        } catch (error) {
            return fail(500, {
                message: error instanceof Error ? error.message : 'Server error'
            });
        }
    }
} satisfies Actions;  // 確保型別正確
