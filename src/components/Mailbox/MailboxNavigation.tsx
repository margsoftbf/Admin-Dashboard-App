import React from 'react';
import Button from '../ui/Button';
import { mailboxData, mailboxGroup } from '@/data/data';
import { FolderIcon } from '@heroicons/react/24/outline';
FolderIcon;
const MailboxNavigation = () => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5 mb-6 text-white font-poppins overflow-x-auto flex-1'>
			<div className='flex flex-col px-0'>
				<Button className='bg-myViolet'>New Category</Button>
				<div className='flex flex-col mt-6'>
					{mailboxData.map((data) => (
						<div
							key={data.id}
							className='flex items-center justify-between bg-transparent rounded cursor-pointer gap-2 p-[10px] hover:bg-white duration-300'
						>
							<div className='flex items-center gap-x-[14px]'>
								<div className='w-5 h-5 overflow-hidden'>
									<data.icon className='absolute w-5 h-5 text-myGray' />
								</div>
								<h3 className='text-myGray leading-4 font-medium text-[14px]'>
									{data.categoryName}
								</h3>
							</div>
							<span className='text-xs text-myGray '>
								{data.categoryNumber}
							</span>
						</div>
					))}
					<div className='w-full bg-myGrayDarker h-[1px] my-5'></div>
					{mailboxGroup.map((data) => (
						<div
							key={data.id}
							className='flex items-center justify-between bg-transparent rounded cursor-pointer gap-2 p-[10px] hover:bg-white duration-300'
						>
							<div className='flex items-center gap-x-[14px]'>
								<div className='w-5 h-5 overflow-hidden'>
									<FolderIcon
										className='absolute w-5 h-5'
										style={{ color: `${data.color}` }}
									/>
								</div>
								<h3 className='text-myGray leading-4 font-medium text-[14px]'>
									{data.categoryName}
								</h3>
							</div>
							<span className='text-xs text-myGray '>
								{data.categoryNumber}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MailboxNavigation;
