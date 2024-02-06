import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const ProductList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{ name: 'Product List', href: '/ecommerce/product-list', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Product List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='text-white'>product-list</div>;
		</MainLayout>
	);
};

export default ProductList;
