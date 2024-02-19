import localFont from 'next/font/local';

export const primaryFont = localFont({
	src: '../public/fonts/ClashDisplay-Variable.ttf',
	display: 'swap',
	variable: '--primary-font',
});
