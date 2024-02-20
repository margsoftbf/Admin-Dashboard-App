import React, { useState } from 'react';
import { IconToggle } from '../../../../public/assets/svg';
import {
	latestTransfersData,
	containerAnimation,
	itemAnimation,
} from '@/data/data';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { motion } from 'framer-motion';
const SpendingSummary = () => {
	const [latestSubMenu, setLatestSubMenu] = useState(false);
	const [expensesSubMenu, setExpensesSubMenu] = useState(false);
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-7 xl:grid-cols-3 text-white font-poppins'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<motion.div
				className='xl:col-span-2 rounded-2xl border border-[#313442] bg-myPrimary py-4 flex-1 px-5'
				variants={itemAnimation}
			>
				<div className='flex items-center justify-between mb-4'>
					<h2 className='text-myGray text-[14px] font-medium'>
						Latest transfers
					</h2>
					<div className='ml-auto translate-x-4 relative'>
						<button
							aria-label='More'
							className='flex items-center justify-between py-2 px-4 cursor-pointer'
							onClick={() => setLatestSubMenu(!latestSubMenu)}
						>
							<IconToggle />
						</button>
						{latestSubMenu && <ToggleMenu />}
					</div>
				</div>
				<motion.div
					className='flex flex-col gap-2'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					{latestTransfersData.map((data) => (
						<motion.div
							key={data.id}
							className='rounded-lg border border-myGrayDarker flex items-center justify-between pt-2 pb-3 px-4 xl:pr-3 hover:bg-zinc-800 cursor-pointer'
							variants={itemAnimation}
						>
							<div className='flex items-center flex-1 gap-4'>
								<div className='w-10 h-10 bg-white p-1 rounded-full overflow-hidden'>
									<img src={data.img} alt='brand logo' />
								</div>
								<div>
									<p className='font-semibold text-white mb-1 text-[14px]'>
										{data.name}
									</p>
									<p className=' text-myGray text-xs'>
										Invoice ID: #{data.invoiceId}
									</p>
								</div>
							</div>
							<div>
								<p className='font-semibold text-white mb-3 text-right text-[14px]'>
									${data.price}
								</p>
								<p className='text-myGray text-xs'>{data.date}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
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
				B
			</motion.div>
		</motion.div>
	);
};

export default SpendingSummary;
