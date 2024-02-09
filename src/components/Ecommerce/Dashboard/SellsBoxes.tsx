import { containerAnimation, itemAnimation, sellsBoxesData } from '@/data/data';
import { useState } from 'react';
import {
	IconToggle,
	IconBag,
	IconExportGreen,
} from '../../../../public/assets/svg';
import ToggleMenu from '@/components/ui/ToggleMenu';
import { motion } from 'framer-motion';

const SellsBoxes = () => {
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

	const toggleMenu = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-7 lg:grid-cols-2 2xl:grid-cols-4 '
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			{sellsBoxesData.map((box) => (
				<motion.div
					key={box.id}
					className='rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'
					variants={itemAnimation}
				>
					<div className='flex items-center justify-between mb-4'>
						<h2 className='text-myGray font-poppins text-[14px] font-medium'>
							{box.title}
						</h2>
						<div className='ml-auto translate-x-4 relative'>
							<button
								onClick={() => toggleMenu(box.id)}
								className='flex items-center justify-between py-2 px-4 cursor-pointer'
							>
								<IconToggle />
							</button>
							{activeMenuId === box.id && <ToggleMenu />}
						</div>
					</div>
					<div className='flex items-center justify-between mb-1'>
						<div className='flex items-center gap-3'>
							<div
								className={`${box.bgColor}  w-8 h-8 rounded-lg grid items-center justify-center`}
							>
								<IconBag />
							</div>
							<p className='font-bold text-white font-poppins text-lg'>
								${box.price.toFixed(2)}
							</p>
						</div>
						<div className='flex flex-col gap-1 items-end'>
							<div className='flex items-center gap-2'>
								<IconExportGreen />
								<span className='font-medium text-myGreen items-center justify-center text-base'>
									{box.percent}%
								</span>
							</div>
						</div>
					</div>
					<p className='text-right text-[10px] text-myGray font-poppins leading-5'>
						Compared to Jan 2023
					</p>
				</motion.div>
			))}
		</motion.div>
	);
};

export default SellsBoxes;