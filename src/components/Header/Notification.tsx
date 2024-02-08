import { personsData } from '@/data/data';
import React, { useEffect, useRef, useState } from 'react';

interface Notification {
	id: number;
	message: string;
	read: boolean;
}

interface NotificationProps {
	onClose: () => void;
	checkedCount: number;
	setCheckedCount: React.Dispatch<React.SetStateAction<number>>;
	setUnread: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification: React.FC<NotificationProps> = ({
	checkedCount,
	setCheckedCount,
	setUnread,
	onClose,
}) => {
	const notificationRef = useRef<HTMLDivElement>(null);
	const [persons, setPersons] = useState(personsData);

	const handleMarkAllRead = () => {
		const updatePersons = persons.map((person) => ({
			...person,
			checked: true,
		}));
		setPersons(updatePersons);

		setUnread(true);
	};

	useEffect(() => {
		const countChecked = persons.reduce(
			(total, person) => total + (person.checked ? 0 : 1),
			0
		);

		setCheckedCount(countChecked);
	}, [persons]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				notificationRef.current &&
				!notificationRef.current.contains(e.target as Node)
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
			className='absolute top-12 right-0 w-[280px] md:w-[330px] bg-zinc-900 text-white font-inter rounded-md px-4 py-2'
			ref={notificationRef}
		>
			<div className='flex justify-between text-[14px] font-medium mt-2 mb-4'>
				<p className='flex items-center justify-center'>
					Notification
					<span className=' bg-myYellow text-myBlack rounded-md ml-2 px-2 py-0'>
						{checkedCount}
					</span>
				</p>

				<button onClick={handleMarkAllRead} className='hover:text-gray-400'>
					Mark all as read
				</button>
			</div>
			{persons.map((person) => (
				<div
					key={person.id}
					className={`text-xs flex w-full max-w-md rounded-lg my-2 relative cursor-pointer p-1 hover:bg-myBlack ${
						person.checked ? 'bg-zinc-800' : 'bg-myPrimary'
					}`}
				>
					{person.checked ? null : (
						<span className='absolute inline-block w-2 h-2 rounded-full bg-myYellow right-1 top-1'></span>
					)}

					<div
						className={`w-0 flex-1 p-1 mx-2 ${
							person.checked ? 'border-b-[1px] border-b-myGray/20' : ''
						}`}
					>
						<div className='flex items-start'>
							<div className='flex-shrink-0 pt-0.5'>
								<img
									src={person.avatar}
									alt={person.avatarAlt}
									className='h-8 w-8 rounded-full'
								/>
							</div>
							<div className='ml-3 w-0 flex-1 font-inter'>
								<p className='text-sm text-white font-medium'>{person.name}</p>
								<p className='mt-1 text-xs text-myGray '>{person.react}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Notification;
