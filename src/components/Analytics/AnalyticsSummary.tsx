import React from 'react';
import {
	AnalyticsOrderStatus,
	AnalyticsSaleStatus,
	containerAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const AnalyticsSummary = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 lg:grid-cols-2'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5 overflow-x-auto'>
				<div className='flex flex-col gap-2 xs:flex-row items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-base font-medium'>
						Sale Status
					</h2>
				</div>
				<div className='w-full bg-myGray/50 h-[1px] mb-5'></div>
				<ReactApexChart
					options={AnalyticsSaleStatus}
					series={AnalyticsSaleStatus.series}
					height='350'
					type='radialBar'
				/>
			</div>
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5 overflow-x-auto'>
				<div className='flex flex-col gap-2 xs:flex-row items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-base font-medium'>
						Order status
					</h2>
				</div>
				<div className='w-full bg-myGray/50 h-[1px] mb-5'></div>
				{AnalyticsOrderStatus.map((data, index) => (
					<ReactApexChart
						key={index}
						options={data}
						series={data.series}
						type='bar'
						id={`progress${index + 1}`}
						height={70}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default AnalyticsSummary;
