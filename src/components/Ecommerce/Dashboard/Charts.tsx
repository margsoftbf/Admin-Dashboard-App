import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IconToggle } from '../../../../public/assets/svg';
import { dailyData, weeklyData, monthlyData } from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Charts = () => {
	const [timeRange, setTimeRange] = useState('Monthly');
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
	const toggleMenu = (menuId: string) => {
		if (activeMenuId === menuId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(menuId);
		}
	};

	let currentData;
	switch (timeRange) {
		case 'Daily':
			currentData = dailyData;
			break;
		case 'Weekly':
			currentData = weeklyData;
			break;
		case 'Monthly':
		default:
			currentData = monthlyData;
			break;
	}

	return (
		<div className='grid grid-cols-1 items-center mb-6 gap-4 2xl:grid-cols-[5fr,2fr]'>
			<div className='rounded-2xl border border-[#313442] w-full bg-myPrimary py-2 flex-1 px-5'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-[14px] font-medium'>
						Sales Performance
					</h2>
					<div className='ml-auto flex gap-1 items-center translate-x-4 z-10 relative'>
						<div className='-z-10 flex gap-3 font-poppins text-xs text-myGray'>
							<button
								onClick={() => setTimeRange('Daily')}
								className={timeRange === 'Daily' ? 'text-myViolet' : ''}
							>
								Daily
							</button>
							<button
								onClick={() => setTimeRange('Weekly')}
								className={timeRange === 'Weekly' ? 'text-myViolet' : ''}
							>
								Weekly
							</button>
							<button
								onClick={() => setTimeRange('Monthly')}
								className={timeRange === 'Monthly' ? 'text-myViolet' : ''}
							>
								Monthly
							</button>
						</div>
						<div>
							{' '}
							<button
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
				<ResponsiveContainer width='100%' height={300}>
					<AreaChart
						data={currentData}
						margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id='colorCompleted' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#5EEA8D' stopOpacity={1} />
								<stop offset='95%' stopColor='#5EEA8D' stopOpacity={1} />
							</linearGradient>
							<linearGradient id='colorPending' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#7364DB' stopOpacity={1} />
								<stop offset='95%' stopColor='#7364DB' stopOpacity={1} />
							</linearGradient>
							<linearGradient id='colorDelivered' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#2775FF' stopOpacity={1} />
								<stop offset='95%' stopColor='#2775FF' stopOpacity={1} />
							</linearGradient>
							<linearGradient id='colorUnpaid' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#e3402d' stopOpacity={1} />
								<stop offset='95%' stopColor='#e3402d' stopOpacity={1} />
							</linearGradient>
						</defs>
						<XAxis dataKey='name' stroke='gray' tick={{ fontSize: 12 }} />
						<Tooltip />
						<Area
							type='monotone'
							dataKey='Completed'
							stroke='#5EEA8D'
							fillOpacity={1}
							fill='url(#colorCompleted)'
						/>
						<Area
							type='monotone'
							dataKey='Delivered'
							stroke='#2775FF'
							fillOpacity={1}
							fill='url(#colorDelivered)'
						/>
						<Area
							type='monotone'
							dataKey='Pending'
							stroke='#7364DB'
							fillOpacity={1}
							fill='url(#colorPending)'
						/>
						<Area
							type='monotone'
							dataKey='Unpaid'
							stroke='#e3402d'
							fillOpacity={1}
							fill='url(#colorUnpaid)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className='h-96 rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-[14px] font-medium'>
						Total Revenue
					</h2>
					<div className='ml-auto translate-x-4 z-10'>
						<button
							className='flex items-center justify-between py-2 px-4 cursor-pointer'
							onClick={() => toggleMenu('revenue')}
						>
							<IconToggle />
						</button>
						{activeMenuId === 'revenue' && <ToggleMenu />}
					</div>
				</div>
				<div className='w-full flex flex-col items-center gap-3 bg-myGray/50 h-[1px] mb-5 font-poppins'>
					<div className='w-24 h-24 mt-6'>
						<CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
					</div>
					<h2 className='font-poppins text-myGray mt-2'>
						Total sales made today
					</h2>
					<p className='text-2xl text-myEmerald font-medium'>$990</p>
					<p className='text-xs text-myGray text-center'>
						Previous transactions processing. Last payments may not be included.
					</p>
					<div className='w-full flex justify-around mt-2'>
						<div className='flex flex-col items-center font-poppins gap-2'>
							<div>
								<p className='text-myGray text-[14px]'>Today</p>
							</div>
							<div className='flex text-myRed items-center gap-2 text-[14px]'>
								<ChevronDownIcon className='w-5 h-5 text-myRed' />
								<span>$1.4k</span>
							</div>
						</div>
						<div className='flex flex-col items-center font-poppins gap-2'>
							<div>
								<p className='text-myGray text-[14px]'>Last Week</p>
							</div>
							<div className='flex text-myEmerald items-center gap-2 text-[14px]'>
								<ChevronUpIcon className='w-5 h-5 text-myEmerald' />
								<span>$12.4k</span>
							</div>
						</div>
						<div className='flex flex-col items-center font-poppins gap-2'>
							<div>
								<p className='text-myGray text-[14px]'>Last Month</p>
							</div>
							<div className='flex text-myEmerald items-center gap-2 text-[14px]'>
								<ChevronUpIcon className='w-5 h-5 text-myEmerald' />
								<span>$6.4k</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Charts;
