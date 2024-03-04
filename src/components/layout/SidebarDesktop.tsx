import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { navigation } from '@/data/data';
import { useRouter } from 'next/router';
interface SidebarDesktopProps {
	expandedMenu: string | null;
	toggleSubMenu: (name: string) => void;
}

const SidebarDesktop = ({
	expandedMenu,
	toggleSubMenu,
}: SidebarDesktopProps) => {
	const router = useRouter();

	return (
		<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
			<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-myPrimary px-6 pb-4'>
				<div className='flex h-16 shrink-0 items-center gap-2'>
					<img
						className='h-8 w-auto'
						src='/assets/other/fox.png'
						alt='Admin Dashboard'
					/>
					<span className='text-white font-poppins mt-1'>Admin Dashboard</span>
				</div>
				<nav className='flex flex-1 flex-col'>
					<ul role='list' className='flex flex-1 flex-col gap-y-7'>
						<li>
							<ul role='list' className='-mx-2 space-y-1 font-inter'>
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
												router.pathname === item.href ||
												router.pathname.startsWith(item.href + '/')
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
															• <span className='ml-1'>{subItem.name}</span>
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
		</div>
	);
};

export default SidebarDesktop;
