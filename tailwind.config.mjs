/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {      			
			fontFamily: {
				sans: ["Inter", "OpenSans"],
				display: ['Poppins']
		  	},
			colors: {
				primaryColor: 'rgba(73, 190, 43, <alpha-value>)',
				secondaryColor: 'rgba(84, 70, 230, <alpha-value>)',
				primaryTextColor: 'rgba(255, 255, 255, <alpha-value>)',
				secondaryTextColor: 'rgba(133, 133, 133, <alpha-value>)',
				tertiaryTextColor: 'rgba(1, 201, 56, <alpha-value>)',
				primaryBg: 'rgba(17, 17, 24, <alpha-value>)',
				secondaryBg: 'rgba(233, 233, 233, <alpha-value>)',
		  	},

			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
		  
				'md': '1020px',
				// => @media (min-width: 768px) { ... }
		  
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
		  
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }
		  
				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			  }
		},
	},
}
