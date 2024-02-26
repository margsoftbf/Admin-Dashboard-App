import RecentPurchases from '@/components/Ecommerce/Dashboard/RecentPurchases';
import SellsBoxes from '@/components/Ecommerce/Dashboard/SellsBoxes';
import PersonalFinanceDashboard from '@/components/Finance/Dashboard/PersonalFinanceDashboard';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<div className='m-auto overflow-hidden'>
				<h1 className='mt-2 mb-4 font-poppins text-2xl ml-1 text-white font-bold'>
					Dashboard
				</h1>
				<SellsBoxes />
				<PersonalFinanceDashboard />
				<RecentPurchases />
			</div>
		</MainLayout>
	);
}
