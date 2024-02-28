import React, { useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import {
	containerAnimation,
	itemAnimation,
	expensesByCategory,
} from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { motion } from 'framer-motion';

const Expenses = () => {
	const [expensesSubMenu, setExpensesSubMenu] = useState(false);
	return (
		<motion.div
			className='rounded-2xl border border-[#313442] bg-myPrimary py-4 flex-1 px-5'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-myGray text-[14px] font-medium'>
					Expenses by category
				</h2>
				<div className='ml-auto translate-x-4 relative'>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-4 cursor-pointer'
						onClick={() => setExpensesSubMenu(!expensesSubMenu)}
					>
						<IconToggle />
					</button>
					{expensesSubMenu && <ToggleMenu />}
				</div>
			</div>
			<motion.div
				className='flex items-center gap-5 flex-col mt-6'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				{expensesByCategory.map((data) => (
					<motion.div
						key={data.id}
						className='w-full flex flex-col gap-1.5'
						variants={itemAnimation}
					>
						<div className='flex items-center justify-between mb-[10px]'>
							<p className='text-sm leading-4'>{data.name}</p>
							<p className='text-sm leading-4 text-myGray'>${data.money}</p>
						</div>
						<div className='flex items-center w-full gap-x-[14px]'>
							<div className='w-full rounded-full h-2.5 bg-black'>
								<div
									className={`h-2.5 rounded-full w-full`}
									style={{
										width: `${Math.floor((data.money / 1000) * 100)}%`,
										backgroundColor: `${data.bgColor}`,
									}}
								></div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Expenses;
