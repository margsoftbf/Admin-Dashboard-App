import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	purge: {
		safelist: ['bg-green-700', 'bg-violet-700', 'bg-yellow-500', 'bg-blue-700'],
	},
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				myBlue: '#2775FF',
				myGreen: '#50D1B2',
				myViolet: '#7364DB',
				myVioletLight: '#AA9FF0',
				myOrange: '#EC8C56',
				myFuchsia: '#DD50D6',
				myEmerald: '#5EEA8D',
				myIndigo: '#5415F1',
				myYellow: '#ECE663',
				myRed: '#BF2323',
				mySky: '#08D6F4',
				myPink: '#FB7BB8',
				myPrimary: '#1F2128',
				myBlack: '#0F0F12',
				myGray: '#8B8B93',
				myGrayDarker: '#313442',
			},
			maxWidth: {
				'8xl': '1440px',
			},
			screens: {
				xs: '475px',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			  }
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
export default config;

