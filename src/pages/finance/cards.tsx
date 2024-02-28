import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import YourCards from '@/components/Finance/Cards/YourCards/YourCards';
import Transfers from '@/components/Finance/Cards/Transfers/Transfers';

const Cards = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Finance', href: '/finance', current: false },
		{ name: 'Cards', href: '/cards', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Cards
			</h1>
			<BreadCrumb pathSegments={pathSegments} />

			<YourCards />
			<Transfers />
		</MainLayout>
	);
};

export default Cards;
