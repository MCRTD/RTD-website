import tailwindMdBase from '@geoffcodesthings/tailwind-md-base'
import { addDynamicIconSelectors } from '@iconify/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		markdownBase: {
			blockquote: {
				color: 'hsl(var(--foreground) / <alpha-value>)'
			},
			code: {
				backgroundColor: 'var(--code-bg)',
				color: 'var(--text-200)'
			}
		}
	},
	daisyui: {
		themes: [
			'light',
			{
				dark: {
					// eslint-disable-next-line @typescript-eslint/no-var-requires
					...require('daisyui/src/theming/themes')['dark'],
					accent: '#A0153E',
					info: '#EE1D52',
					'info-content': '#FFFFFF',
					'--primary-100': '#FF3333',
					'--primary-200': '#ff6e5e',
					'--primary-300': '#ffdabd',
					'--accent-100': '#00FFCC',
					'--accent-200': '#00986d',
					'--text-100': '#FFFFFF',
					'--text-200': '#e0e0e0',
					'base-100': '#1A1A1A',
					'--bg-200': '#292929',
					'--bg-300': '#404040',
					'--glow-color': 'rgba(236, 240, 241,.3)',
					'--code-bg': '#282c34',
					'.infocards': {
						'background-color': '#A0153E !important',
						color: '#fff !important'
					}
				}
			},
			'night'
		]
	},
	plugins: [
		require('daisyui'),
		require('tailwind-scrollbar'),
		tailwindMdBase(),
    addDynamicIconSelectors()
	]
}
