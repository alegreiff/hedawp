/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			titulos: ['Assistant Variable', 'sans-serif'],
			onest: ['Onest Variable', 'sans-serif'],
		},
		extend: {
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),     
		require('daisyui'),
	],

}
