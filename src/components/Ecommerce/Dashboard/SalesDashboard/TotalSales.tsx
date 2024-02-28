import React, { useState } from 'react';
import {
	itemAnimation,
} from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import 'react-circular-progressbar/dist/styles.css';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IconToggle } from '../../../../../public/assets/svg';

const TotalSales = () => {
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	const toggleMenu = (menuId: string) => {
		if (activeMenuId === menuId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(menuId);
		}
	};
    
	return (
		<motion.div
			className='h-96 rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Total Sales
				</h2>
				<div className='ml-auto translate-x-4 z-10'>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-4 cursor-pointer'
						onClick={() => toggleMenu('revenue')}
					>
						<IconToggle />
					</button>
					{activeMenuId === 'revenue' && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-3 bg-myGray/50 h-[1px] mb-5 font-poppins'>
				<div className='w-24 h-24 mt-6'>
					<CircularProgressbar
						value={70}
						text={'70%'}
						strokeWidth={10}
						styles={buildStyles({
							textColor: '#FFF',
							pathColor: '#2775FF',
							trailColor: '#071733',
						})}
					/>
				</div>
				<h2 className='font-poppins text-gray-300 mt-2'>
					Total sales made today
				</h2>
				<p className='text-2xl text-myEmerald font-medium'>$990</p>
				<p className='text-xs text-gray-300 text-center'>
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className='w-full flex justify-around mt-2'>
					<div className='flex flex-col items-center font-poppins gap-2'>
						<div>
							<p className='text-gray-300 text-[14px]'>Today</p>
						</div>
						<div className='flex text-red-400 items-center gap-2 text-[14px]'>
							<ChevronDownIcon className='w-5 h-5 text-red-400' />
							<span>$1.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center font-poppins gap-2'>
						<div>
							<p className='text-gray-300 text-[14px]'>Last Week</p>
						</div>
						<div className='flex text-myEmerald items-center gap-2 text-[14px]'>
							<ChevronUpIcon className='w-5 h-5 text-myEmerald' />
							<span>$12.4k</span>
						</div>
					</div>
					<div className='flex flex-col items-center font-poppins gap-2'>
						<div>
							<p className='text-gray-300 text-[14px]'>Last Month</p>
						</div>
						<div className='flex text-myEmerald items-center gap-2 text-[14px]'>
							<ChevronUpIcon className='w-5 h-5 text-myEmerald' />
							<span>$6.4k</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TotalSales;
