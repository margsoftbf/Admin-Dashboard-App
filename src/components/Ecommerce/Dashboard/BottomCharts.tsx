import React, { useState } from 'react';
import { IconToggle } from '../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import {
	BarChart,
	Bar,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	Line,
	LineChart,
} from 'recharts';
import dynamic from 'next/dynamic';
import {
	dataBars,
	circleData,
	weeklyDataBottomCharts,
	containerAnimation,
	itemAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';

const ResponsivePieChart = dynamic(
	() => import('@nivo/pie').then((mod) => mod.ResponsivePie),
	{
		ssr: false,
	}
);

const BottomCharts = () => {
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
			className='grid grid-cols-1 gap-6 2xl:grid-cols-3 mb-6'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<motion.div
				className='rounded-2xl border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5 w-full'
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
						<XAxis
							dataKey='name'
							scale='point'
							padding={{ left: 0, right: 0 }}
						/>
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

			<motion.div
				className='rounded-2xl w-full h-96 border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5 '
				variants={itemAnimation}
			>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-[14px] font-medium'>
						Visits by Source
					</h2>
					<div>
						<button
							aria-label='More'
							className='flex items-center justify-between py-2 px-0 cursor-pointer'
							onClick={() => toggleMenu('visits')}
						>
							<IconToggle />
						</button>
						{activeMenuId === 'visits' && <ToggleMenu />}
					</div>
				</div>
				<div className='w-full bg-myGray/50 h-[1px] mb-5'> </div>
				<div className='w-full h-80'>
					{ResponsivePieChart && (
						<ResponsivePieChart
							data={circleData}
							margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
							innerRadius={0.5}
							colors={['#7364DB', '#EC8C56', '#5EEA8D', '#ECE663']}
							theme={{
								axis: {
									domain: {
										line: {
											stroke: '#fff',
										},
									},
									legend: {
										text: {
											fill: '#fff',
										},
									},
									ticks: {
										line: {
											stroke: '#fff',
											strokeWidth: 1,
										},
										text: {
											fill: '#fff',
										},
									},
								},
								legends: {
									text: {
										fill: '#fff',
									},
								},
								tooltip: {
									container: {
										color: '#000',
									},
								},
							}}
							padAngle={0.7}
							cornerRadius={3}
							activeOuterRadiusOffset={8}
							borderWidth={1}
							borderColor={{
								from: 'color',
								modifiers: [['darker', 0.2]],
							}}
							defs={[
								{
									id: 'dots',
									type: 'patternDots',
									background: 'inherit',
									color: 'rgba(255, 255, 255, 0.3)',
									size: 4,
									padding: 1,
									stagger: true,
								},
								{
									id: 'lines',
									type: 'patternLines',
									background: 'inherit',
									color: 'rgba(255, 255, 255, 0.3)',
									rotation: -45,
									lineWidth: 6,
									spacing: 10,
								},
							]}
							enableArcLinkLabels={false}
							legends={[]}
						/>
					)}
				</div>
			</motion.div>
			<motion.div
				className='rounded-2xl border relative border-[#313442] bg-myPrimary py-2 flex-1 px-5'
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
		</motion.div>
	);
};

export default BottomCharts;
