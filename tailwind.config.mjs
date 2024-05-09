/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {      
			safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
			
			fontFamily: {
				sans: ["Inter", "OpenSans"],
				display: ['Poppins']
		  	},
		 
			colors: {
				primaryColor: 'var(--primary-color)',
				secondaryColor: 'var(--secondary-color)',
				primaryTextColor: 'var(--primary-text-color)',
				secondaryTextColor: 'var(--secondary-text-color)',
				tertiaryTextColor: 'var(--tertiary-text-color)',
				primaryBg: 'var(--primary-bg-color)',
				secondaryBg: 'var(--secondary-bg-color)',
				primaryGradient: 'var(--primary-gradient)',
				secondaryGradient: 'var(--secondary-gradient)',
				tertiaryGradient: 'var(--tertiary-gradient)',
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
	plugins: [ require('tailwindcss-animated')],
}
