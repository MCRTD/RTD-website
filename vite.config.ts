import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "phillychi3",
            project: "rtdweb"
        }
    }), sveltekit()],
	ssr: {
		noExternal: ['three']
	}
})