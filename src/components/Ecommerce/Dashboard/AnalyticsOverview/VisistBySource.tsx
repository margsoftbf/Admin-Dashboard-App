import React, { useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { itemAnimation, VisistBySourceData } from '@/data/data';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});


const VisistBySource = () => {
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
			className='rounded-2xl w-full h-96 border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5 '
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Visits by Source
				</h2>
				<div>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-0 cursor-pointer'
						onClick={() => toggleMenu('visits')}
					>
						<IconToggle />
					</button>
					{activeMenuId === 'visits' && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'> </div>
			<div className='w-full h-80 text-white'>
				<ReactApexChart
					type='donut'
					height={340}
					series={VisistBySourceData.series}
					options={VisistBySourceData.options}
				/>
			</div>
		</motion.div>
	);
};

export default VisistBySource;
