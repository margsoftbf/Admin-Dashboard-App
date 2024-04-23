import React, { useEffect, useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
	itemAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';

type ProgressValuesType = {
	shopping: number;
	bills: number;
	entertainment: number;
	other: number;
};
const AllExpenses = () => {
    const [allExpensesSubMenu, setAllExpensesSubMenu] = useState(false);
	const [progressValues, setProgressValues] = useState<ProgressValuesType>({
		shopping: 0,
		bills: 0,
		entertainment: 0,
		other: 0,
	});


	useEffect(() => {
		const targetValues: ProgressValuesType = {
			shopping: 40,
			bills: 25,
			entertainment: 15,
			other: 20,
		};

		const updateProgress = (key: keyof ProgressValuesType) => {
			const interval = setInterval(() => {
				setProgressValues((prevValues) => {
					const currentValue = prevValues[key];
					const targetValue = targetValues[key];

					if (currentValue < targetValue) {
						return { ...prevValues, [key]: currentValue + 1 };
					} else {
						clearInterval(interval);
						return prevValues;
					}
				});
			}, 60);
			return interval;
		};

		const intervals = Object.keys(targetValues) as Array<
			keyof ProgressValuesType
		>;
		intervals.forEach((key) => {
			const interval = updateProgress(key);
			return () => clearInterval(interval);
		});

		return () => intervals.forEach((key) => clearInterval(updateProgress(key)));
	}, []);


	return (
		<motion.div
			className='rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5 h-64'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-myGray text-[14px] font-medium '>All expenses</h2>
				<div className='ml-auto translate-x-4 relative'>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-4 cursor-pointer'
						onClick={() => setAllExpensesSubMenu(!allExpensesSubMenu)}
					>
						<IconToggle />
					</button>
					{allExpensesSubMenu && <ToggleMenu />}
				</div>
			</div>
			<div className='flex items-center flex-wrap justify-center mb-10 gap-6 font-poppins'>
				<div className='flex items-center justify-center gap-1'>
					<div className='w-3 h-3 rounded-full bg-myEmerald'></div>
					<span className='text-white text-xs tracking-wider'>Shopping</span>
				</div>
				<div className='flex items-center justify-center gap-1'>
					<div className='w-3 h-3 rounded-full bg-myRed'></div>
					<span className='text-white text-xs tracking-wider'>Bills</span>
				</div>
				<div className='flex items-center justify-center gap-1'>
					<div className='w-3 h-3 rounded-full bg-myBlue'></div>
					<span className='text-white text-xs tracking-wider'>
						Entertainment
					</span>
				</div>
				<div className='flex items-center justify-center gap-1'>
					<div className='w-3 h-3 rounded-full bg-myOrange'></div>
					<span className='text-white text-xs tracking-wider'>Other</span>
				</div>
			</div>
			<div className='flex justify-around items-center w-full gap-2'>
				<div className='w-28 h-28 font-semibold'>
					<CircularProgressbar
						value={progressValues.shopping}
						text={`${progressValues.shopping}%`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: '#CEF8DC',
							textColor: '#000',
							pathColor: '#50D1B2',
							trailColor: 'transparent',
						})}
					/>
				</div>
				<div className='w-28 h-28 font-semibold'>
					<CircularProgressbar
						value={progressValues.bills}
						text={`${progressValues.bills}%`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: '#f2d3d3',
							textColor: '#000',
							pathColor: '#BF2323',
							trailColor: 'transparent',
						})}
					/>
				</div>
				<div className='w-28 h-28 font-semibold'>
					<CircularProgressbar
						value={progressValues.entertainment}
						text={`${progressValues.entertainment}%`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: '#d3e3ff',
							textColor: '#000',
							pathColor: '#2775FF',
							trailColor: 'transparent',
						})}
					/>
				</div>
				<div className='w-28 h-28 font-semibold'>
					<CircularProgressbar
						value={progressValues.other}
						text={`${progressValues.other}%`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: '#fbe8dd',
							textColor: '#000',
							pathColor: '#EC8C56',
							trailColor: 'transparent',
						})}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default AllExpenses;
