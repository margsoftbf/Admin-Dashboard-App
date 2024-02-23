import ToggleMenu from '@/components/ui/ToggleMenu';
import React, { useState } from 'react';
import { IconToggle } from '../../../../public/assets/svg';
import { containerAnimation, itemAnimation, ordersList } from '@/data/data';
import { motion } from 'framer-motion';
import { OrderListTypes, ProductTypes } from '@/types/types';
import productData from '../../../data/products.json';
import { useRouter } from 'next/router';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import ButtonAction from '@/components/ui/ButtonAction';

const RecentPurchases = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const router = useRouter();


	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	const getStatusColorClass = (status: string) => {
		switch (status) {
			case 'Delivered':
				return 'bg-myGreen';
			case 'Pending':
				return 'bg-myOrange';
			case 'Canceled':
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

	const handleRowClick = (orderId: string) => {
		router.push(`/ecommerce/order-details/${orderId}`);
	};

	return (
		<motion.div
			className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 overflow-x-auto'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<div className='flex items-center justify-between py-2'>
				<h2 className='text-myGray font-poppins text-[14px] font-medium'>
					Recent Purchases
				</h2>
				<div>
					<button
						aria-label='More'
						className='flex items-center justify-between py-2 px-0 cursor-pointer'
						onClick={toggleMenu}
					>
						<IconToggle />
					</button>
					{isMenuVisible && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px]'> </div>
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
						<th className='text-left px-4'>Order ID</th>
						<th className='text-left  px-4'>Customer name</th>

						<th className='text-left px-4'>Date</th>
						<th className='text-left px-4'>Status</th>
						<th className='text-left px-4'>Payment Method</th>
						<th className='text-left px-4'>Amount</th>
						<th className='text-right px-4'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ordersList.slice(0, 5).map((order, index) => (
						<motion.tr
							key={order.id}
							onClick={() => handleRowClick(order.orderId)}
							className={`border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer whitespace-nowrap`}
							variants={itemAnimation}
						>
							<td className='text-left pl-2 py-4'>
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
								<span>#{order.orderId}</span>
							</td>
							<td className='px-4'>
								<div className='flex items-center gap-2'>
									<div className='w-7 h-7 rounded-full overflow-hidden'>
										<img src={order.avatar} alt={order.avatarAlt} />
									</div>
									<p className='text-normal text-gray-1100 '>{order.name}</p>
								</div>
							</td>
							<td className='px-4'>
								<span>{order.date}</span>
							</td>

							<td className='px-4'>
								<div className='flex items-center gap-x-2'>
									<div
										className={`w-2 h-2 rounded-full ${getStatusColorClass(
											order.status
										)}`}
									></div>
									<p className='text-normal'>{order.status}</p>
								</div>
							</td>
							<td className='px-4'>
								<div className='flex items-center gap-2'>
									<img
										src={getPaymentMethodImage(order.payment)}
										alt=''
										className='w-auto h-6'
									/>
									{order.payment}
								</div>
							</td>
							<td className='px-4'>
								${calculateTotalAmount(order, productData)}
							</td>
							<td className='text-right px-4'>
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
			</table>
		</motion.div>
	);
};

export default RecentPurchases;
