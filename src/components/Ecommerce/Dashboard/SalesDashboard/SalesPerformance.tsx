import { Props as ChartProps } from 'react-apexcharts';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import {
	itemAnimation,
	monhtlyDataSalePerformance,
	dailyDataSalePerformance,
	weeklyDataSalePerformance,
} from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { IconToggle } from '../../../../../public/assets/svg';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const areaChartOptions = {
	chart: {
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 1,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 0.1,
			type: 'vertical',
			inverseColors: false,
			opacityFrom: 0.5,
			opacityTo: 0,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '45%',
			borderRadius: 4,
		},
	},
	grid: {
		show: false,
	},
	legend: {
		position: 'bottom',
		fontSize: '12px',
		fontWeight: 500,
		labels: {
			colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
		},
		itemMargin: {
			horizontal: 15,
			vertical: 10,
		},
	},
	colors: ['#2775FF', '#BF2323', '#5EEA8D'],
	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		labels: {
			style: {
				colors: [
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
				],
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		tickAmount: 11,
	},
	yaxis: {
		show: false,
	},
};


const SalesPerformance = () => {
	const [options, setOptions] = useState<ChartProps>(areaChartOptions);
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
			className='rounded-2xl border border-[#313442] w-full bg-myPrimary py-2 flex-1 px-5 h-96'
			variants={itemAnimation}
		>
			<div className='flex flex-col gap-2 xs:flex-row items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Sales Performance
				</h2>
				<div className='xs:ml-auto flex gap-1 items-center translate-x-4 z-10 relative'>
					<div className='-z-10 flex gap-3 font-poppins text-xs text-myGray'>
						<button
							aria-label='Daily'
							onClick={() => setTimeRange('Daily')}
							className={` hover:bg-white/10 p-2 rounded-md transition duration-300 hover:text-white
							${timeRange === 'Daily' ? 'text-white bg-white/10 p-2 font-semibold' : ''}
								
						`}
						>
							Daily
						</button>
						<button
							aria-label='Weekly'
							onClick={() => setTimeRange('Weekly')}
							className={` hover:bg-white/10 p-2 rounded-md transition duration-300 hover:text-white
							${timeRange === 'Weekly' ? 'text-white bg-white/10 p-2 font-semibold' : ''}
								
						`}
						>
							Weekly
						</button>
						<button
							aria-label='Monthly'
							onClick={() => setTimeRange('Monthly')}
							className={` hover:bg-white/10 p-2 rounded-md transition duration-300 hover:text-white
							${timeRange === 'Monthly' ? 'text-white bg-white/10 p-2 font-semibold' : ''}
								
						`}
						>
							Monthly
						</button>
					</div>
					<div>
						{' '}
						<button
							aria-label='More'
							className='flex items-center justify-between py-2 px-4 cursor-pointer'
							onClick={() => toggleMenu('sales')}
						>
							<IconToggle />
						</button>
						{activeMenuId === 'sales' && <ToggleMenu />}
					</div>
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'></div>
			<ReactApexChart
				options={options}
				series={currentSeries}
				type='area'
				height={300}
			/>
		</motion.div>
	);
};

export default SalesPerformance;