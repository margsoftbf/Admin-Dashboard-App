import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ordersList } from '@/data/data';
import { OrderListTypes, ProductTypes } from '@/types/types';
import BreadCrumb from '@/components/common/Breadcrumb';
import {
	CalendarDaysIcon,
	PrinterIcon,
	ShoppingBagIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import productData from '../../../data/products.json';

interface ProductDetail extends ProductTypes {
	quantity: number;
	total: number;
}

const OrderDetails = () => {
	const router = useRouter();
	const { orderId } = router.query;
	const [orderDetails, setOrderDetails] = useState<OrderListTypes | null>(null);
	const [productsDetails, setProductsDetails] = useState<ProductDetail[]>([]);
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{
			name: 'Order Details',
			href: `/ecommerce/product-details/${orderId}`,
			current: true,
		},
	];

	useEffect(() => {
		if (orderId) {
			const foundOrder = ordersList.find((order) => order.orderId === orderId);
			setOrderDetails(foundOrder || null);
		}
	}, [orderId]);

	const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
		if (orderDetails) {
			const updatedOrderDetails = { ...orderDetails, status: e.target.value };
			setOrderDetails(updatedOrderDetails);
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

	useEffect(() => {
		if (orderDetails) {
			const foundProducts = orderDetails.products.map((orderProduct) => {
				const productDetails = productData.find(
					(product) => product.asin === orderProduct.asin
				);
				return {
					...productDetails,
					quantity: orderProduct.quantity,
					total: productDetails
						? productDetails.price.value * orderProduct.quantity
						: 0,
				} as ProductDetail;
			});
			setProductsDetails(foundProducts);
		}
	}, [orderDetails]);

	const calculateTotalAmount = () => {
		return productsDetails
			.reduce((acc, product) => acc + product.total, 0)
			.toFixed(2);
	};

	const calculateSubtotal = () => {
		return parseFloat(calculateTotalAmount());
	};

	const calculateTax = (subtotal: number) => {
		const taxRate = 0.2;
		return subtotal * taxRate;
	};

	const calculateTotal = (subtotal: number, tax: number) => {
		return subtotal + tax;
	};

	const subtotal = calculateSubtotal();
	const tax = calculateTax(subtotal);
	const total = calculateTotal(subtotal, tax);
	const status = orderDetails ? orderDetails.status : 'N/A';

	const navigateToProductDetails = (asin: string) => {
		router.push(`/ecommerce/product-details/${asin}`);
	};

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Order Details
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<p className='font-poppins text-gray-1100 text-base leading-4 mb-8 mt-2'>
					Orders ID: #{orderId}
				</p>
				<div className='flex justify-between items-center flex-col gap-y-4 mb-3 lg:mb-1 xs:flex-row pb-3 border-b border-b-myGray/60'>
					<div className='flex gap-3 text-[14px]'>
						<CalendarDaysIcon className='w-5 h-5' />
						{orderDetails?.date}
					</div>
					<div className='flex gap-4 flex-col xs:flex-row'>
						<div>
							<label htmlFor='orderStatus' className='sr-only'></label>
							<select
								id='orderStatus'
								className='w-full border h-12 font-normal text-sm leading-4 text-black mb-0 focus:outline-none max-w-76 rounded-md'
								value={orderDetails ? orderDetails.status : ''}
								onChange={handleStatusChange}
							>
								<option value='Delivered'>Delivered</option>
								<option value='Pending'>Pending</option>
								<option value='Cancelled'>Cancelled</option>
							</select>
						</div>
						<button className='rounded-md w-full xs:w-20 h-12 bg-myBlack transition duration-300 cursor-pointer hover:bg-myViolet'>
							Save
						</button>
						<button
							aria-label='Printer icon'
							className='rounded-md w-full xs:w-20 h-12 bg-myBlack flex items-center justify-center transition duration-300 cursor-pointer hover:bg-myViolet'
						>
							<PrinterIcon className='w-6 h-6' />
						</button>
					</div>
				</div>
				<div className='flex justify-between items-center my-6  gap-y-10 flex-row flex-wrap border-b border-b-myGray/60 pb-6'>
					<div className='flex items-start gap-x-3'>
						<div>
							<img
								src={orderDetails?.avatar}
								alt={orderDetails?.avatarAlt}
								className='w-12 h-12 rounded-full'
							/>
						</div>
						<div className='flex flex-col gap-y-1 text-[14px] font-poppins'>
							<p className=''>Customer</p>
							<p className='text-myGray'>Full name: {orderDetails?.name}</p>
							<p className='text-myGray'>Email: {orderDetails?.email}</p>
							<p className='text-myGray'>Phone: {orderDetails?.phone}</p>
							<button className='mt-1 text-xs text-myEmerald py-2 rounded-lg px-4 bg-[#313442] max-w-28 hover:text-white duration-300 transition'>
								View Profile
							</button>
						</div>
					</div>
					<div className='flex items-start gap-x-3'>
						<div className='w-12 h-12 flex items-center justify-center bg-[#313442] rounded-full'>
							<ShoppingBagIcon className='w-6 h-6' />
						</div>
						<div className='flex flex-col gap-y-1 text-[14px] font-poppins'>
							<p className=''>Order info</p>
							<p className='text-myGray'>
								Shipping: {orderDetails?.shippingType}
							</p>
							<p className='text-myGray'>
								Payment method: {orderDetails?.payment}
							</p>
							<p className='text-myGray'>Status: {orderDetails?.status}</p>
							<button className='mt-1 text-xs text-myEmerald py-2 rounded-lg px-4 bg-[#313442] max-w-36 hover:text-white duration-300 transition'>
								Download Info
							</button>
						</div>
					</div>
					<div className='flex items-start gap-x-3'>
						<div className='w-12 h-12 flex items-center justify-center bg-[#313442] rounded-full'>
							<InformationCircleIcon className='w-7 h-7' />
						</div>
						<div className='flex flex-col gap-y-1 text-[14px] font-poppins'>
							<p className=''>Deliver to</p>
							<p className='text-myGray'>Address: {orderDetails?.street}</p>
							<p className='text-myGray'>Zip Code: {orderDetails?.zipCode}</p>
							<p className='text-myGray'>City: {orderDetails?.city}</p>
							<button className=' mt-1 text-xs text-myEmerald py-2 rounded-lg px-4 bg-[#313442] max-w-36 hover:text-white duration-300 transition'>
								Download Info
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4 my-4 md:flex-row border-b border-b-myGray/60 pb-6'>
					<div className='w-full md:w-1/2 2xl:w-1/4 flex flex-col gap-2'>
						<p className='text-sm leading-4 pl-4'>Payment info</p>
						<div className='border border-[#313442] py-2 px-4 gap-2 flex flex-col text-[14px] text-myGray rounded-md h-24'>
							<div className='flex items-center gap-1'>
								<img
									src={
										orderDetails?.payment
											? getPaymentMethodImage(orderDetails.payment)
											: ''
									}
									alt={orderDetails?.payment}
									className='w-auto h-5'
								/>
								<span>{orderDetails?.payment}</span>
								<span>{orderDetails?.cardNumber}</span>
							</div>
							<p>Name: {orderDetails?.name}</p>
							<p>Phone: +{orderDetails?.phone}</p>
						</div>
					</div>
					<div className='w-full md:w-3/4 flex flex-col gap-2'>
						<p className='text-sm leading-4 pl-4'>Notes</p>
						<textarea
							className='w-full text-[14px] text-myGray border border-[#313442]  focus:outline-none bg-myPrimary h-24 rounded-md p-2 resize-none'
							placeholder='Type some note'
						></textarea>
					</div>
				</div>
				<div className='flex flex-col mt-6'>
					<p>Products</p>
					<motion.table
						className='w-full mt-8 font-poppins'
						variants={containerAnimation}
						initial='hidden'
						animate='visible'
					>
						<thead>
							<tr className='border-b border-b-myGray/60 text-myGray'>
								<th className='text-left px-2'>
									<label htmlFor='selectAll' className='sr-only'>
										Select All
									</label>
									<input
										id='selectAll'
										className='rounded border-2 w-4 h-4 mb-2'
										type='checkbox'
									/>
								</th>
								<th className='pb-2'>
									<div className='flex items-center gap-x-2 px-2'>
										<span className='text-xs font-medium'>Product Name</span>
									</div>
								</th>
								<th className='pb-2 hidden md:table-cell px-2'>
									<div className='flex items-center gap-x-2'>
										<span className='text-xs font-medium'>Price</span>
									</div>
								</th>
								<th className='pb-2 hidden lg:table-cell px-2 '>
									<div className='flex items-center gap-x-2'>
										<span className='text-xs font-medium'>Quantity</span>
									</div>
								</th>
								<th className='pb-2 hidden lg:table-cell px-2'>
									<div className='flex items-center gap-x-2'>
										<span className='text-xs font-medium'>Total</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{productsDetails.map((product, index) => (
								<motion.tr
									key={index}
									variants={itemAnimation}
									className='hover:bg-zinc-800 cursor-pointer border-b border-b-myGray/40 text-white text-[14px]'
									onClick={() => navigateToProductDetails(product.asin)}
								>
									<td className='text-left py-6 lg:py-8 px-2'>
										<label
											htmlFor={`checkbox-${product.asin}`}
											className='sr-only'
										>
											Select order {product.asin}
										</label>
										<input
											id={`checkbox-${product.asin}`}
											className='rounded border-2 w-4 h-4'
											type='checkbox'
										/>
									</td>
									<td className='text-left py-6 lg:py-8 px-2 flex gap-4 items-center '>
										<img
											src={product.thumbnailImage}
											alt='Prodcut image'
											className='w-12 h-12 rounded-md'
										/>
										{product.title.slice(0, 20)}
									</td>
									<td className='hidden md:table-cell'>
										${product.price.value.toFixed(2)}
									</td>
									<td className='hidden lg:table-cell '>{product.quantity}</td>
									<td className='hidden lg:table-cell'>
										${product.total.toFixed(2)}
									</td>
								</motion.tr>
							))}
						</tbody>
					</motion.table>
				</div>
				<div className='my-6 flex items-center gap-x-36 justify-start lg:gap-x-48 sm:justify-end'>
					<div className='flex flex-col gap-y-4 text-[14px] text-gray-500'>
						<p>Subtotal:</p>
						<p>Tax(20%):</p>

						<p>Total:</p>
						<p>Status:</p>
					</div>
					<div className='flex flex-col text-right gap-y-4 text-[14px] text-white'>
						<p>${subtotal.toFixed(2)}</p>
						<p>${tax.toFixed(2)}</p>

						<p className='text-xl font-semibold'>${total.toFixed(2)}</p>
						<button className='text-sm leading-4 border-0 py-2 px-5 text-white bg-[#313442] rounded-md'>
							{status}
						</button>
					</div>
				</div>
			</motion.div>
		</MainLayout>
	);
};

export default OrderDetails;
