import { OrdersType, Person, SellsBoxesTypes } from '@/types/types';
import {
	ChartPieIcon,
	DocumentDuplicateIcon,
	HomeIcon,
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

export const navigation = [
	{
		name: 'Dashboard',
		href: '/',
		icon: HomeIcon,
		current: true,
	},
	{
		name: 'Ecommerce',
		href: '/ecommerce',
		icon: BuildingStorefrontIcon,
		current: false,
		subMenu: [
			{ name: 'Dashboard', href: '/ecommerce', current: false },
			{ name: 'Product List', href: '/ecommerce/product-list', current: false },
			{
				name: 'Product Details',
				href: '/ecommerce/product-details',
				current: false,
			},
			{ name: 'Order List', href: '/ecommerce/order-list', current: false },
			{
				name: 'Order Details',
				href: '/ecommerce/order-details',
				current: false,
			},
			{ name: 'Transactions', href: '/ecommerce/transactions', current: false },
			{
				name: 'Customer List',
				href: '/ecommerce/customer-list',
				current: false,
			},
			{
				name: 'Customer Review',
				href: '/ecommerce/customer-review',
				current: false,
			},
		],
	},
	{
		name: 'Finance',
		href: '#',
		icon: BanknotesIcon,
		current: false,
		subMenu: [
			{ name: 'Dashboard', href: '#', current: false },
			{ name: 'Cards', href: '#', current: false },
			{ name: 'Transactions', href: '#', current: false },
			{ name: 'Transactions Details', href: '#', current: false },
		],
	},
	{
		name: 'Jobs',
		href: '#',
		icon: BriefcaseIcon,
		current: false,
		subMenu: [
			{ name: 'Dashboard', href: '#', current: false },
			{ name: 'Job Listing', href: '#', current: false },
			{ name: 'Add New Job', href: '#', current: false },
		],
	},
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

export const personsData: Person[] = [
	{
		id: 1,
		avatar: '/assets/people/avatar-mark-webber.webp',
		avatarAlt: 'Mark Webber Photo',
		name: 'Mark Webber',
		workProfile: 'Sale manager Asia',
		email: 'leslie.alexander@example.com',
		role: 'Co-Founder / CEO',
		react: 'reacted to your recent post',
		message: 'Sure, can be over there',
		checked: false,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
	},
	{
		id: 2,
		avatar: '/assets/people/avatar-angela-gray.webp',
		avatarAlt: 'Angela Gray Photo',
		name: 'Angela Gray',
		workProfile: 'Sale manager USA',
		email: 'michael.foster@example.com',
		role: 'Co-Founder / CTO',
		react: 'followed you',
		message: 'Ok i will call you',
		checked: false,
		lastSeen: null,
		lastSeenDateTime: null,
		content:
			'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
	},
	{
		id: 3,
		avatar: '/assets/people/avatar-jacob-thompson.webp',
		avatarAlt: 'Jacob Thompson Photo',
		name: 'Jacob Thompson',
		workProfile: 'Sale manager Europe',
		email: 'dries.vincent@example.com',
		role: 'Business Relations',
		react: 'has joined your group',
		message: 'Congratulate him',
		checked: false,
		lastSeen: '5h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
	},
	{
		id: 4,
		avatar: '/assets/people/avatar-kimberly-smith.webp',
		avatarAlt: 'Kimberly Smith Photo',
		name: 'Kimberly Smith',
		workProfile: 'Sale manager Australia',
		email: 'lindsay.walton@example.com',
		role: 'Front-end Developer',
		react: 'commented on your picture',
		message: 'Check your earnings',
		checked: true,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
	},
	{
		id: 5,
		avatar: '/assets/people/avatar-rizky-hasanuddin.webp',
		avatarAlt: 'Rizky Hasanuddin Photo',
		name: 'Rizky Hasanuddin',
		workProfile: 'Sale manager Asia',
		email: 'courtney.henry@example.com',
		role: 'Designer',
		react: 'commented on your picture',
		message: 'Assign her new task',
		checked: true,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
	},
	{
		id: 6,
		avatar: '/assets/people/avatar-nathan-peterson.webp',
		avatarAlt: 'Nathan Peterson Photo',
		name: 'Nathan Peterson',
		workProfile: 'Sale manager USA',
		email: 'tom.cook@example.com',
		role: 'Director of Product',
		react: 'commented on your picture',
		message: 'Sure, can be over there',
		checked: true,
		lastSeen: null,
		lastSeenDateTime: null,
		content:
			'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
	},
];

export const ordersData: OrdersType[] = [
	{
		id: 1,
		avatar: '/assets/people/avatar-mark-webber.webp',
		avatarAlt: 'Mark Webber Photo',
		name: 'Mark Webber',
		orderId: '#23709',
		product: 'MacBook Pro',
		status: 'Delivered',
		date: 'Aug 5th, 2023',
		amount: 400,
	},
	{
		id: 2,
		avatar: '/assets/people/avatar-angela-gray.webp',
		avatarAlt: 'Angela Gray Photo',
		name: 'Angela Gray',
		orderId: '#23621',
		product: 'Iphone 11 Pro',
		status: 'Pending',
		date: 'Apr 25th, 2023',
		amount: 200,
	},
	{
		id: 3,
		avatar: '/assets/people/avatar-jacob-thompson.webp',
		avatarAlt: 'Jacob Thompson Photo',
		name: 'Jacob Thompson',
		orderId: '#24208',
		product: 'Iphone 15 Pro',
		status: 'Delivered',
		date: 'Jun 14th, 2023',
		amount: 500,
	},
	{
		id: 4,
		avatar: '/assets/people/avatar-kimberly-smith.webp',
		avatarAlt: 'Kimberly Smith Photo',
		name: 'Kimberly Smith',
		orderId: '#27719',
		product: 'Lenovo Laptop',
		status: 'Canceled',
		date: 'Jan 5th, 2024',
		amount: 250,
	},
	{
		id: 5,
		avatar: '/assets/people/avatar-rizky-hasanuddin.webp',
		avatarAlt: 'Rizky Hasanuddin Photo',
		name: 'Rizky Hasanuddin',
		orderId: '#23189',
		product: 'Samsung Galaxy S21',
		status: 'Pending',
		date: 'Nov 5th, 2023',
		amount: 499,
	},
	{
		id: 6,
		avatar: '/assets/people/avatar-nathan-peterson.webp',
		avatarAlt: 'Nathan Peterson Photo',
		name: 'Nathan Peterson',
		orderId: '#23799',
		product: 'MacBook Pro',
		status: 'Canceled',
		date: 'Dec 12th, 2023',
		amount: 400,
	},
];

export const sellsBoxesData: SellsBoxesTypes[] = [
	{
		id: 1,
		title: 'Total sells',
		price: 1540,
		percent: 34.7,
		bgColor: 'bg-green-700',
	},
	{
		id: 2,
		title: 'Orders value',
		price: 1380,
		percent: 22.7,
		bgColor: 'bg-violet-700',
	},
	{
		id: 3,
		title: 'Daily orders',
		price: 250,
		percent: 17.9,
		bgColor: 'bg-yellow-500',
	},
	{
		id: 4,
		title: 'Daily revenue',
		price: 120,
		percent: 23.9,
		bgColor: 'bg-blue-700',
	},
];

export const dailyData = [
	{
		name: '0:00',
		Completed: 106,
		Pending: 31,
		Unpaid: 5,
		Delivered: 63,
	},
	{
		name: '4:00',
		Completed: 89,
		Pending: 25,
		Unpaid: 12,
		Delivered: 55,
	},
	{
		name: '8:00',
		Completed: 120,
		Pending: 45,
		Unpaid: 10,
		Delivered: 90,
	},
	{
		name: '12:00',
		Completed: 150,
		Pending: 55,
		Unpaid: 15,
		Delivered: 105,
	},
	{
		name: '16:00',
		Completed: 170,
		Pending: 60,
		Unpaid: 18,
		Delivered: 120,
	},
	{
		name: '20:00',
		Completed: 190,
		Pending: 65,
		Unpaid: 20,
		Delivered: 140,
	},
];

export const weeklyData = [
	{
		name: 'Monday',
		Completed: 300,
		Pending: 100,
		Unpaid: 20,
		Delivered: 220,
	},
	{
		name: 'Tuesday',
		Completed: 320,
		Pending: 110,
		Unpaid: 25,
		Delivered: 250,
	},
	{
		name: 'Wednesday',
		Completed: 310,
		Pending: 120,
		Unpaid: 22,
		Delivered: 240,
	},
	{
		name: 'Thursday',
		Completed: 330,
		Pending: 130,
		Unpaid: 30,
		Delivered: 260,
	},
	{
		name: 'Friday',
		Completed: 340,
		Pending: 140,
		Unpaid: 18,
		Delivered: 240,
	},
	{
		name: 'Saturday',
		Completed: 280,
		Pending: 90,
		Unpaid: 15,
		Delivered: 220,
	},
	{
		name: 'Sunday',
		Completed: 350,
		Pending: 150,
		Unpaid: 32,
		Delivered: 300,
	},
];

export const monthlyData = [
	{
		name: 'January',
		Completed: 1906,
		Pending: 431,
		Unpaid: 65,
		Delivered: 1583,
	},
	{
		name: 'February',
		Completed: 2103,
		Pending: 505,
		Unpaid: 141,
		Delivered: 1120,
	},
	{
		name: 'March',
		Completed: 2055,
		Pending: 726,
		Unpaid: 295,
		Delivered: 815,
	},
	{
		name: 'April',
		Completed: 1519,
		Pending: 646,
		Unpaid: 243,
		Delivered: 929,
	},
	{
		name: 'May',
		Completed: 2488,
		Pending: 607,
		Unpaid: 215,
		Delivered: 1144,
	},
	{
		name: 'June',
		Completed: 2168,
		Pending: 505,
		Unpaid: 200,
		Delivered: 1361,
	},
	{
		name: 'July',
		Completed: 1744,
		Pending: 808,
		Unpaid: 280,
		Delivered: 1105,
	},
	{
		name: 'August',
		Completed: 2485,
		Pending: 799,
		Unpaid: 297,
		Delivered: 2020,
	},
	{
		name: 'September',
		Completed: 1582,
		Pending: 692,
		Unpaid: 231,
		Delivered: 1103,
	},
	{
		name: 'October',
		Completed: 2254,
		Pending: 919,
		Unpaid: 147,
		Delivered: 1810,
	},
	{
		name: 'November',
		Completed: 2252,
		Pending: 777,
		Unpaid: 84,
		Delivered: 2041,
	},
	{
		name: 'December',
		Completed: 2427,
		Pending: 674,
		Unpaid: 192,
		Delivered: 958,
	},
];
