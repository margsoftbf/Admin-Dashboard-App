import { OrderListTypes } from '@/types/types';
import React from 'react';

interface OrderDetailsProps {
    orderDetails: OrderListTypes | null;
    getPaymentMethodImage: (paymentMethod: string) => string;
}

const PaymentInfo = ({orderDetails, getPaymentMethodImage}: OrderDetailsProps) => {
	return (
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
	);
};

export default PaymentInfo;
