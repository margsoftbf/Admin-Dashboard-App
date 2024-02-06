import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<div className='m-auto overflow-hidden'>
				<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
					Dashboard
				</h1>
			</div>
		</MainLayout>
	);
}
