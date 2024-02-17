import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import { ordersList, containerAnimation, itemAnimation } from '@/data/data';
import { IconMore } from '../../../public/assets/svg';
import productData from '../../data/products.json';
import { ProductTypes, OrderListTypes } from '@/types/types';

const OrderList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{ name: 'Order List', href: '/ecommerce/order-list', current: true },
	];

	const router = useRouter();
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

	const toggleAction = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

	const handleRowClick = (orderId: string) => {
		router.push(`/ecommerce/order-details/${orderId}`);
	};

	const getStatusColorClass = (status: string) => {
		switch (status) {
			case 'Delivered':
				return 'bg-myGreen';
			case 'Pending':
				return 'bg-myOrange';
			case 'Cancelled':
				return 'bg-myRed';
			default:
				return 'bg-gray-400';
		}
	};

	const getPaymentMethodImage = (paymentMethod: string) => {
		switch (paymentMethod) {
			case 'Visa':
				return '/assets/other/Visa.png';
			case 'Paypal':
				return '/assets/other/Paypal.png';
			case 'Mastercard':
				return '/assets/other/Mastercard.png';
			default:
				return '';
		}
	};

	const calculateTotalAmount = (
		order: OrderListTypes,
		productsData: ProductTypes[]
	): string => {
		const totalAmount = order.products.reduce((acc, productOrder) => {
			const productDetails = productsData.find(
				(product) => product.asin === productOrder.asin
			);
			if (productDetails) {
				return acc + productDetails.price.value * productOrder.quantity;
			}
			return acc;
		}, 0);

		return totalAmount.toFixed(2);
	};

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Order List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-white font-poppins text-base font-medium'>
						Recent Orders
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
									Select all orders
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4 mb-2'
									type='checkbox'
								/>
							</th>
							<th className='pb-2 hidden xs:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Order ID</span>
								</div>
							</th>
							<th className='pb-2'>
								<div className='flex items-center gap-x-2 px-2'>
									<span className='text-xs font-medium'>Customer Name</span>
								</div>
							</th>
							<th className='pb-2 hidden xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Address</span>
								</div>
							</th>
							<th className='pb-2 hidden xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Date</span>
								</div>
							</th>
							<th className='pb-2 hidden 2xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Payment Method</span>
								</div>
							</th>
							<th className='pb-2 hidden 2xl:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Total</span>
								</div>
							</th>
							<th className='pb-2 hidden md:table-cell px-2'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Status</span>
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
								onClick={() => handleRowClick(order.orderId)}
								className='hover:bg-zinc-800 cursor-pointer border-b border-b-myGray/60 text-white text-[14px]'
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
								<td className='hidden xs:table-cell px-2 py-2'>
									#{order.orderId}
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
								<td className='hidden xl:table-cell px-2 py-2'>
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
								<td className='hidden xl:table-cell py-2 px-2'>
									<div className='flex items-center gap-1'>
										<CalendarDaysIcon className='w-5 h-5' />
										{order.date}
									</div>
								</td>
								<td className='hidden 2xl:table-cell py-2 px-2'>
									<div className='flex items-center gap-1'>
										<img
											src={getPaymentMethodImage(order.payment)}
											alt=''
											className='w-auto h-6'
										/>
										{order.payment}
									</div>
								</td>

								<td className='hidden 2xl:table-cell py-2 px-2'>
									${calculateTotalAmount(order, productData)}
								</td>
								<td className='hidden md:table-cell py-2 px-2'>
									<div className='flex items-center gap-x-2'>
										<div
											className={`w-2 h-2 rounded-full ${getStatusColorClass(
												order.status
											)}`}
										></div>
										<p className='text-normal'>{order.status}</p>
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

export default OrderList;
