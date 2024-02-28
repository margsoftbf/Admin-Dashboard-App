import React, { useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import {
	BarChart,
	Bar,
	XAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import {
	dataBars,
	itemAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';


const MarketOverview = () => {
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
			className='rounded-2xl border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5 w-full h-96'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Market Overview
				</h2>
				<div>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-0 cursor-pointer'
						onClick={() => toggleMenu('market')}
					>
						<IconToggle />
					</button>
					{activeMenuId === 'market' && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'></div>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart
					width={500}
					height={300}
					data={dataBars}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={20}
				>
					<XAxis dataKey='name' scale='point' padding={{ left: 0, right: 0 }} />
					<Tooltip />
					<Bar
						dataKey='score'
						fill='#7364DB'
						background={{ fill: '#313442' }}
						radius={[5, 5, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</motion.div>
	);
};

export default MarketOverview;
