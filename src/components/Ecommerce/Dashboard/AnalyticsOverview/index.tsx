import React from 'react';
import { containerAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import MarketOverview from './MarketOverview';
import VisistBySource from './VisistBySource';
import TotalRevenue from './TotalRevenue';

const AnalyticsOverview = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 2xl:grid-cols-3'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<MarketOverview />
			<VisistBySource />
			<TotalRevenue />
		</motion.div>
	);
};

export default AnalyticsOverview;
