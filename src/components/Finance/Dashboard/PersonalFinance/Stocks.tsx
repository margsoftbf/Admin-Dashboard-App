import React, { useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import 'react-circular-progressbar/dist/styles.css';
import {
	containerAnimation,
	itemAnimation,
	financialWalletStocks,
} from '@/data/data';
import { motion } from 'framer-motion';

const Stocks = () => {
    const [stocksSubMenu, setStocksSubMenu] = useState(false);
	const today = new Date().toISOString().split('T')[0];


	return (
		<motion.div
			className='h-64 rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-myGray text-[14px] font-medium'>Stocks</h2>
				<div className='ml-auto translate-x-4 relative'>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-4 cursor-pointer'
						onClick={() => setStocksSubMenu(!stocksSubMenu)}
					>
						<IconToggle />
					</button>
					{stocksSubMenu && <ToggleMenu />}
				</div>
			</div>
			<motion.div
				className='flex flex-col gap-3 h-64'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				{financialWalletStocks.map((data) => (
					<motion.div
						key={data.id}
						className='flex items-center justify-between py-1'
						variants={itemAnimation}
					>
						<div className='flex items-center gap-3'>
							<div className='w-10 h-10 bg-white rounded-full p-2'>
								<img src={data.img} alt='stock icon' />
							</div>
							<div className='flex flex-col gap-1 font-poppins text-[14px]'>
								<p className='font-semibold'>{data.stockName}</p>
								<p className='text-gray-400 text-xs'>{today}</p>
							</div>
						</div>

						<div className='flex flex-col gap-1 text-[14px]'>
							<p className={`font-semibold `}>${data.price}</p>
							<p
								className={`font-semibold text-right ${
									data.priceChange < 0 ? 'text-red-500' : 'text-green-500'
								}`}
							>
								{data.priceChange < 0 ? '-' : '+'}${Math.abs(data.priceChange)}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Stocks;
