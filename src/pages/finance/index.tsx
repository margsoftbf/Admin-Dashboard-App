import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import Financial from '@/components/Finance/Dashboard/Financial';
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
			<Financial />
		</MainLayout>
	);
};

export default FinanceHomePage;
