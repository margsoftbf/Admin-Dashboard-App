import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	XMarkIcon,
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

interface SidebarMobileProps {
	sidebarOpen: boolean;
	setSidebarOpen: (open: boolean) => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({
	sidebarOpen,
	setSidebarOpen,
}) => {
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
							<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10'>
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
															className={`${
																item.current
																	? 'bg-myViolet text-white'
																	: 'text-gray-300 hover:text-white hover:bg-myViolet'
															} 
group flex gap-x-3 rounded-md p-2 text-sm font-semibold`}
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

										<li className='mt-auto'>
											<a
												href='#'
												className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
											>
												<Cog6ToothIcon
													className='h-6 w-6 shrink-0'
													aria-hidden='true'
												/>
												Settings
											</a>
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
