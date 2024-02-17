import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { OrderListTypes } from '@/types/types';
import { ordersList, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import { IconMore } from '../../../../public/assets/svg';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
const CustomerReviews = () => {
	const router = useRouter();
	const { orderId } = router.query;
	const [reviews, setReviews] = useState<OrderListTypes[]>([]);
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{
			name: 'Customer Reviews',
			href: `/ecommerce/customer-review/${orderId}`,
			current: true,
		},
	];

	const toggleAction = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

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

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Customer Reviews
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-white font-poppins text-base font-medium'>
						Customer Reviews
					</h2>
				</div>
				<motion.table
					className='w-full mt-4 font-poppins'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead>
						<tr className='border-b border-b-myGray/60 text-myGray'>
							<th className='text-left px-2'>
								<label htmlFor='selectAllCheckbox' className='sr-only'>
									Select all customers
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4 mb-2'
									type='checkbox'
								/>
							</th>
							<th className='pb-2 hidden xs:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Name</span>
								</div>
							</th>
							<th className='pb-2 xl:px-10'>
								<div className='flex items-center gap-x-2 px-2'>
									<span className='text-xs font-medium'>Comment</span>
								</div>
							</th>
							<th className='pb-2 hidden xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Rating</span>
								</div>
							</th>
							<th className='pb-2 hidden xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Date</span>
								</div>
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ordersList.map((order) => (
							<motion.tr
								key={order.id}
								variants={itemAnimation}
								className='hover:bg-zinc-800 border-b border-b-myGray/60 text-white text-[14px]'
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
								<td className='py-2 px-2'>
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
									className='hidden xs:table-cell px-2 xl:px-12 py-2 max-w-56 line-clamp-3'
								>
									{order.review}
								</td>
								<td className='hidden xl:table-cell py-2 px-2'>
									<div className='flex items-center gap-1'>
										{' '}
										<div className='flex items-center relative overflow-hidden gap-[3px]'>
											<div className='flex items-center absolute overflow-hidden gap-[3px] w-[100%]'></div>
											{renderStars(order.rating || 0)}
										</div>
									</div>
								</td>
								<td className='hidden 2xl:table-cell py-2 px-2'>
									<div className='flex items-center gap-1'>
										<CalendarDaysIcon className='w-5 h-5' />
										{order.joined}
									</div>
								</td>

								<td className='px-2 py-2'>
									<button
										aria-label='More'
										onClick={(e) => {
											e.stopPropagation();
											toggleAction(order.id);
										}}
									>
										<IconMore className='cursor-pointer' />
									</button>
									{activeMenuId === order.id && (
										<div className='z-50 absolute mt-2 w-28 right-12 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs text-right'>
											<ul>
												<li className='hover:text-myGray'>
													<a href='#' className='block px-4 py-2'>
														View details
													</a>
												</li>
												<li className='hover:text-myGray'>
													<a href='#' className='block px-4 py-2'>
														Edit
													</a>
												</li>
												<li className='hover:text-myGray'>
													<a href='#' className='block px-4 py-2'>
														Cancel
													</a>
												</li>
											</ul>
										</div>
									)}
								</td>
							</motion.tr>
						))}
					</tbody>
				</motion.table>
			</div>
		</MainLayout>
	);
};

export default CustomerReviews;
