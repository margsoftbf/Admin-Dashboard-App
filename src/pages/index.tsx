import RecentPurchases from '@/components/Ecommerce/Dashboard/RecentPurchases';
import SalesDashboard from '@/components/Ecommerce/Dashboard/SalesDashboard';
import SalesSummaryBoxes from '@/components/Ecommerce/Dashboard/SalesSummaryBoxes';
import PersonalFinance from '@/components/Finance/Dashboard/PersonalFinance';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<div className='m-auto overflow-hidden'>
				<h1 className='mt-2 mb-4 font-poppins text-2xl ml-1 text-white font-bold'>
					Dashboard
				</h1>
				<SalesSummaryBoxes />
				<PersonalFinance />
				<RecentPurchases />
				<SalesDashboard />
			</div>
		</MainLayout>
	);
}
