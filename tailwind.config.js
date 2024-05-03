/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			'light',
			{
				dark: {
					// eslint-disable-next-line @typescript-eslint/no-var-requires
					...require('daisyui/src/theming/themes')['dark'],
					accent: '#A0153E',
                    ".infocards": {
                        "background-color": "#A0153E !important",
                        "color": "#fff !important"
                    }
				}
			},
			'night'
		]
	},
	plugins: [require('daisyui'),require('tailwind-scrollbar'),]
};
