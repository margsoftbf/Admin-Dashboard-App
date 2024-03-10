import { SparklesIcon } from '@heroicons/react/24/outline';
import { MdPeopleAlt } from 'react-icons/md';

const EmailCategoriesHeader = () => {
	return (
		<div className='flex items-center border-b border-b-myGrayDarker gap-8 mb-4'>
			<div className='flex items-center gap-5 pr-12 pl-1 pb-3 border-b-[3px] border-b-myViolet'>
				<input className='rounded border-1 w-4 h-4' type='checkbox' />
				<p className='text-normal font-medium text-myViolet'>Primary</p>
			</div>
			<div className='flex items-start gap-3 pb-2 cursor-pointer'>
				<div>
					<MdPeopleAlt className='w-6 h-6 text-myGray' />
				</div>
				<div>
					<div className='flex items-center gap-2'>
						<p className='text-myGray text-xs  font-semibold'>Social</p>
						<div className='text-white rounded-2xl whitespace-nowrap py-0.5 px-1 text-[10px] leading-3 bg-red-500'>
							2 new
						</div>
					</div>
					<p className='leading-4 text-myGray text-[10px] whitespace-nowrap'>
						Twitter, Facebook
					</p>
				</div>
			</div>
			<div className='flex items-start gap-3 pb-3 cursor-pointer'>
				<div>
					<SparklesIcon className='w-6 h-6 text-myGray' />
				</div>
				<div>
					<div className='flex items-center gap-2'>
						<p className='text-myGray text-xs  font-semibold'>Promotions</p>
						<div className='text-white rounded-2xl whitespace-nowrap py-0.5 px-1 text-[10px] leading-3 bg-yellow-500'>
							4 new
						</div>
					</div>
					<p className='leading-4 text-myGray text-[10px] whitespace-nowrap'>
						Amazon, Walmart, Costco
					</p>
				</div>
			</div>
		</div>
	);
};

export default EmailCategoriesHeader;
