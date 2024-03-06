import React from 'react';
import { InvoiceListProps } from '../../types/types';

const InvoiceCard = ({ invoice, onEdit, onDelete }: InvoiceListProps) => {
	return (
		<div className='bg-myGrayDarker rounded-md p-4 mb-4 flex flex-col sm:flex-row sm:justify-around'>
			<div className='flex justify-between items-center sm:justify-start sm:w-full sm:gap-4 flex-shrink-1'>
				<p className='text-xs text-white font-semibold'>
					<span className='text-myViolet font-semibold mr-1'>#</span>
					{invoice.id.slice(0, 6)}
				</p>
				<p className='text-xs text-white font-semibold'>{invoice.clientName}</p>
			</div>
			<div className='flex justify-between items-center my-2 sm:justify-between sm:w-full flex-shrink-1'>
				<p className='text-white font-semibold'>
					<span className='text-green-600 font-semibold mr-1'>$</span>
					{invoice.amount}
				</p>
				<div
					className={`flex justify-center space-x-2 rounded-lg items-center px-2 py-1 ${
						invoice.status === 'Paid'
							? 'bg-green-500/20'
							: invoice.status === 'Pending'
							? 'bg-yellow-500/20'
							: invoice.status === 'Cancelled'
							? 'bg-red-500/20'
							: ''
					}`}
				>
					<div
						className={`h-2 w-2 rounded-full ${
							invoice.status === 'Paid'
								? 'bg-green-500'
								: invoice.status === 'Pending'
								? 'bg-yellow-500'
								: invoice.status === 'Cancelled'
								? 'bg-red-500'
								: ''
						}`}
					></div>
					<p
						className={`font-medium opacity-100 text-[14px] ${
							invoice.status === 'Paid'
								? 'text-green-500'
								: invoice.status === 'Pending'
								? 'text-yellow-500'
								: invoice.status === 'Cancelled'
								? 'text-red-500'
								: ''
						}`}
					>
						{invoice.status}
					</p>
				</div>
			</div>
			<div className='flex justify-between items-center sm:justify-end sm:w-full'>
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
		</div>
	);
};

export default InvoiceCard;
