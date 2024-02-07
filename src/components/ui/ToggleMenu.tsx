import React from 'react';

const ToggleMenu = () => {
	return (
		<div className='z-50 absolute mt-2 w-32 right-0 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs '>
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
	);
};

export default ToggleMenu;
