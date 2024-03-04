import React from 'react';
import { analyticsSalesPerformance, containerAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const AnalyticsMonthlyHistory = () => {
	return (
		<motion.div
			className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 overflow-x-auto'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<div className='flex flex-col gap-2 xs:flex-row items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-base font-medium'>
					Monthly History
				</h2>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'></div>
			<ReactApexChart
				options={analyticsSalesPerformance}
				series={analyticsSalesPerformance.series}
				type='bar'
				height={360}
			/>
		</motion.div>
	);
};

export default AnalyticsMonthlyHistory;
