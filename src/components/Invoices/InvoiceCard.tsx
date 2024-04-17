import React from 'react';
import { InvoiceListProps } from '../../types/types';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const InvoiceCard = ({
	invoice,
	index,
	onEdit,
	onDelete,
	avatar,
}: InvoiceListProps) => {
	const getStatusColorClass = (status: string) => {
		switch (status) {
			case 'Paid':
				return 'bg-green-500/20 text-green-500';
			case 'Pending':
				return 'bg-orange-500/20 text-orange-500';
			case 'Cancelled':
				return 'bg-red-500/20 text-red-500';
			default:
				return 'bg-gray-400';
		}
	};

	return (
		<motion.tr
			className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer whitespace-nowrap'
			initial={{ opacity: 0, y: -50 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { delay: index * 0.2 },
			}}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5 }}
		>
			<td className='text-left pl-2 py-5'>
				<label htmlFor={`checkbox-${invoice.id}`} className='sr-only'>
					Select invoice {invoice.id}
				</label>
				<input
					id={`checkbox-${invoice.id}`}
					className='rounded border-2 w-4 h-4'
					type='checkbox'
					onClick={(e) => {
						e.stopPropagation();
					}}
				/>
			</td>
			<td className='text-xs text-white font-semibold px-4'>
				<span className='text-myViolet font-semibold mr-1'>#</span>
				{invoice.id.slice(0, 6)}
			</td>
			<td className='px-4'>
				<span className='text-green-600 font-semibold mr-1'>$</span>
				{invoice.amount}
			</td>
			<td className='px-4'>
				<div className='flex items-center gap-2'>
					<div className='w-7 h-7 rounded-full overflow-hidden'>
						<img src={avatar} />
					</div>
					<p className='text-normal text-gray-1100 '>{invoice.clientName}</p>
				</div>
			</td>
			<td className='px-4'>
				<div className='flex gap-2 items-center'>
					<EnvelopeIcon className='w-5 h-5' />
					{invoice.emailAddress}
				</div>
			</td>
			<td className='px-4'>
				<div className='flex items-center gap-2'>
					<MapPinIcon className='w-5 h-5' />
					<div className='flex flex-col'>
						<p>{invoice.streetAddress}</p>
						<p>
							{invoice.zipCode}, {invoice.city}
						</p>
					</div>
				</div>
			</td>
			<td className='px-4'>
				<div className='flex items-center gap-x-2'>
					<p
						className={`py-1 px-3 text-xs rounded-lg  ${getStatusColorClass(
							invoice.status
						)}`}
					>
						{invoice.status}
					</p>
				</div>
			</td>
			<td className='flex justify-end items-center py-4 pr-4'>
				<div className='flex gap-x-2'>
					<button
						className='bg-blue-500 text-white px-2 py-1 rounded'
						onClick={() => onEdit(invoice.id)}
					>
						Edit
					</button>
					<button
						className='bg-red-500 text-white px-2 py-1 rounded ml-2'
						onClick={() => onDelete(invoice.id)}
					>
						Delete
					</button>
				</div>
			</td>
		</motion.tr>
	);
};

export default InvoiceCard;
