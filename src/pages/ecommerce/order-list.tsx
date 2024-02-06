import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const OrderList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{ name: 'Order List', href: '/ecommerce/order-list', current: true },
	];
	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Order List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='text-white'>product-list</div>;
		</MainLayout>
	);
};

export default OrderList;
