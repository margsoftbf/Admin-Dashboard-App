import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ordersList } from '@/data/data';
import { OrderListTypes, ProductDetail } from '@/types/types';
import BreadCrumb from '@/components/common/Breadcrumb';
import { containerAnimation} from '@/data/data';
import { motion } from 'framer-motion';
import productData from '../../../data/products.json';
import OrderInfo from '@/components/Ecommerce/OrderDetails/OrderInfo';
import PaymentInfo from '@/components/Ecommerce/OrderDetails/PaymentInfo';
import ProductList from '@/components/Ecommerce/OrderDetails/ProductList';
import OrderSummary from '@/components/Ecommerce/OrderDetails/OrderSummary';


const OrderDetails = () => {
	const router = useRouter();
	const { orderId } = router.query;
	const [orderDetails, setOrderDetails] = useState<OrderListTypes | null>(null);
	const [productsDetails, setProductsDetails] = useState<ProductDetail[]>([]);
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
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
				<OrderInfo
					orderDetails={orderDetails}
					onStatusChange={handleStatusChange}
					orderId={orderId}
				/>
				<PaymentInfo
					orderDetails={orderDetails}
					getPaymentMethodImage={getPaymentMethodImage}
				/>
				<ProductList
					productsDetails={productsDetails}
					onNavigate={navigateToProductDetails}
				/>
				<OrderSummary subtotal={subtotal} total={total} tax={tax} status={status}/>
				
			</motion.div>
		</MainLayout>
	);
};

export default OrderDetails;
