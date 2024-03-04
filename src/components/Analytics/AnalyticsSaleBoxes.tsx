import React from 'react';
import dynamic from 'next/dynamic';
import { analyticsData, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const AnalyticsSaleBoxes = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-7 xl:grid-cols-3'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			{analyticsData.map((data, index) => (
				<motion.div
					key={index}
					className='rounded-xl bg-myPrimary text-white  flex flex-col font-poppins relative overflow-hidden'
					variants={itemAnimation}
				>
					<div className='flex justify-between py-6 px-5'>
						<div className='flex flex-col text-myGray'>
							<p className='text-[14px] font-semibold'>{data.title}</p>
							<p className='font-semibold text-xl'>{data.totalSale}</p>
							<p className='text-xs'>Compare to last month</p>
						</div>
						<p className='text-green-500 font-medium'>
							{data.percentageChange}
						</p>
					</div>
					<div className='relative p-1'>
						<ReactApexChart
							options={{ ...data.chartOptions, colors: [data.chartColor] }}
							series={data.seriesData}
							type='area'
							height={150}
						/>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default AnalyticsSaleBoxes;
