import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import { ordersList, containerAnimation} from '@/data/data';
import productData from '../../data/products.json';
import { ProductTypes, OrderListTypes } from '@/types/types';
import OrderRow from '@/components/Ecommerce/OrderList/OrderRow';
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
					{ordersList.map((order) => (
						<OrderRow
							key={order.id}
							order={order}
							onRowClick={handleRowClick}
							getPaymentMethodImage={getPaymentMethodImage}
							calculateTotalAmount={calculateTotalAmount}
							getStatusColorClass={getStatusColorClass}
							productData={productData}
						/>
					))}
				</motion.table>
			</div>
		</MainLayout>
	);
};

export default OrderList;
