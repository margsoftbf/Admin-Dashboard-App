import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { OrderListTypes } from '@/types/types';
import { ordersList, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';

import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import ConfirmationModal from '@/components/ui/ConfirmationModal';

const CustomerReviews = () => {
	const router = useRouter();
	const { orderId } = router.query;
	const [reviews, setReviews] = useState<OrderListTypes[]>([]);
	const [openModal, setOpenModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{
			name: 'Customer Reviews',
			href: `/ecommerce/customer-review/${orderId}`,
			current: true,
		},
	];

	useEffect(() => {
		if (orderId) {
			const foundReview = ordersList.find((order) => order.orderId === orderId);
			setReviews(foundReview ? [foundReview] : []);
		}
	}, [orderId]);

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

	const handleOpenModal = (action: string) => {
		setModalTitle(`Are you sure you want to ${action}?`);
		setOpenModal(true);
	};

	const handleCloseModal = () => setOpenModal(false);

	const handleConfirmAction = () => {
		setOpenModal(false);
	};

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Customer Reviews
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins overflow-x-auto'>
				<motion.table
					className='w-full mt-2 font-poppins table-auto'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
							<th className='text-left pl-2'>
								<label htmlFor='selectAllCheckbox' className='sr-only'>
									Select all customers
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4 mb-2'
									type='checkbox'
								/>
							</th>
							<th className='text-left px-4'>Name</th>
							<th className='text-left px-4'>Comment</th>
							<th className='text-left px-4'>Rating</th>
							<th className='text-left px-4'>Date</th>
							<th className='text-right px-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ordersList.map((order) => (
							<motion.tr
								key={order.id}
								variants={itemAnimation}
								className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer'
							>
								<td className='text-left py-6 lg:py-8 px-2'>
									<label
										htmlFor={`selectOrder-${order.id}`}
										className='sr-only'
									>
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
											<img
												src={order.avatar}
												alt={`Avatar of ${order.avatarAlt}`}
											/>
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
											onClick={() => handleOpenModal('view')}
										>
											<FiEye className='w-5 h-5' />
										</ButtonAction>
										<ButtonAction
											className='hover:bg-myBlue text-myBlue hover:text-white'
											onClick={() => handleOpenModal('edit')}
										>
											<FiEdit className='w-5 h-5' />
										</ButtonAction>
										<ButtonAction
											className='text-myRed hover:bg-myRed hover:text-white'
											onClick={() => handleOpenModal('delete')}
										>
											<FiTrash2 className='w-5 h-5' />
										</ButtonAction>
									</div>
								</td>
							</motion.tr>
						))}
					</tbody>
				</motion.table>
				<ConfirmationModal
					open={openModal}
					onClose={handleCloseModal}
					onConfirm={handleConfirmAction}
					title={modalTitle}
				/>
			</div>
		</MainLayout>
	);
};

export default CustomerReviews;
