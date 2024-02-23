import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const TransactionsDetails = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Finance', href: '/finance', current: false },
		{
			name: 'Transactions Details',
			href: '/transactions-details',
			current: true,
		},
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Transactions Details
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
		</MainLayout>
	);
};

export default TransactionsDetails;
