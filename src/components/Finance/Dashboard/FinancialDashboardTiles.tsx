import React from 'react';
import { Tooltip, ResponsiveContainer, Line, LineChart, XAxis } from 'recharts';
import { financialData, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
const FinancialDashboardTiles = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 2xl:grid-cols-4 text-white'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			{financialData.map((box) => (
				<motion.div
					key={box.id}
					className='font-poppins rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'
					variants={itemAnimation}
				>
					<div className='flex items-center my-2'>
						<div className='flex items-center flex-col'>
							<div className='w-16 h-16 flex items-center justify-center rounded-full bg-myGrayDarker mb-3'>
								<box.icon className='w-7 h-7' />
							</div>
							<p className='text-sm leading-4 text-myGray font-semibold'>
								{box.title}
							</p>
						</div>
						<div className='ml-auto'>
							<div>
								<p className='text-2xl font-bold text-white  mb-2'>
									{box.value}
								</p>
								<p
									style={{ color: box.color }}
									className={`font-semibold text-right`}
								>
									{box.percentage}
								</p>
							</div>
						</div>
					</div>
					<div className='w-full relative text-black'>
						<ResponsiveContainer width='100%' height={100}>
							<LineChart
								data={box.data}
								margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
							>
								<XAxis dataKey='name' hide={true} />
								<Tooltip />
								<Line
									type='monotone'
									dataKey='value'
									stroke={box.color}
									fillOpacity={1}
									fill={box.color}
									strokeWidth={4}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default FinancialDashboardTiles;
