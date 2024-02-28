import React, { useEffect, useState } from 'react';
import { IconToggle } from '../../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import 'react-circular-progressbar/dist/styles.css';
import {
	financialWalletData,
	containerAnimation,
	itemAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';

const YourWallet = () => {
	const [walletSubMenu, setWalletSubMenu] = useState(false);

	return (
		<motion.div
			className='font-poppins rounded-2xl border border-[#313442] bg-myPrimary py-4 flex-1 px-5 h-64'
			variants={itemAnimation}
		>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-myGray text-[14px] font-medium'>You wallet</h2>
				<div className='ml-auto translate-x-4 relative'>
					<button
						aria-label='More'
						onClick={() => setWalletSubMenu(!walletSubMenu)}
						className='flex items-center justify-between py-2 px-4 cursor-pointer'
					>
						<IconToggle />
					</button>
					{walletSubMenu && <ToggleMenu />}
				</div>
			</div>
			<motion.div
				className='flex flex-col gap-4'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				{financialWalletData.map((data) => (
					<motion.div
						key={data.id}
						className='flex items-center justify-between py-1'
						variants={itemAnimation}
					>
						<div>
							<p className='text-gray-400 text-xs mb-1'>{data.cardNumber}</p>
							<p className='text-sm leading-4 text-white font-semibold '>
								${data.money.toFixed(2)}
							</p>
						</div>
						<div className='w-12 h-8'>
							<img src={data.img} alt='payment method' />
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default YourWallet;
