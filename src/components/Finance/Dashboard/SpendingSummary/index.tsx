import React from 'react';

import {

	containerAnimation,

} from '@/data/data';

import { motion } from 'framer-motion';
import LatestTransfers from './LatestTransfers';
import Expenses from './Expenses';
const SpendingSummary = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-7 xl:grid-cols-3 text-white font-poppins'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
            <LatestTransfers />
            <Expenses />
		</motion.div>
	);
};

export default SpendingSummary;
