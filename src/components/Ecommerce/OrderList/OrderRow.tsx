import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import { OrderListTypes, ProductTypes } from '@/types/types';
import { itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
interface OrderRowProps {
	order: OrderListTypes;
	onRowClick: (id: string) => void;
	getPaymentMethodImage: (paymentMethod: string) => string;
	calculateTotalAmount: (
		order: OrderListTypes,
		productsData: ProductTypes[]
	) => string;
	getStatusColorClass: (status: string) => string;
	productData: ProductTypes[];
}

const OrderRow = ({
	order,
	onRowClick,
	getPaymentMethodImage,
	calculateTotalAmount,
	getStatusColorClass,
	productData,
}: OrderRowProps) => {
	return (
		<tbody>
			<motion.tr
				key={order.id}
				variants={itemAnimation}
				onClick={() => onRowClick(order.orderId)}
				className='hover:bg-zinc-900 cursor-pointer border-b border-b-myGray/60 text-white text-[14px]'
			>
				<td className='text-left py-6 px-2'>
					<label htmlFor={`selectOrder-${order.id}`} className='sr-only'>
						Select order {order.orderId}
					</label>
					<input
						id={`selectOrder-${order.id}`}
						className='rounded border-2 w-4 h-4'
						type='checkbox'
					/>
				</td>
				<td className='px-4 whitespace-nowrap'>#{order.orderId}</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-2'>
						<div className='w-7 h-7 rounded-full overflow-hidden'>
							<img src={order.avatar} alt={`Avatar of ${order.avatarAlt}`} />
						</div>
						<p className='text-normal text-gray-1100 '>{order.name}</p>
					</div>
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
					<div className='flex items-center gap-1'>
						<CalendarDaysIcon className='w-5 h-5' />
						{order.date}
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-1'>
						<img
							src={getPaymentMethodImage(order.payment)}
							alt=''
							className='w-auto h-6'
						/>
						{order.payment}
					</div>
				</td>

				<td className='px-4 whitespace-nowrap'>
					${calculateTotalAmount(order, productData)}
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-x-2'>
						<p
							className={`py-1 px-3 text-xs rounded-lg  ${getStatusColorClass(
								order.status
							)}`}
						>
							{order.status}
						</p>
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

export default OrderRow;
