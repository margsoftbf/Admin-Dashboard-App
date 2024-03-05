import { motion } from 'framer-motion';
import { itemAnimation } from '@/data/data';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import { OrderListTypes } from '@/types/types';

interface CustomerRowProps {
	order: OrderListTypes;
	onRowClick: (id: string) => void;
	getOnlineStatusColor: (status: boolean) => string;
}

const CustomerRow = ({
	order,
	onRowClick,
    getOnlineStatusColor
}: CustomerRowProps) => {
	return (
		<tbody>
			<motion.tr
				key={order.id}
				variants={itemAnimation}
				onClick={() => onRowClick(order.orderId)}
				className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer'
			>
				<td className='text-left pl-2 py-6 whitespace-nowrap'>
					<label htmlFor={`selectOrder-${order.id}`} className='sr-only'>
						Select order {order.orderId}
					</label>
					<input
						id={`selectOrder-${order.id}`}
						className='rounded border-2 w-4 h-4'
						type='checkbox'
					/>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-2'>
						<div className='w-7 h-7 rounded-full overflow-hidden'>
							<img src={order.avatar} alt={`Avatar of ${order.avatarAlt}`} />
						</div>
						<p className='text-normal text-gray-1100 '>{order.name}</p>
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>{order.email}</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-1'>{order.phone}</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex gap-1 items-center'>
						<MapPinIcon className='w-5 h-5' />
						<div className='flex flex-col text-xs'>
							<span>{order.street}</span>
							<span>
								{order.zipCode}, {order.city}
							</span>
						</div>
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-x-2'>
						<div
							className={`w-2 h-2 rounded-full ${getOnlineStatusColor(
								order.online
							)}`}
						></div>
						<p className='text-normal'>
							{order.online === true ? 'Online' : 'Offline'}
						</p>
					</div>
				</td>

				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-1'>
						<CalendarDaysIcon className='w-5 h-5' />
						{order.joined}
					</div>
				</td>
				<td className='px-4'>
					<div className='relative w-full flex justify-end gap-4'>
						<ButtonAction
							className='hover:bg-white hover:text-black'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(order.orderId);
							}}
						>
							<FiEye className='w-5 h-5' />
						</ButtonAction>
						<ButtonAction
							className='hover:bg-myBlue text-myBlue hover:text-white'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(order.orderId);
							}}
						>
							<FiEdit className='w-5 h-5' />
						</ButtonAction>
						<ButtonAction
							className='text-myRed hover:bg-myRed hover:text-white'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(order.orderId);
							}}
						>
							<FiTrash2 className='w-5 h-5' />
						</ButtonAction>
					</div>
				</td>
			</motion.tr>
		</tbody>
	);
};

export default CustomerRow;
