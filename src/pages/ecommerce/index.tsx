import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';

import SalesSummaryBoxes from '@/components/Ecommerce/Dashboard/SalesSummaryBoxes';
import SalesDashboard from '@/components/Ecommerce/Dashboard/SalesDashboard';
import RecentPurchases from '@/components/Ecommerce/Dashboard/RecentPurchases';
import AnalyticsOverview from '@/components/Ecommerce/Dashboard/AnalyticsOverview';

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
			<SalesSummaryBoxes />
			<SalesDashboard />
			<RecentPurchases />
			<AnalyticsOverview />
		</MainLayout>
	);
};

export default EcommerceHomePage;
