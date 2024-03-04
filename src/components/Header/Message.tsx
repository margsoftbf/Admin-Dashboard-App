import { useEffect, useRef } from 'react';
import { personsData } from '../../data/data';

interface MessageProps {
	onClose: () => void;
}

const Message = ({ onClose }: MessageProps) => {
	const messageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				messageRef.current &&
				!messageRef.current.contains(e.target as Node)
			) {
				setTimeout(() => {
					onClose();
				}, 100);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	return (
		<div
			className='absolute top-12 -right-16 md:right-0 w-[300px] md:w-[330px] bg-zinc-900 text-white font-inter rounded-md py-2 px-4'
			ref={messageRef}
		>
			{personsData.map((person) => (
				<div
					key={person.id}
					className='group pointer-events-auto text-xs flex w-full max-w-md rounded-lg bg-myPrimary  shadow-lg ring-1 p-1 ring-black ring-opacity-5 my-2 py-2 relative cursor-pointer hover:bg-myBlack duration-100'
				>
					<div className='w-0 flex-1 p-0'>
						<div className='flex h-full items-center mx-1'>
							<div className='flex-shrink-0 '>
								<img
									src={person.avatar}
									alt={person.avatarAlt}
									className='h-8 w-8 rounded-full ml-1'
								/>
							</div>
							<div className='mx-3 w-0 flex-1 font-inter'>
								<p className='text-xs font-semibold text-white'>
									{person.name}
								</p>
								<p className='mt-1 text-xs text-gray-500'>{person.message}</p>
							</div>
						</div>
					</div>
					<div className='flex border-l border-gray-500'>
						<button
							type='button'
							className='flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-2 text-sm font-medium text-myYellow group-hover:text-myEmerald duration-100'
						>
							Reply
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Message;
