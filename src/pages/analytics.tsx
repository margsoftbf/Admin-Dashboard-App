import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import AnalyticsSaleBoxes from '@/components/Analytics/AnalyticsSaleBoxes';
import AnalyticsMonthlyHistory from '@/components/Analytics/AnalyticsMonthlyHistory';
import AnalyticsSummary from '@/components/Analytics/AnalyticsSummary';


const AnalyticsHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Analytics', href: '/analytics', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Analytics
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<AnalyticsSaleBoxes />
			<AnalyticsMonthlyHistory />
			<AnalyticsSummary />
		</MainLayout>
	);
};

export default AnalyticsHomePage;
