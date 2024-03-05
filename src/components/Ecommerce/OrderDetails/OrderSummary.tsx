import React from 'react';

interface OrderSummaryProps{
    total: number;
    subtotal: number;
    tax: number;
    status: string;
}
const OrderSummary = ({total, subtotal, tax, status}: OrderSummaryProps) => {
	return (
		<div className='my-6 flex items-center gap-x-36 justify-start lg:gap-x-48 sm:justify-end'>
			<div className='flex flex-col gap-y-4 text-[14px] text-gray-400'>
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
	);
};

export default OrderSummary;
