import React, { useState } from 'react';
import {
	containerAnimation,
	monhtlyDataSalePerformance,
	dailyDataSalePerformance,
	weeklyDataSalePerformance,
} from '@/data/data';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import SalesPerformance from './SalesPerformance';
import TotalSales from './TotalSales';

const SalesDashboard = () => {
	const [timeRange, setTimeRange] = useState('Monthly');


	let currentSeries;
	switch (timeRange) {
		case 'Daily':
			currentSeries = dailyDataSalePerformance;
			break;
		case 'Weekly':
			currentSeries = weeklyDataSalePerformance;
			break;
		case 'Monthly':
		default:
			currentSeries = monhtlyDataSalePerformance;
			break;
	}

	return (
		<motion.div
			className='grid grid-cols-1 items-center mb-6 gap-4 2xl:grid-cols-[5fr,2fr]'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
				<SalesPerformance />
				<TotalSales />
		</motion.div>
	);
};

export default SalesDashboard;
