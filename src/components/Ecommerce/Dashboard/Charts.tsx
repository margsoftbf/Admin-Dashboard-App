import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { IconToggle } from '../../../../public/assets/svg';
import { dailyData, weeklyData, monthlyData } from '@/data/data';

const Charts = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [timeRange, setTimeRange] = useState('Monthly');
	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
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
		<div className='grid grid-cols-1 items-center mb-6 gap-4 xl:grid-cols-[3fr,1fr]'>
			<div className='rounded-2xl border border-[#313442] w-full bg-myPrimary py-2 flex-1 px-5'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-myGray font-poppins text-[14px] font-medium'>
						Sales Performance
					</h2>
					<div className='ml-auto flex gap-1 items-center translate-x-4 z-10 relative'>
						<div className='flex gap-3 font-poppins text-xs text-myGray'>
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
								onClick={toggleMenu}
							>
								<IconToggle />
							</button>
							{isMenuVisible && (
								<div className='absolute mt-2 w-32 right-0 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs '>
									<ul>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Sales report
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Export report
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Profit manage
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Revenue report
											</a>
										</li>
										<div className='w-[80%] h-[1px] mx-auto bg-gray-200 my-1'></div>
										<li className='hover:text-myGray'>
											<a
												href='#'
												className='block px-4 pb-2 text-red-600 hover:text-red-300'
											>
												Remove widget
											</a>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='w-full bg-myGray/50 h-[1px] mb-[19px]'></div>
				<ResponsiveContainer width='100%' height={300}>
					<AreaChart
						data={currentData}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
						<XAxis dataKey='name' stroke='gray' />
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
						Sales Performance
					</h2>
					<div className='ml-auto translate-x-4 z-10'>
						<button className='flex items-center justify-between py-2 px-4 cursor-pointer'>
							<IconToggle />
						</button>
					</div>
				</div>
				<div className='w-full bg-myGray/50 h-[1px] mb-[19px]'></div>
			</div>
		</div>
	);
};

export default Charts;
