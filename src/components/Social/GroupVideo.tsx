import React from 'react';
import Button from '../ui/Button';
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { personsData } from '@/data/data';

const GroupVideo = () => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-6 px-5  mb-6 text-white font-poppins overflow-x-auto'>
			<div className='flex items-center justify-between flex-col gap-4 xl:flex-row'>
				<Button className='bg-myGrayDarker text-xs flex gap-2'>
					<VideoCameraIcon className='w-5 h-5' />
					Create Group Video
				</Button>
				<div className='relative'>
					<div className='grid grid-cols-6 items-center gap-4 md:flex'>
						{personsData.map((person) => (
							<div
								key={person.id}
								className='mapowanie flex flex-col cursor-pointer items-center gap-y-3 max-w-12'
							>
								<div className='relative'>
									<div className='overflow-hidden rounded-full max-w-12 max-h-12'>
										<img
											className='w-full h-full object-cover'
											src={person.avatar}
											alt='avatar'
										/>
									</div>
									<div
										className={`absolute rounded-full border  bottom-0 border-myPrimary right-0 w-3 h-3 ${
											person.checked ? 'bg-myGreen' : 'bg-red-400'
										}`}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GroupVideo;
