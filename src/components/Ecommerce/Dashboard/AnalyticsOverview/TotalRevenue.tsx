import React, { useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { XAxis, Tooltip, ResponsiveContainer, Line, LineChart } from 'recharts';
import { weeklyDataBottomCharts, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';

const TotalRevenue = () => {
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
			className='rounded-2xl border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5 h-96'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Total revenue
				</h2>
				<div>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-0 cursor-pointer'
						onClick={() => toggleMenu('revenue')}
					>
						<IconToggle />
					</button>
					{activeMenuId === 'revenue' && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'> </div>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart
					data={weeklyDataBottomCharts}
					margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
				>
					<XAxis dataKey='name' stroke='gray' tick={{ fontSize: 12 }} />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='Completed'
						stroke='#EC8C56'
						fillOpacity={1}
						fill='#EC8C56'
					/>
					<Line
						type='monotone'
						dataKey='Pending'
						stroke='#5415F1'
						fillOpacity={1}
						fill='#5415F1'
					/>
					<Line
						type='monotone'
						dataKey='Unpaid'
						stroke='#08D6F4'
						fillOpacity={1}
						fill='#08D6F4'
					/>
				</LineChart>
			</ResponsiveContainer>
		</motion.div>
	);
};

export default TotalRevenue;
