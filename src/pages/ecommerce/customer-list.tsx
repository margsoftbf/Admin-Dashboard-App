import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ordersList, containerAnimation, itemAnimation } from '@/data/data';
import { useRouter } from 'next/router';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { IconMore } from '../../../public/assets/svg';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
const CustomerList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{ name: 'Customer List', href: '/ecommerce/customer-list', current: true },
	];

	const router = useRouter();
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

	const toggleAction = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};
	const handleRowClick = (orderId: string) => {
		router.push(`/ecommerce/customer-review/${orderId}`);
	};

	const getOnlineStatusColor = (status: boolean) => {
		switch (status) {
			case true:
				return 'bg-myGreen';
			default:
				return 'bg-gray-400';
		}
	};
	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Customer List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins overflow-x-auto'>
				<motion.table
					className='w-full table-auto mt-2 font-poppins'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
							<th className='text-left pl-2'>
								<label htmlFor='selectAllCheckbox' className='sr-only'>
									Select all customers
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4 mb-2'
									type='checkbox'
								/>
							</th>
							<th className='text-left px-4'>Name</th>
							<th className='text-left px-4'>Email</th>
							<th className='text-left px-4'>Phone</th>
							<th className='text-left px-4'>Billing Address</th>
							<th className='text-left px-4'>Status</th>
							<th className='text-left px-4'>Joined</th>
							<th className='text-right px-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ordersList.map((order) => (
							<motion.tr
								key={order.id}
								variants={itemAnimation}
								onClick={() => handleRowClick(order.orderId)}
								className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer'
							>
								<td className='text-left pl-2 py-6 whitespace-nowrap'>
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
								<td className='px-4 whitespace-nowrap'>{order.email}</td>
								<td className='px-4 whitespace-nowrap'>
									<div className='flex items-center gap-1'>{order.phone}</div>
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
									<div className='flex items-center gap-x-2'>
										<div
											className={`w-2 h-2 rounded-full ${getOnlineStatusColor(
												order.online
											)}`}
										></div>
										<p className='text-normal'>
											{order.online === true ? 'Online' : 'Offline'}
										</p>
									</div>
								</td>

								<td className='px-4 whitespace-nowrap'>
									<div className='flex items-center gap-1'>
										<CalendarDaysIcon className='w-5 h-5' />
										{order.joined}
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
			;
		</MainLayout>
	);
};

export default CustomerList;
