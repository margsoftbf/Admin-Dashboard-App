import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<div className='m-auto overflow-hidden'>
				<h1 className='text-myBlue text-xs'>Hello, Next.js!</h1>
			</div>
		</MainLayout>
	);
}
