import { StarIcon } from '@heroicons/react/24/solid';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { ordersList, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
const MailsList = () => {
	return (
		<motion.table
			className='w-full min-w-[800px]'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<tbody>
				{ordersList.map((order) => (
					<motion.tr
						key={order.id}
						className='border-b border-b-myGray'
						variants={itemAnimation}
					>
						<td className='max-w-6 py-6'>
							<input
								className='rounded border-2 w-4 h-4 translate-y-1'
								type='checkbox'
							/>
						</td>
						<td>
							<div className='flex items-center pl-5 gap-4'>
								<img
									className='w-10 h-10 rounded-full object-cover'
									src={order.avatar}
									alt={order.avatarAlt}
								/>
								<div className='flex-1'>
									<p className='text-normal font-semibold text-[14px]'>
										{order.name}
									</p>
									<p className='text-xs text-myGray'>on {order.date}</p>
								</div>
							</div>
						</td>
						<td>
							<p className='text-myGray pr-5 text-xs leading-4 p-3 pb-6 max-w-[500px] xl:max-w-[800px]'>
								{order.review}
							</p>
						</td>
						<td>
							<div className='flex items-center gap-1'>
								<PaperClipIcon className='w-6 h-6 text-myGray' />
								<StarIcon className='w-5 h-5 text-orange-500' />
							</div>
						</td>
					</motion.tr>
				))}
			</tbody>
		</motion.table>
	);
};

export default MailsList;
