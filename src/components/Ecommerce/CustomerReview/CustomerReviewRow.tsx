import { OrderListTypes } from '@/types/types';
import { itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import { StarIcon } from '@heroicons/react/24/solid';

interface CustomerReviewRowProps {
	order: OrderListTypes;
    onOpenModal: (action: 'view' | 'edit' | 'delete') => void;

}

const CustomerReviewRow = ({	order,
	onOpenModal,
   }: CustomerReviewRowProps) => {

        const renderStars = (rating: number = 0) => {
            const numRating = rating;
            let stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(
                    <span
                        key={i}
                        className={i < numRating ? 'text-[#FEA73E]' : 'text-myGray'}
                    >
                        <StarIcon className='w-3 h-3' />
                    </span>
                );
            }
            return stars;
        };

	return (
		<tbody>
				<motion.tr
					key={order.id}
					variants={itemAnimation}
					className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer'
				>
					<td className='text-left py-6 lg:py-8 px-2'>
						<label htmlFor={`selectOrder-${order.id}`} className='sr-only'>
							Select order {order.orderId}
						</label>
						<input
							id={`selectOrder-${order.id}`}
							className='rounded border-2 w-4 h-4'
							type='checkbox'
						/>
					</td>
					<td className='px-4 py-2'>
						<div className='flex items-center gap-2'>
							<div className='w-6 h-6 rounded-full overflow-hidden'>
								<img src={order.avatar} alt={`Avatar of ${order.avatarAlt}`} />
							</div>
							<p className='text-normal text-gray-1100 '>{order.name}</p>
						</div>
					</td>
					<td
						scope='row'
						className='table-cell pl-4 xl:pr-12  py-2 max-w-56 line-clamp-3'
					>
						{order.review}
					</td>
					<td className='px-4 py-2'>
						<div className='flex items-center gap-1'>
							{' '}
							<div className='flex items-center relative overflow-hidden gap-[3px]'>
								<div className='flex items-center absolute overflow-hidden gap-[3px] w-[100%]'></div>
								{renderStars(order.rating || 0)}
							</div>
						</div>
					</td>
					<td className='px-4 py-2'>
						<div className='flex items-center gap-1'>
							<CalendarDaysIcon className='w-5 h-5' />
							{order.joined}
						</div>
					</td>

					<td className='px-4'>
						<div className='relative w-full flex justify-end gap-4'>
							<ButtonAction
								className='hover:bg-white hover:text-black'
								onClick={() => onOpenModal('view')}
							>
								<FiEye className='w-5 h-5' />
							</ButtonAction>
							<ButtonAction
								className='hover:bg-myBlue text-myBlue hover:text-white'
								onClick={() => onOpenModal('edit')}
							>
								<FiEdit className='w-5 h-5' />
							</ButtonAction>
							<ButtonAction
								className='text-myRed hover:bg-myRed hover:text-white'
								onClick={() => onOpenModal('delete')}
							>
								<FiTrash2 className='w-5 h-5' />
							</ButtonAction>
						</div>
					</td>
				</motion.tr>
		</tbody>
	);
};

export default CustomerReviewRow;
