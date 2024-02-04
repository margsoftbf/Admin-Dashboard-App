import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
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
				myOrange: '#EC8C56',
				myFuchsia: '#DD50D6',
				myEmerald: '#5EEA8D',
				myIndigo: '#5415F1',
				myYellow: '#ECE663',
				myRed: '#E23738',
				mySky: '#08D6F4',
				myPink: '#FB7BB8',
				myPrimary: '#1F2128',
				myBlack: '#0F0F12',
				myGray: '#8B8B93',
			},
			maxWidth: {
				'8xl': '1440px',
			},
			screens: {
				xs: '475px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
export default config;
