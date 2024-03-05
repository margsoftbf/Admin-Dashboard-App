import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { OrderListTypes } from '@/types/types';
import { ordersList, containerAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import { StarIcon } from '@heroicons/react/24/solid';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import CustomerReviewRow from '@/components/Ecommerce/CustomerReview/CustomerReviewRow';

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
					{ordersList.map((order) => (
						<CustomerReviewRow
							key={order.id}
							order={order}
							onOpenModal={handleOpenModal}
						/>
					))}	
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
