import ToggleMenu from '@/components/ui/ToggleMenu';
import React, { useState } from 'react';
import { IconMore, IconToggle } from '../../../../public/assets/svg';
import { ordersData, containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
const RecentPurchases = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

	const toggleAction = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

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

	
	return (
		<motion.div
			className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6'
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
						className='flex items-center justify-between py-2 px-0 cursor-pointer'
						onClick={toggleMenu}
					>
						<IconToggle />
					</button>
					{isMenuVisible && <ToggleMenu />}
				</div>
			</div>
			<div className='w-full bg-myGray/50 h-[1px] mb-5'> </div>
			<table className='w-full table-auto'>
				<thead>
					<tr className='border-b border-myGray/30 pb-4 font-poppins text-[14px] text-myGray'>
						<th className='text-left'>
							<input
								className='rounded border-2 w-4 h-4 mb-2'
								type='checkbox'
							/>
						</th>
						<th className='font-normal text-left pb-2'>Products</th>
						<th className='font-normal text-left pb-2 hidden xs:table-cell'>
							Order ID
						</th>
						<th className='font-normal text-left pb-2 hidden lg:table-cell'>
							Date
						</th>
						<th className='font-normal text-left pb-2 hidden sm:table-cell'>
							Customer name
						</th>
						<th className='font-normal text-left pb-2 hidden xl:table-cell'>
							Status
						</th>
						<th className='font-normal text-left pb-2 hidden xl:table-cell'>
							Amount
						</th>
						<th className='font-normal text-right pb-2 pr-2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ordersData.map((order) => (
						<motion.tr
							key={order.id}
							className='border-b border-myGray/30 text-white font-poppins text-[14px]'
							variants={itemAnimation}
						>
							<td className='text-left'>
								<input className='rounded border-2 w-4 h-4' type='checkbox' />
							</td>
							<td className=''>
								<span className=''>{order.product}</span>
							</td>
							<td className='hidden xs:table-cell'>
								<span>{order.orderId}</span>
							</td>
							<td className='hidden lg:table-cell'>
								<span>{order.date}</span>
							</td>
							<td className='hidden sm:table-cell'>
								<div className='flex items-center gap-2'>
									<div className='w-6 h-6 rounded-full overflow-hidden'>
										<img src={order.avatar} alt={order.avatarAlt} />
									</div>
									<p className='text-normal text-gray-1100 '>{order.name}</p>
								</div>
							</td>
							<td className='hidden xl:table-cell'>
								<div className='flex items-center gap-x-2'>
									<div
										className={`w-2 h-2 rounded-full ${getStatusColorClass(
											order.status
										)}`}
									></div>
									<p className='text-normal'>{order.status}</p>
								</div>
							</td>
							<td className='hidden xl:table-cell'>
								<span>${order.amount.toFixed(2)}</span>
							</td>
							<td className='text-right'>
								<div className='relative w-full flex justify-end'>
									<div className='relative'>
										<button
											className='cursor-pointer dropdown-label flex items-center justify-end p-3'
											onClick={() => toggleAction(order.id)}
										>
											<IconMore />
										</button>
										{activeMenuId === order.id && (
											<div className='z-50 absolute mt-2 w-32 right-0 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs '>
												<ul>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															View details
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Pending
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Completed
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Cancel
														</a>
													</li>
												</ul>
											</div>
										)}
									</div>
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
