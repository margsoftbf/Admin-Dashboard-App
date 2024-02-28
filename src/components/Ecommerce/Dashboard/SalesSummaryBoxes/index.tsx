import { containerAnimation, itemAnimation, sellsBoxesData } from '@/data/data';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import CountUp from 'react-countup';

const SellsSummaryBoxes = () => {
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
					className='group rounded-xl bg-myPrimary text-white py-6 px-5 flex flex-col gap-4'
					variants={itemAnimation}
				>
					<div className='flex justify-between items-center font-poppins'>
						<div>
							<p className='text-2xl font-semibold tracking-wide'>
								<CountUp end={box.price} duration={1.75} />+
							</p>
							<p className='text-myGray text-[14px] font-medium'>{box.title}</p>
						</div>
						<div className='rounded-xl w-14 h-14 relative group group-hover:animate-wiggle'>
							<div
								className='bg-myIndigo/20 w-full h-full rounded-md'
								style={{ backgroundColor: box.bgColor, opacity: 0.15 }}
							></div>
							<box.icon
								className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-white `}
								style={{ color: box.bgColor }}
							/>
						</div>
					</div>
					<div className='bg-myGrayDarker rounded-md p-2 flex gap-1 text-[14px] items-center'>
						<div
							className={`font-bold flex gap-1 items-center justify-center ${
								box.percent >= 0 ? 'text-green-500' : 'text-red-500'
							}`}
						>
							{box.percent >= 0 ? (
								<FaArrowUp className='w-3.5 h-3.5' />
							) : (
								<FaArrowDown className='w-3.5 h-3.5' />
							)}
							<span>{Math.abs(box.percent)}%</span>
						</div>
						<span className='text-myGray ml-1 font-semibold'>
							Since last month
						</span>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default SellsSummaryBoxes;
