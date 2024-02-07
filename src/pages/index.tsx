import SellsBoxes from '@/components/Ecommerce/Dashboard/SellsBoxes';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<div className='m-auto overflow-hidden'>
				<h1 className='mt-2 mb-4 font-poppins text-2xl ml-1 text-white font-bold'>
					Dashboard
				</h1>
				<SellsBoxes />
			</div>
		</MainLayout>
	);
}
