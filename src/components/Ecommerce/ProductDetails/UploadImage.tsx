import React from 'react';
import {
	IconImage,
} from '../../../../public/assets/svg';
const UploadImage = () => {
	return (
		<div className='flex flex-col w-full 3xl:w-2/3'>
			<p className='text-white text-base leading-4 font-poppins  mb-3'>
				Upload image
			</p>
			<div className='flex flex-col justify-center items-center w-full shadow-sm border-dashed border-2 border-[#313442] rounded-md p-8'>
				<IconImage className='w-8 h-8 mb-6 cursor-pointer' />
				<p className='text-sm leading-6 text-gray-400 font-normal mb-1 text-center'>
					Drop your image here, or browse
				</p>
				<p className='leading-6 text-gray-400 text-[14px] text-center'>
					JPG,PNG and GIF files are allowed
				</p>
			</div>
		</div>
	);
};

export default UploadImage;
