import React from 'react';
import {
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	BuildingStorefrontIcon,
	BanknotesIcon,
	PresentationChartBarIcon,
	BriefcaseIcon,
	ChatBubbleLeftRightIcon,
	CalendarDaysIcon,
	NewspaperIcon,
	CurrencyDollarIcon,
	DocumentCheckIcon,
	EnvelopeIcon,
	LifebuoyIcon,
	QuestionMarkCircleIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{
		name: 'Ecommerce',
		href: '#',
		icon: BuildingStorefrontIcon,
		current: false,
	},
	{ name: 'Finance', href: '#', icon: BanknotesIcon, current: false },
	{ name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
	{
		name: 'Analytics',
		href: '#',
		icon: PresentationChartBarIcon,
		current: false,
	},
	{
		name: 'Project Manage',
		href: '#',
		icon: NewspaperIcon,
		current: false,
	},
	{ name: 'Chat', href: '#', icon: ChatBubbleLeftRightIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarDaysIcon, current: false },
	{ name: 'Invoices', href: '#', icon: DocumentDuplicateIcon, current: false },
	{ name: 'Crypto', href: '#', icon: CurrencyDollarIcon, current: false },
	{ name: 'Kanban', href: '#', icon: DocumentCheckIcon, current: false },
	{ name: 'Social Network', href: '#', icon: ChartPieIcon, current: false },
	{ name: 'Mailbox', href: '#', icon: EnvelopeIcon, current: false },
	{ name: 'Help Center', href: '#', icon: LifebuoyIcon, current: false },
	{ name: 'FAQ', href: '#', icon: QuestionMarkCircleIcon, current: false },
	{ name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
];

const SidebarDesktop = () => {
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
							<ul role='list' className='-mx-2 space-y-1'>
								{navigation.map((item) => (
									<li key={item.name}>
										<a
											href={item.href}
											className={`${
												item.current
													? 'bg-myViolet text-white font-medium '
													: 'text-gray-400 hover:text-white hover:bg-myViolet'
											}
              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold font-inter'
            `}
										>
											<item.icon
												className='h-6 w-6 shrink-0'
												aria-hidden='true'
											/>
											{item.name}
										</a>
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
