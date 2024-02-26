import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import {
	containerAnimation,
	itemAnimation,
	latestTransfersData,
} from '@/data/data';
import { motion } from 'framer-motion';
import TransactionDetailsModal from '@/components/Finance/Cards/TransactionDetailsModal';
import { TransactionDetails } from '@/types/types';
const Transactions = () => {
	const [activeTransaction, setActiveTransaction] = useState<TransactionDetails | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = (transaction: TransactionDetails) => {
		setActiveTransaction(transaction);
		setIsModalOpen(true);
	};
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Finance', href: '/finance', current: false },
		{ name: 'Transactions', href: '/transactions', current: true },
	];

	const getStatusColorClass = (status: string) => {
		switch (status) {
			case 'Delivered':
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
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Transactions
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 overflow-x-auto'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<table className='w-full table-auto'>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-[14px] text-white whitespace-nowrap'>
							<th className='text-left pl-2 '>
								<label htmlFor='selectAll' className='sr-only'>
									Select All
								</label>
								<input
									id='selectAll'
									className='rounded border-2 w-4 h-4'
									type='checkbox'
								/>
							</th>
							<th className='text-left px-4'>Company</th>
							<th className='text-left px-4'>Payment to</th>
							<th className='text-left px-4'>Invoice ID</th>
							<th className='text-left px-4'>Total</th>
							<th className='text-left px-4'>Fee</th>
							<th className='text-left px-4'>Status</th>
							<th className='text-left px-4'>Date</th>
						</tr>
					</thead>
					<tbody>
						{latestTransfersData.map((order) => (
							<motion.tr
								key={order.id}
								className={`border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 whitespace-nowrap cursor-pointer`}
								onClick={() => handleOpenModal(order)}
								variants={itemAnimation}
							>
								<td className='text-left pl-2 py-6'>
									<label htmlFor={`checkbox-${order.id}`} className='sr-only'>
										Select order {order.id}
									</label>
									<input
										id={`checkbox-${order.id}`}
										className='rounded border-2 w-4 h-4'
										type='checkbox'
										onClick={(e) => {
											e.stopPropagation();
										}}
									/>
								</td>
								<td className='px-4'>
									<div className='flex items-center gap-2'>
										<div className='w-9 h-9 bg-white flex-shrink-0 p-1.5 rounded-full overflow-hidden'>
											<img src={order.img} alt={`${order.name} picture`} />
										</div>
										<span className=' font-semibold text-white mb-1 text-[14px]'>
											{order.name}
										</span>
									</div>
								</td>
								<td className='px-4'>
									<div className='flex flex-col'>
										<p className='text-white text-[14px] font-medium'>
											{order.recipientInfo.email}
										</p>
										<p className='text-myGray text-xs'>
											{order.recipientInfo.address}
										</p>
										<p className='text-myGray text-xs'>
											{order.recipientInfo.phone}
										</p>
									</div>
								</td>
								<td className='px-4'>#{order.invoiceId}</td>
								<td className='px-4 text-white font-medium'>
									${order.price.toFixed(2)}
								</td>
								<td className='px-4'>${(order.price * 0.17).toFixed(2)}</td>

								<td className='px-4'>
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
								<td className='px-4'>{order.date}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
				<TransactionDetailsModal
					open={isModalOpen}
					handleClose={() => setIsModalOpen(false)}
					transaction={activeTransaction}
				/>
			</motion.div>
		</MainLayout>
	);
};

export default Transactions;
