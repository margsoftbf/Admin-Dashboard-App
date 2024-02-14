import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ordersData, ordersList } from '@/data/data';
import { OrderListTypes } from '@/types/types';

const OrderDetails = () => {
	const router = useRouter();
	const { orderId } = router.query;
	const [orderDetails, setOrderDetails] = useState<OrderListTypes | null>(null);

	useEffect(() => {
		if (orderId) {
			const foundOrder = ordersList.find((order) => order.orderId === orderId);
			setOrderDetails(foundOrder || null);
		}
	}, [orderId]);

	return (
		<MainLayout>
			<div>
				<h1>Order Details: {orderId}</h1>
				{/* Renderuj szczegóły zamówienia tutaj */}
			</div>
		</MainLayout>
	);
};

export default OrderDetails;
