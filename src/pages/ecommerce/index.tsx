import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import SellsBoxes from '@/components/Ecommerce/Dashboard/SellsBoxes';
import Charts from '@/components/Ecommerce/Dashboard/Charts';
import RecentPurchases from '@/components/Ecommerce/Dashboard/RecentPurchases';
import BottomCharts from '@/components/Ecommerce/Dashboard/BottomCharts';
const EcommerceHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Ecommerce
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<SellsBoxes />
			<Charts />
			<RecentPurchases />
			<BottomCharts />
		</MainLayout>
	);
};

export default EcommerceHomePage;
