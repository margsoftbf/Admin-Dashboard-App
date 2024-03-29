import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<title>Admin Dashboard - All info in one place</title>
				<meta
					name='description'
					content='Admin Dashboard - All info in one place'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<main className='m-auto'>
				<Component {...pageProps} />;
			</main>
		</>
	);
}
