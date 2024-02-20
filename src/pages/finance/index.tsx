import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import FinancialDashboardTiles from '@/components/Finance/Dashboard/FinancialDashboardTiles';
import PersonalFinanceDashboard from '@/components/Finance/Dashboard/PersonalFinanceDashboard';
import SpendingSummary from '@/components/Finance/Dashboard/SpendingSummary';
const FinanceHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Finance', href: '/finance', current: false },
		{ name: 'Dashboard', href: '/finance', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Finance
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<FinancialDashboardTiles />
			<PersonalFinanceDashboard />
			<SpendingSummary />
		</MainLayout>
	);
};

export default FinanceHomePage;
