import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
			<div className='w-[1200px] mx-auto'>
				<div className='relative flex flex-1 items-center h-full w-full mb-6'>
					<label htmlFor='search-field' className='sr-only'>
						Search
					</label>
					<MagnifyingGlassIcon
						className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-4'
						aria-hidden='true'
					/>
					<input
						id='search-field'
						className='block h-12 w-full rounded-xl bg-myPrimary border-0 py-0 pl-12 pr-3  placeholder:text-[#64646F] font-poppins font-medium text-white focus:ring-0 sm:text-sm'
						placeholder='Search...'
						type='search'
						name='search'
					/>
				</div>
			</div>
			<div className='rounded-lg border border-[#313442] bg-myPrimary py-4 flex-1 px-5'></div>
		</MainLayout>
	);
};

export default JobsHomePage;
