import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
	XMarkIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { navigation } from '@/data/data';
interface SidebarMobileProps {
	sidebarOpen: boolean;
	setSidebarOpen: (open: boolean) => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({
	sidebarOpen,
	setSidebarOpen,
}) => {
	const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

	const toggleSubMenu = (name: string) => {
		setExpandedMenu(expandedMenu === name ? null : name);
	};
	return (
		<Transition.Root show={sidebarOpen} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-50 lg:hidden'
				onClose={setSidebarOpen}
			>
				<Transition.Child
					as={Fragment}
					enter='transition-opacity ease-linear duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity ease-linear duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-900/80' />
				</Transition.Child>

				<div className='fixed inset-0 flex'>
					<Transition.Child
						as={Fragment}
						enter='transition ease-in-out duration-300 transform'
						enterFrom='-translate-x-full'
						enterTo='translate-x-0'
						leave='transition ease-in-out duration-300 transform'
						leaveFrom='translate-x-0'
						leaveTo='-translate-x-full'
					>
						<Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
							<Transition.Child
								as={Fragment}
								enter='ease-in-out duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='ease-in-out duration-300'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
									<button
										type='button'
										className='-m-2.5 p-2.5'
										onClick={() => setSidebarOpen(false)}
									>
										<span className='sr-only'>Close sidebar</span>
										<XMarkIcon
											className='h-6 w-6 text-white'
											aria-hidden='true'
										/>
									</button>
								</div>
							</Transition.Child>
							<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-myPrimary px-6 pb-4 ring-1 ring-white/10'>
								<div className='flex h-16 shrink-0 items-center gap-2'>
									<img
										className='h-8 w-auto'
										src='/assets/other/fox.png'
										alt='Admin Dashboard'
									/>
									<span className='text-white font-poppins mt-1'>
										Admin Dashboard
									</span>
								</div>
								<nav className='flex flex-1 flex-col'>
									<ul role='list' className='flex flex-1 flex-col gap-y-7'>
										<li>
											<ul role='list' className='-mx-2 space-y-1'>
												{navigation.map((item) => (
													<li key={item.name}>
														<a
															href={item.href}
															onClick={(e) => {
																if (item.subMenu) {
																	e.preventDefault();
																	toggleSubMenu(item.name);
																}
															}}
															className={`${
																item.current
																	? 'bg-myViolet text-white font-medium '
																	: 'text-gray-400 hover:text-white hover:bg-myViolet'
															}
              'group flex items-center justify-between gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
            `}
														>
															<div className='flex gap-x-3'>
																<item.icon
																	className='h-6 w-6 shrink-0'
																	aria-hidden='true'
																/>
																{item.name}
															</div>
															{item.subMenu &&
																(expandedMenu === item.name ? (
																	<ChevronUpIcon className='h-5 w-5' />
																) : (
																	<ChevronDownIcon className='h-5 w-5' />
																))}
														</a>
														{item.subMenu && expandedMenu === item.name && (
															<ul className='pl-9 my-2 '>
																{item.subMenu.map((subItem) => (
																	<li key={subItem.name}>
																		<a
																			href={subItem.href}
																			className={`block text-gray-400 hover:bg-zinc-900 rounded-md hover:text-white p-2 font-inter text-xs`}
																		>
																			•{' '}
																			<span className='ml-1'>
																				{subItem.name}
																			</span>
																		</a>
																	</li>
																))}
															</ul>
														)}
													</li>
												))}
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default SidebarMobile;
