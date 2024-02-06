import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import { useRouter } from 'next/router';
import BreadCrumb from '@/components/common/Breadcrumb';
const EcommerceHomePage = () => {
	const router = useRouter();
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Ecommerce
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='text-white'>ssssssssssss</div>;
		</MainLayout>
	);
};

export default EcommerceHomePage;
