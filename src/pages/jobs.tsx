import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';

const JobsHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Jobs', href: '/jobs', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Jobsss
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
		</MainLayout>
	);
};

export default JobsHomePage;
