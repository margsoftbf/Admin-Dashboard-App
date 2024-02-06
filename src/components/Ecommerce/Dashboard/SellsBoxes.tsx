import { sellsBoxesData } from '@/data/data';
import { useState } from 'react';
import {
	IconToggle,
	IconBag,
	IconExportGreen,
} from '../../../../public/assets/svg';
const SellsBoxes = () => {
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

	const toggleMenu = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

	return (
		<div className='grid grid-cols-1 gap-6 mb-7 lg:grid-cols-2 2xl:grid-cols-4'>
			{sellsBoxesData.map((box) => (
				<div
					key={box.id}
					className='rounded-2xl border border-[#313442] bg-myPrimary py-2 flex-1 px-5'
				>
					<div className='flex items-center justify-between mb-4'>
						<h2 className='text-myGray font-poppins text-[14px] font-medium'>
							{box.title}
						</h2>
						<div className='ml-auto translate-x-4 z-10'>
							<button
								onClick={() => toggleMenu(box.id)}
								className='flex items-center justify-between py-2 px-4 cursor-pointer'
							>
								<IconToggle />
							</button>
							{activeMenuId === box.id && (
								<div className='absolute mt-2 w-32 right-0 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs '>
									<ul>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Sales report
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Export report
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Profit manage
											</a>
										</li>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 py-2'>
												Revenue report
											</a>
										</li>
										<div className='w-[80%] h-[1px] mx-auto bg-gray-200 my-1'></div>
										<li className='hover:text-myGray'>
											<a href='#' className='block px-4 pb-2 text-red-600'>
												Remove widget
											</a>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
					<div className='flex items-center justify-between mb-1'>
						<div className='flex items-center gap-3'>
							<div
								className={`${box.bgColor}  w-8 h-8 rounded-lg grid items-center justify-center`}
							>
								<IconBag />
							</div>
							<p className='font-bold text-white font-poppins text-lg'>
								${box.price.toFixed(2)}
							</p>
						</div>
						<div className='flex flex-col gap-1 items-end'>
							<div className='flex items-center gap-2'>
								<IconExportGreen />
								<span className='font-medium text-myGreen items-center justify-center text-base'>
									{box.percent}%
								</span>
							</div>
							<p className='text-right text-[10px] text-myGray font-poppins leading-5'>
								Compared to Jan 2023
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SellsBoxes;
