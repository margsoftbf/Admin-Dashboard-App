import React, { useState } from 'react';

import {
	containerAnimation,
	itemAnimation,
	monhtlyDataSalePerformance,
	dailyDataSalePerformance,
	weeklyDataSalePerformance,
} from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import 'react-circular-progressbar/dist/styles.css';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IconToggle } from '../../../../../public/assets/svg';
import SalesPerformance from './SalesPerformance';
import TotalSales from './TotalSales';

const SalesDashboard = () => {
	const [timeRange, setTimeRange] = useState('Monthly');
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	const toggleMenu = (menuId: string) => {
		if (activeMenuId === menuId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(menuId);
		}
	};

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
