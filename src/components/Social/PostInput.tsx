import React from 'react';
import Button from '../ui/Button';
import {
	VideoCameraIcon,
	PhotoIcon,
	FaceSmileIcon,
} from '@heroicons/react/24/outline';

const PostInput = () => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5  mb-6 text-white font-poppins overflow-x-auto'>
			<div className='flex items-center gap-4 mb-5'>
				<div className='overflow-hidden rounded-full shrink-0 w-10 h-10'>
					<img src='/assets/other/avatar.png' alt='avatar' />
				</div>
				<input
					className='flex-1 text-gray-400 text-xs border-none bg-myGrayDarker rounded-lg py-3 px-4 focus:outline-none'
					type='text'
					placeholder='What are you thinking ?'
				/>
			</div>
			<div className='flex flex-col justify-between gap-3 lg:flex-row'>
				<div className='flex flex-col gap-2 lg:flex-row lg:gap-6'>
					<div className='flex items-center gap-x-[9px]'>
						<VideoCameraIcon className='w-5 h-5 text-myGray' />
						<span className='text-myGray text-xs '>Live Video</span>
					</div>
					<div className='flex items-center gap-x-[9px]'>
						<PhotoIcon className='w-5 h-5 text-myGray' />
						<span className='text-myGray text-xs '>Photo/Video</span>
					</div>
					<div className='flex items-center gap-x-[9px]'>
						<FaceSmileIcon className='w-5 h-5 text-myGray' />
						<span className='text-myGray text-xs '>Feeling</span>
					</div>
				</div>
				<Button className='bg-myViolet hover:bg-myViolet/60'>Post</Button>
			</div>
		</div>
	);
};

export default PostInput;
