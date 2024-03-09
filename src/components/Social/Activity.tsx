import { lastActivity } from '@/data/data';

const Activity = () => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5  mb-6 text-white font-poppins overflow-x-auto'>
			<p className='mb-2'>Last activity</p>
			<div className='w-full bg-myGrayDarker h-[1px] mb-4'></div>
			<div className='flex flex-col gap-2'>
				{lastActivity.map((person) => (
					<div key={person.id} className='py-1 flex items-center gap-6'>
						<div className='w-9 h-9 rounded-full flex items-center justify-center'>
							<span
								className='w-full h-full rounded-full opacity-10'
								style={{ backgroundColor: `${person.color}`, opacity: '10%' }}
							></span>
							<person.icon
								className='absolute w-5 h-5'
								style={{ color: `${person.color}` }}
							/>
						</div>
						<div className='flex items-center justify-between flex-1'>
							<div className='flex items-center gap-3'>
								<img
									className='rounded-full max-w-10'
									src={person.avatar}
									alt={person.avatarAlt}
								/>
								<p className='mb-0 text-[14px]'>
									<span className='inline-block font-medium text-myViolet'>
										{person.name}
									</span>{' '}
									{person.react}
									<span className='block mt-1 text-myGray'>{person.when}</span>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Activity;
