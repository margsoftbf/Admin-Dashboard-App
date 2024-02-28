import ToggleMenu from '@/components/ui/ToggleMenu';
import React, { useState } from 'react';
import { containerAnimation, paymentCards, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { IconToggle } from '../../../../../public/assets/svg';
import Button from '@/components/ui/Button';
import AddCardModal from './AddCardModal';

const YourCards = () => {
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleMenu = (menuId: string) => {
		if (activeMenuId === menuId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(menuId);
		}
	};

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<motion.div
			className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5  mb-6 text-white flex flex-col justify-center'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<div className='flex flex-row items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Your cards
				</h2>
				<div className='xs:ml-auto flex gap-1 items-center translate-x-4 z-10 relative'>
					<div>
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
			<div className='grid items-center gap-6 grid-cols-1 mb-10 md:grid-cols-2 2xl:grid-cols-4 '>
				{paymentCards.map((payment) => (
					<motion.div
						key={payment.id}
						className={`rounded-lg pt-5 pb-6 flex-1 text-white px-3 flex flex-col justify-between h-44`}
						style={{
							background: `linear-gradient(to right, ${payment.gradientColors.from}, ${payment.gradientColors.to})`,
						}}
						variants={itemAnimation}
					>
						<div className='flex justify-between '>
							<div className='font-poppins flex flex-col gap-2'>
								<p className='text-[14px] font-medium text-zinc-300'>
									Current Balance
								</p>
								<p className='text-3xl font-inter'>{payment.balance}</p>
							</div>
							<div>
								<img src={payment.iconPath} alt='Payment method icon' />
							</div>
						</div>
						<div className='flex justify-between '>
							<p className='font-inter font-medium text-[14px]'>
								{payment.cardNumber}
							</p>
							<p className='font-inter font-medium text-[14px] '>
								Valid: {payment.expiryDate}
							</p>
						</div>
					</motion.div>
				))}
			</div>

			<Button
				onClick={handleOpenModal}
				className='bg-myGrayDarker hover:bg-zinc-900 w-64 mx-auto'
			>
				+ Add new card
			</Button>
			<AddCardModal open={isModalOpen} handleClose={handleCloseModal} />
		</motion.div>
	);
};

export default YourCards;
