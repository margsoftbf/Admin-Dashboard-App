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
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import ButtonAction from '@/components/ui/ButtonAction';
const OrderList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{ name: 'Order List', href: '/ecommerce/order-list', current: true },
	];

	const router = useRouter();

	const handleRowClick = (orderId: string) => {
		router.push(`/ecommerce/order-details/${orderId}`);
	};

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
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins overflow-x-auto'>
				<motion.table
					className='w-full mt-4 font-poppins table-auto'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
							<th className='text-left px-2'>
								<label htmlFor='selectAllCheckbox' className='sr-only'>
									Select all orders
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4'
									type='checkbox'
								/>
							</th>
							<th className='text-left px-4'>Order ID</th>
							<th className='text-left px-4'>Customer Name</th>
							<th className='text-left px-4'>Address</th>
							<th className='text-left px-4'>Date</th>
							<th className='text-left px-4'>Payment Method</th>
							<th className='text-left px-4'>Total</th>
							<th className='text-left px-4'>Status</th>
							<th className='text-right px-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ordersList.map((order) => (
							<motion.tr
								key={order.id}
								variants={itemAnimation}
								onClick={() => handleRowClick(order.orderId)}
								className='hover:bg-zinc-900 cursor-pointer border-b border-b-myGray/60 text-white text-[14px]'
							>
								<td className='text-left py-6 px-2'>
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
								<td className='px-4 whitespace-nowrap'>#{order.orderId}</td>
								<td className='px-4 whitespace-nowrap'>
									<div className='flex items-center gap-2'>
										<div className='w-7 h-7 rounded-full overflow-hidden'>
											<img
												src={order.avatar}
												alt={`Avatar of ${order.avatarAlt}`}
											/>
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
												handleRowClick(order.orderId);
											}}
										>
											<FiEye className='w-5 h-5' />
										</ButtonAction>
										<ButtonAction
											className='hover:bg-myBlue text-myBlue hover:text-white'
											onClick={(e) => {
												e.stopPropagation();
												handleRowClick(order.orderId);
											}}
										>
											<FiEdit className='w-5 h-5' />
										</ButtonAction>
										<ButtonAction
											className='text-myRed hover:bg-myRed hover:text-white'
											onClick={(e) => {
												e.stopPropagation();
												handleRowClick(order.orderId);
											}}
										>
											<FiTrash2 className='w-5 h-5' />
										</ButtonAction>
									</div>
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
