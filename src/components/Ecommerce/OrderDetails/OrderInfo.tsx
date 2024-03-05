import { OrderListTypes } from '@/types/types';
import React, { ChangeEvent } from 'react';
import {
	CalendarDaysIcon,
	PrinterIcon,
	ShoppingBagIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';
interface OrderInfoProps {
	orderDetails: OrderListTypes | null;
	orderId: string | string[] | undefined;
	onStatusChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const OrderInfo = ({
	orderDetails,
	onStatusChange,
	orderId,
}: OrderInfoProps) => {
	return (
		<div>
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
							onChange={onStatusChange}
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
		</div>
	);
};

export default OrderInfo;
