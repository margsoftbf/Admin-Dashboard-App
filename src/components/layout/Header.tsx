import React, { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import {
	ChatBubbleBottomCenterTextIcon,
	Bars3Icon,
	BellIcon,
	ArrowLeftStartOnRectangleIcon,
	UserCircleIcon,
	EnvelopeIcon,
	DocumentCheckIcon,
	LifebuoyIcon,
	BanknotesIcon,
	Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Notification from '../Header/Notification';
import Message from '../Header/Message';

const userNavigation = [
	{ name: 'Profile', href: '/', icon: <UserCircleIcon /> },
	{ name: 'Message', href: '/', icon: <EnvelopeIcon /> },
	{ name: 'Taskboard', href: '/', icon: <DocumentCheckIcon /> },
	{ name: 'Help', href: '/', icon: <LifebuoyIcon /> },
	{ name: 'Balance', href: '/', icon: <BanknotesIcon /> },
	{ name: 'Settings', href: '/', icon: <Cog8ToothIcon /> },
	{ name: 'Sign out', href: '/', icon: <ArrowLeftStartOnRectangleIcon /> },
];

interface HeaderProps {
	setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [isMessageClicked, setIsMessageClicked] = useState(false);
	const [checkedCount, setCheckedCount] = useState(0);
	const [unread, setUnread] = useState(false);

	const toggleNotifications = () => {
		if (isNotificationOpen) {
			setIsNotificationOpen(false);
		} else {
			setIsNotificationOpen(true);
		}
	};
	const toggleMessage = () => {
		if (isMessageClicked) {
			setIsMessageClicked(false);
		} else {
			setIsMessageClicked(true);
		}
	};

	return (
		<div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-l border-l-gray-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 bg-myPrimary'>
			<button
				type='button'
				className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
				onClick={() => setSidebarOpen(true)}
			>
				<span className='sr-only'>Open sidebar</span>
				<Bars3Icon className='h-6 w-6' aria-hidden='true' />
			</button>

			<div className='h-6 w-px lg:hidden' aria-hidden='true' />

			<div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
				<form
					className='relative flex flex-1 items-center h-full'
					action='#'
					method='GET'
				>
					<label htmlFor='search-field' className='sr-only'>
						Search
					</label>
					<MagnifyingGlassIcon
						className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-4'
						aria-hidden='true'
					/>
					<input
						id='search-field'
						className='block h-12 w-full lg:w-96 rounded-xl bg-myBlack border-0 py-0 pl-12 pr-3  placeholder:text-[#2C2C35] font-poppins font-medium text-white focus:ring-0 sm:text-sm'
						placeholder='Search...'
						type='search'
						name='search'
					/>
				</form>
				<div className='flex items-center gap-x-6'>
					<div className='flex items-center relative'>
						{/* <span className='absolute inline-block w-2 h-2 rounded-full bg-myYellow -right-[2px] -top-[1px]'></span> */}
						<button
							type='button'
							onClick={(e) => {
								e.stopPropagation();
								toggleMessage();
							}}
							className='text-gray-400 hover:text-gray-500'
						>
							<span className='sr-only'>View chats</span>
							<ChatBubbleBottomCenterTextIcon
								className='h-6 w-6'
								aria-hidden='true'
							/>
						</button>
						{isMessageClicked && (
							<Message onClose={() => setIsMessageClicked(false)} />
						)}
					</div>
					<div className='flex items-center relative'>
						{unread ? null : (
							<span className='absolute inline-block w-2 h-2 rounded-full bg-myYellow -right-[1px] top-0'></span>
						)}
						<button
							type='button'
							onClick={(e) => {
								e.stopPropagation();
								toggleNotifications();
							}}
							className=' text-gray-400 hover:text-gray-500'
						>
							<span className='sr-only'>View notifications</span>
							<BellIcon className='h-6 w-6' aria-hidden='true' />
						</button>
						{isNotificationOpen && (
							<Notification
								onClose={() => setIsNotificationOpen(false)}
								checkedCount={checkedCount}
								setCheckedCount={setCheckedCount}
								setUnread={setUnread}
							/>
						)}
					</div>

					<Menu as='div' className='relative'>
						<Menu.Button className='-m-1.5 flex items-center p-1.5'>
							<span className='sr-only'>Open user menu</span>
							<img
								className='h-10 w-10 rounded-full bg-gray-50'
								src='/assets/other/avatar.png'
								alt=''
							/>
						</Menu.Button>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute right-0 top-12 z-50 mt-2.5 w-48 px-4 origin-top-right border border-zinc-700 rounded-md bg-zinc-900  py-4 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
								{userNavigation.map((item) => (
									<Menu.Item key={item.name}>
										{({ active }) => (
											<Link
												href={item.href}
												className={`${active ? 'bg-gray-50' : ''},
                            group px-3 text-sm leading-6 text-myGray font-poppins flex gap-2 items-center hover:bg-myBlack hover:rounded-lg hover:text-white duration-300 transition py-2
                            `}
											>
												<span className='text-myGray w-6 h-6 mx-1 group-hover:text-white duration-300 transition'>
													{item.icon}
												</span>
												{item.name}
											</Link>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Header;
