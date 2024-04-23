import { personsPost } from '@/data/data';
import {
	HandThumbUpIcon,
	ChatBubbleLeftEllipsisIcon,
	ShareIcon,
	VideoCameraIcon,
	PhotoIcon,
	FaceSmileIcon,
} from '@heroicons/react/24/outline';

const Posts = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
			{personsPost.map((person) => (
				<div
					key={person.id}
					className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5  mb-6 text-white font-poppins overflow-x-auto'
				>
					<div className='flex flex-col'>
						<div className='flex items-center justify-between mb-5'>
							<div className='flex items-center gap-x-3'>
								<div className='flex flex-col cursor-pointer items-center gap-y-3 w-10'>
									<div className='relative'>
										<div className='overflow-hidden rounded-full w-10 h-10 border-white dark:border-dark-neutral-bg border-0'>
											<img
												className='w-full h-full object-cover'
												src={person.avatar}
												alt={person.avatarAlt}
											/>
										</div>
										<div
											className={`absolute rounded-full border  bottom-0 border-myPrimary right-0 w-3 h-3 ${
												person.status ? 'bg-myGreen' : 'bg-red-400'
											}`}
										></div>
									</div>
								</div>
								<div className='flex flex-col gap-y-2'>
									<span className='leading-4 font-medium tracking-1 '>
										{person.name}
									</span>
									<span className='text-xs text-gray-400'>
										{person.sendDate}
									</span>
								</div>
							</div>
						</div>
						<p className='text-myGray leading-5 mb-6 text-[14px]'>
							{person.content}
						</p>
						<div className='flex flex-col gap-3 xs:flex-row xs:items-center xs:gap-0 justify-between lg:flex-col lg:gap-3 lg:items-start xl:flex-row xl:items-center xl:gap-0 mb-4'>
							<div className='flex items-center'>
								{person.likes.map((like) => (
									<div className='w-8 h-8 overflow-hidden rounded-full -ml-2'>
										<img
											className='w-full h-full object-cover'
											src={like}
											alt='avatar'
										/>
									</div>
								))}
								<div className='flex items-center justify-center w-8 h-8 rounded-full bg-myGray -ml-2 z-6'>
									<span className='text-xs text-white'>+3</span>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<span className='leading-4 text-gray-500 text-[14px] cursor-pointer'>
									{person.comments} Comments
								</span>
								<span className='leading-4 text-gray-500 text-[14px] cursor-pointer'>
									{person.share} Share
								</span>
							</div>
						</div>
						<div className='w-full bg-myGrayDarker h-[1px] mb-4'></div>
						<div className='flex gap-2 items-center justify-between'>
							<div className='flex items-center cursor-pointer gap-x-1 text-myGray hover:text-white duration-200'>
								<HandThumbUpIcon className='w-4 h-4' />
								<span className='text-[14px]'>Like</span>
							</div>
							<div className='flex items-center cursor-pointer gap-x-1 text-myGray hover:text-white duration-200'>
								<ChatBubbleLeftEllipsisIcon className='w-4 h-4' />
								<span className='text-[14px]'>Comment</span>
							</div>
							<div className='flex items-center cursor-pointer gap-x-1 text-myGray hover:text-white duration-200'>
								<ShareIcon className='w-4 h-4' />
								<span className='text-[14px]'>Share</span>
							</div>
						</div>
						<div className='w-full bg-myGrayDarker h-[1px] mb-4 mt-4'></div>
						<div className='flex gap-4'>
							<div className='flex flex-col cursor-pointer items-center gap-y-3 w-8'>
								<div className='relative'>
									<div className='overflow-hidden rounded-full w-8 h-8 border-white'>
										<img
											className='w-full h-full object-cover'
											src='/assets/people/avatar-10.png'
											alt='avatar'
										/>
									</div>
									<div className='absolute rounded-full border bottom-0 right-0 w-2 h-2 bg-myGreen'></div>
								</div>
							</div>
							<div className='bg-myGrayDarker rounded-lg flex-1 pt-2 pb-3 px-2'>
								<input
									className='text-white bg-transparent text-xs w-full py-1 focus:outline-none border-0'
									type='text'
									placeholder='Write a comment...'
								/>
								<div className='flex items-center gap-x-3 justify-end'>
									<VideoCameraIcon className='w-5 h-5  cursor-pointer hover:text-white text-myGray' />
									<PhotoIcon className='w-5 h-5 cursor-pointer hover:text-white text-myGray' />
									<FaceSmileIcon className='w-5 h-5 cursor-pointer hover:text-white text-myGray' />
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
