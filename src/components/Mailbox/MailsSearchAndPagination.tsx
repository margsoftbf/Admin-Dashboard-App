import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const MailsSearchAndPagination = () => {
	return (
		<div className='flex items-center justify-between flex-col gap-4 mb-8 lg:flex-row'>
			<div className='relative flex items-center h-full rounded-md w-72'>
				<label htmlFor='search-field' className='sr-only'>
					Search
				</label>
				<MagnifyingGlassIcon
					className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-myGray ml-4'
					aria-hidden='true'
				/>
				<input
					id='search-field'
					className='block h-12 w-full rounded-xl bg-myPrimary py-0 pl-12 pr-3  placeholder:text-[#64646F] font-poppins font-medium text-white  sm:text-sm'
					placeholder='Search conversation...'
					type='search'
					name='search'
				/>
			</div>
			<div className='flex items-center gap-4 justify-end w-full'>
				<p className='text-myGray text-right text-xs leading-4'>
					1-50<span className='pl-1'>of 12,568</span>
				</p>
				<div className='flex items-center text-myGray'>
					<ChevronLeftIcon className='w-4 h-4' />
					<ChevronRightIcon className='w-4 h-4' />
				</div>
			</div>
		</div>
	);
};

export default MailsSearchAndPagination;
