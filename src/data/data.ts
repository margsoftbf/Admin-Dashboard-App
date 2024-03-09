import {
	InvoiceDataProps,
	KanbanColumn,
	KanbanTask,
	OrdersType,
	PaymentCard,
	Person,
	SellsBoxesTypes,
	VisistBySourceDataTypes,
} from '@/types/types';
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
import {
	Briefcase,
	IconBarChart,
	IconEconomy,
	IconMoney,
	IconUpdate,
} from '.././../public/assets/svg';

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
				href: '/ecommerce/product-details/B0CN13WZC6',
				current: false,
			},
			{ name: 'Order List', href: '/ecommerce/order-list', current: false },
			{
				name: 'Order Details',
				href: '/ecommerce/order-details/23709',
				current: false,
			},
			{
				name: 'Customer List',
				href: '/ecommerce/customer-list',
				current: false,
			},
			{
				name: 'Customer Review',
				href: '/ecommerce/customer-review/23709',
				current: false,
			},
		],
	},
	{
		name: 'Finance',
		href: '/finance',
		icon: BanknotesIcon,
		current: false,
		subMenu: [
			{ name: 'Dashboard', href: '/finance', current: false },
			{ name: 'Cards', href: '/finance/cards', current: false },
			{ name: 'Transactions', href: '/finance/transactions', current: false },
		],
	},

	{
		name: 'Jobs',
		href: '/jobs',
		icon: BriefcaseIcon,
		current: false,
	},
	{
		name: 'Analytics',
		href: '/analytics',
		icon: PresentationChartBarIcon,
		current: false,
	},
	{
		name: 'Project Manage',
		href: '/projects',
		icon: NewspaperIcon,
		current: false,
	},
	// { name: 'Chat', href: '#', icon: ChatBubbleLeftRightIcon, current: false },
	{
		name: 'Calendar',
		href: '/calendar',
		icon: CalendarDaysIcon,
		current: false,
	},
	{
		name: 'Invoices',
		href: '/invoices',
		icon: DocumentDuplicateIcon,
		current: false,
	},
	{ name: 'Crypto', href: '/crypto', icon: CurrencyDollarIcon, current: false },
	{ name: 'Kanban', href: '/kanban', icon: DocumentCheckIcon, current: false },
	{
		name: 'Social Network',
		href: '/social',
		icon: ChartPieIcon,
		current: false,
	},
	{ name: 'Mailbox', href: '#', icon: EnvelopeIcon, current: false },
	// { name: 'Help Center', href: '#', icon: LifebuoyIcon, current: false },
	{ name: 'FAQ', href: '#', icon: QuestionMarkCircleIcon, current: false },
	// { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
];

export const personsData: Person[] = [
	{
		id: 1,
		avatar: '/assets/people/avatar-4.png',
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
		avatar: '/assets/people/avatar-1.png',
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
		avatar: '/assets/people/avatar-2.png',
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
		avatar: '/assets/people/avatar-3.png',
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
		avatar: '/assets/people/avatar-6.png',
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
		avatar: '/assets/people/avatar-5.png',
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
		avatar: '/assets/people/avatar-4.png',
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
		avatar: '/assets/people/avatar-1.png',
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
		avatar: '/assets/people/avatar-2.png',
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
		avatar: '/assets/people/avatar-3.png',
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
		avatar: '/assets/people/avatar-6.png',
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
		avatar: '/assets/people/avatar-5.png',
		avatarAlt: 'Nathan Peterson Photo',
		name: 'Nathan Peterson',
		orderId: '#23799',
		product: 'MacBook Pro',
		status: 'Canceled',
		date: 'Dec 12th, 2023',
		amount: 400,
	},
];

export const containerAnimation = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

export const itemAnimation = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
import { HiShoppingCart } from 'react-icons/hi';
import { AiOutlineDollar } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { ApexOptions } from 'apexcharts';
export const sellsBoxesData: SellsBoxesTypes[] = [
	{
		id: 1,
		title: 'Total products',
		price: 150,
		percent: 25.17,
		bgColor: '#5415F1',
		icon: Briefcase,
	},
	{
		id: 2,
		title: 'Total orders',
		price: 1380,
		percent: 22.7,
		bgColor: '#50D1B2',
		icon: HiShoppingCart,
	},
	{
		id: 3,
		title: 'Total sales',
		price: 1220,
		percent: -17.9,
		bgColor: '#ECE663',
		icon: AiOutlineDollar,
	},
	{
		id: 4,
		title: 'New customers',
		price: 4210,
		percent: 23.9,
		bgColor: '#2775FF',
		icon: IoPersonSharp,
	},
];

export const monhtlyDataSalePerformance = [
	{
		name: 'Completed',
		data: [
			1906, 2103, 2055, 2488, 2168, 1744, 2485, 1582, 2254, 2252, 2427, 2168,
		],
	},
	{
		name: 'Pending',
		data: [431, 505, 726, 646, 607, 505, 808, 799, 692, 919, 777, 674],
	},
	{
		name: 'Delivered',
		data: [1583, 1120, 815, 929, 1144, 1361, 1105, 2020, 1103, 1810, 2041, 958],
	},
];
export const dailyDataSalePerformance = [
	{
		name: 'Completed',
		data: [
			1692, 1926, 2267, 2693, 2346, 2055, 2590, 1304, 1954, 2443, 2280, 2515,
		],
	},
	{
		name: 'Pending',
		data: [412, 489, 586, 527, 708, 481, 924, 740, 776, 788, 781, 767],
	},
	{
		name: 'Delivered',
		data: [1537, 1081, 778, 949, 1341, 1474, 1039, 2390, 954, 1825, 1856, 768],
	},
];
export const weeklyDataSalePerformance = [
	{
		name: 'Completed',
		data: [
			1671, 2425, 2107, 2426, 2430, 1919, 2732, 1877, 2596, 2347, 2778, 2280,
		],
	},
	{
		name: 'Pending',
		data: [404, 524, 820, 578, 574, 436, 695, 943, 567, 1046, 887, 565],
	},
	{
		name: 'Delivered',
		data: [1791, 1039, 857, 907, 1352, 1175, 1208, 2021, 887, 1661, 1960, 1147],
	},
];

export const dataBars = [
	{
		name: 'Mon',
		score: 2400,
	},
	{
		name: 'Tue',
		score: 1398,
	},
	{
		name: 'Wed',
		score: 7800,
	},
	{
		name: 'Thu',
		score: 3908,
	},
	{
		name: 'Fri',
		score: 4800,
	},
	{
		name: 'Sat',
		score: 3800,
	},
	{
		name: 'Sun',
		score: 4300,
	},
];

export const circleData = [
	{
		id: 'Direct',
		label: 'Direct',
		value: 222,
		color: 'hsl(211, 70%, 50%)',
	},
	{
		id: 'Social',
		label: 'Social',
		value: 276,
		color: 'hsl(11, 70%, 50%)',
	},
	{
		id: 'Email',
		label: 'Email',
		value: 323,
		color: 'hsl(111, 70%, 50%)',
	},
	{
		id: 'Other',
		label: 'Other',
		value: 325,
		color: 'hsl(307, 70%, 50%)',
	},
];

export const weeklyDataBottomCharts = [
	{
		name: 'Monday',
		Completed: 300,
		Pending: 200,
		Unpaid: 70,
	},
	{
		name: 'Tuesday',
		Completed: 320,
		Pending: 180,
		Unpaid: 75,
	},
	{
		name: 'Wednesday',
		Completed: 310,
		Pending: 220,
		Unpaid: 62,
	},
	{
		name: 'Thursday',
		Completed: 330,
		Pending: 190,
		Unpaid: 60,
	},
	{
		name: 'Friday',
		Completed: 340,
		Pending: 240,
		Unpaid: 18,
	},
	{
		name: 'Saturday',
		Completed: 280,
		Pending: 90,
		Unpaid: 75,
	},
	{
		name: 'Sunday',
		Completed: 350,
		Pending: 150,
		Unpaid: 32,
	},
];

export const ordersList = [
	{
		id: 1,
		avatar: '/assets/people/avatar-4.png',
		avatarAlt: 'Mark Webber Photo',
		email: 'markwebber@email.com',
		name: 'Mark Webber',
		phone: '+1 012 345 679',
		street: '2972 Westheimer Rd.',
		zipCode: '85486',
		city: 'Chicago',
		orderId: '23709',
		online: true,
		review:
			'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
		rating: 5,
		joined: 'Jun 2th, 2023',
		date: 'Aug 5th, 2023',
		shippingType: 'Ground',
		payment: 'Paypal',
		status: 'Delivered',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0CN13WZC6', quantity: 2 },
			{ asin: 'B0CDC4X65Q', quantity: 1 },
			{ asin: 'B01EF5DBZ6', quantity: 1 },
			{ asin: 'B0CFB7W1W2', quantity: 3 },
		],
	},
	{
		id: 2,
		avatar: '/assets/people/avatar-1.png',
		avatarAlt: 'Frank Gordon Photo',
		name: 'Jacob Arias',
		phone: '(495)081-4473',
		email: 'frankgordon@email.com',
		street: '8141 Avila Point',
		zipCode: '06136',
		city: 'Justinchester',
		orderId: '67260',
		online: true,
		review:
			'Receive practice we explain support popular. Sister identify value together create. Provide raise skin subject important.',
		rating: 4,
		joined: 'Nov 24th, 2020',
		date: 'Jan 01th, 2024',
		shippingType: 'Ground',
		payment: 'Visa',
		status: 'Delivered',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0BSLRXF1H', quantity: 4 },
			{ asin: 'B0BQ118F2T', quantity: 5 },
			{ asin: 'B0CDC6H66Y', quantity: 5 },
			{ asin: 'B0C2HKZMD6', quantity: 1 },
		],
	},
	{
		id: 3,
		avatar: '/assets/people/avatar-10.png',
		avatarAlt: 'Tammy Payne Photo',
		name: 'Jack Green',
		email: 'jackgreen@email.com',
		phone: '1014866609',
		street: '8934 Lauren Locks',
		zipCode: '81520',
		city: 'Johnburgh',
		orderId: '34507',
		online: true,
		review:
			'Paper identify matter action. Off station not life fly perhaps effect leg. Including side evidence factor few short.',
		rating: 3,
		joined: 'Jan 16th, 2024',
		date: 'Feb 10th, 2024',
		shippingType: 'Express',
		payment: 'Visa',
		status: 'Pending',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0CN13WZC6', quantity: 1 },
			{ asin: 'B0CGR7GJN6', quantity: 3 },
			{ asin: 'B0CPJB3CKZ', quantity: 4 },
			{ asin: 'B0BSLRXF1H', quantity: 3 },
		],
	},
	{
		id: 4,
		avatar: '/assets/people/avatar-2.png',
		avatarAlt: 'Susan Wilson Photo',
		name: 'Suzanne Johnson',
		phone: '001-177-336-4244',
		email: 'susanjhonson@email.com',
		street: '249 Webb Stream Suite 503',
		zipCode: '34114',
		city: 'Port Lisastad',
		orderId: '66808',
		online: true,
		review:
			'Despite church become gun data serve. Expect dark bar card smile smile. Skin energy wear girl nearly sell up. Production record suggest describe. Above ball plan chair.',
		rating: 1,
		joined: 'Mar 5th, 2023',
		date: 'Feb 07th, 2024',
		shippingType: 'Express',
		payment: 'Visa',
		status: 'Pending',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0BSLRXF1H', quantity: 2 },
			{ asin: 'B0947BJ67M', quantity: 4 },
			{ asin: 'B0947BJ67M', quantity: 2 },
			{ asin: 'B08HL5K8JB', quantity: 1 },
		],
	},
	{
		id: 5,
		avatar: '/assets/people/avatar-3.png',
		avatarAlt: 'Justin Wiley Photo',
		name: 'Gary Flores',
		email: 'garyflores@email.com',
		phone: '580-915-0521x510',
		street: '753 Cruz Isle',
		zipCode: '62909',
		city: 'New Laurentown',
		orderId: '11455',
		online: false,
		review:
			'Report address sign throw view song. Thought research responsibility condition close. Republican which open soldier. Physical near purpose wear may only accept benefit. Account every method those.',
		rating: 3,
		joined: 'Apr 17th, 2021',
		date: 'Jan 18th, 2024',
		shippingType: 'Ground',
		payment: 'Mastercard',
		status: 'Cancelled',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0BQ118F2T', quantity: 5 },
			{ asin: 'B0BQ118F2T', quantity: 4 },
			{ asin: 'B0CG6NR413', quantity: 3 },
			{ asin: 'B0CG6NR413', quantity: 1 },
		],
	},
	{
		id: 6,
		avatar: '/assets/people/avatar-6.png',
		avatarAlt: 'Daniel Jones Photo',
		name: 'Jennifer Baker',
		email: 'Jenniferbaker@email.com',
		phone: '001-806-995-5509',
		street: '19318 Anderson Tunnel Apt. 585',
		zipCode: '78216',
		city: 'Port Natashaland',
		orderId: '66875',
		online: false,
		review:
			'Little long several people care support night final. Though campaign agency thousand outside listen day. Car behavior remember back speech.',
		rating: 4,
		joined: 'Dec 26th, 2022',
		date: 'Jan 25th, 2024',
		shippingType: 'Ground',
		payment: 'Mastercard',
		status: 'Cancelled',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0CN13WZC6', quantity: 4 },
			{ asin: 'B08HL5K8JB', quantity: 5 },
			{ asin: 'B0BSLRXF1H', quantity: 5 },
			{ asin: 'B0CGR7GJN6', quantity: 4 },
		],
	},
	{
		id: 7,
		avatar: '/assets/people/avatar-5.png',
		avatarAlt: 'Zachary Oconnell Photo',
		name: 'Tiffany Higgins',
		email: 'tiffanyhiggins@email.com',
		phone: '001-669-614-4412x011',
		street: '263 Rodgers Light',
		zipCode: '69118',
		city: 'East Paul',
		orderId: '28279',
		online: false,
		review:
			'Four rather develop question much both. Ever international dark baby future discover minute. Spring sport admit cover customer more worker still. Bill late popular.',
		rating: 5,
		joined: 'Jul 17th, 2020',
		date: 'Jan 21th, 2024',
		shippingType: 'Ground',
		payment: 'Paypal',
		status: 'Cancelled',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0CGR7GJN6', quantity: 5 },
			{ asin: 'B0CHH1N9VY', quantity: 1 },
			{ asin: 'B09D36L36T', quantity: 5 },
			{ asin: 'B0B4PW231T', quantity: 2 },
		],
	},
	{
		id: 8,
		avatar: '/assets/people/avatar-8.png',
		avatarAlt: 'Andrew Rodriguez Photo',
		name: 'Ashley Kennedy',
		email: 'ashleykennedy@email.com',
		phone: '866.740.8433x6144',
		street: '98654 Veronica Springs',
		zipCode: '08034',
		city: 'Leehaven',
		orderId: '97784',
		online: true,
		review:
			'Building letter relationship window nearly grow if. Live writer stuff decide whatever participant. Mean would ten eight attorney support local. Policy growth detail art according book.',
		rating: 1,
		joined: 'Oct 31th, 2023',
		date: 'Jan 22th, 2024',
		shippingType: 'Express',
		payment: 'Visa',
		status: 'Pending',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0B4PW231T', quantity: 1 },
			{ asin: 'B0947BJ67M', quantity: 3 },
			{ asin: 'B0947BJ67M', quantity: 2 },
			{ asin: 'B0BCPHSYK8', quantity: 2 },
		],
	},
	{
		id: 9,
		avatar: '/assets/people/avatar-9.png',
		avatarAlt: 'Matthew Smith Photo',
		name: 'Adam Richards',
		email: 'adamrichards@email.com',
		phone: '+1-872-360-4162x918',
		street: '0457 Rosario Cape',
		zipCode: '89307',
		city: 'Michaelberg',
		orderId: '18211',
		online: false,
		review:
			'Use ahead available take institution character stay. Break station term relate page within. Care government oil whose watch become other.',
		rating: 1,
		joined: 'Jan 26th, 2022',
		date: 'Jan 21th, 2024',
		shippingType: 'Express',
		payment: 'Paypal',
		status: 'Delivered',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0947BJ67M', quantity: 5 },
			{ asin: 'B0B4PW231T', quantity: 1 },
			{ asin: 'B0947BJ67M', quantity: 4 },
			{ asin: 'B0BCPHSYK8', quantity: 3 },
		],
	},
	{
		id: 10,
		avatar: '/assets/people/avatar-10.png',
		avatarAlt: 'Michelle Hoffman Photo',
		name: 'Karen Hernandez',
		email: 'karenhernandez@email.com',
		phone: '(379)086-4647',
		street: '079 Stephanie Center',
		zipCode: '24001',
		city: 'Bakerhaven',
		orderId: '88298',
		online: false,
		review:
			'High open program. Smile store list with material. Him understand once. Nothing scientist state society raise campaign take. Teach hospital carry front particular leave big.',
		rating: 1,
		joined: 'Sep 18th, 2020',
		date: 'Jan 24th, 2024',
		shippingType: 'Express',
		payment: 'Visa',
		status: 'Delivered',
		cardNumber: '1234 1234 1234 1234',
		products: [
			{ asin: 'B0DS69610', quantity: 1 },
			{ asin: 'B0BCPHSYK8', quantity: 5 },
			{ asin: 'B0947BJ67M', quantity: 4 },
			{ asin: 'B0B4PW231T', quantity: 2 },
		],
	},
];

export const financialData = [
	{
		id: 1,
		icon: IconBarChart,
		title: 'Total Income',
		value: '$57.9k',
		percentage: '+5%',
		color: '#50D1B2',
		textColor: 'text-myGreen',
		data: [
			{ name: 'January', value: 400 },
			{ name: 'February', value: 300 },
			{ name: 'March', value: 500 },
			{ name: 'April', value: 200 },
			{ name: 'May', value: 550 },
			{ name: 'June', value: 250 },
			{ name: 'July', value: 650 },
			{ name: 'August', value: 450 },
			{ name: 'September', value: 350 },
			{ name: 'October', value: 470 },
			{ name: 'November', value: 580 },
			{ name: 'December', value: 720 },
		],
	},
	{
		id: 2,
		icon: IconMoney,
		title: 'Total Expenses',
		value: '$45.3k',
		percentage: '-3%',
		color: '#BF2323',
		textColor: 'text-myRed',
		data: [
			{ name: 'January', value: 300 },
			{ name: 'February', value: 400 },
			{ name: 'March', value: 350 },
			{ name: 'April', value: 450 },
			{ name: 'May', value: 250 },
			{ name: 'June', value: 290 },
			{ name: 'July', value: 200 },
			{ name: 'August', value: 380 },
			{ name: 'September', value: 280 },
			{ name: 'October', value: 230 },
			{ name: 'November', value: 190 },
			{ name: 'December', value: 120 },
		],
	},
	{
		id: 3,
		icon: IconEconomy,
		title: 'Money on Hand',
		value: '$32.5k',
		percentage: '+8%',
		color: '#2775FF',
		textColor: 'text-myBlue',
		data: [
			{ name: 'January', value: 500 },
			{ name: 'February', value: 520 },
			{ name: 'March', value: 420 },
			{ name: 'April', value: 330 },
			{ name: 'May', value: 450 },
			{ name: 'June', value: 460 },
			{ name: 'July', value: 520 },
			{ name: 'August', value: 510 },
			{ name: 'September', value: 690 },
			{ name: 'October', value: 410 },
			{ name: 'November', value: 430 },
			{ name: 'December', value: 550 },
		],
	},
	{
		id: 4,
		icon: IconUpdate,
		title: 'Profit Margin',
		value: '25%',
		percentage: '+2%',
		color: '#EC8C56',
		textColor: 'text-myOrange',
		data: [
			{ name: 'January', value: 20 },
			{ name: 'February', value: 22 },
			{ name: 'March', value: 18 },
			{ name: 'April', value: 21 },
			{ name: 'May', value: 25 },
			{ name: 'June', value: 27 },
			{ name: 'July', value: 29 },
			{ name: 'August', value: 24 },
			{ name: 'September', value: 23 },
			{ name: 'October', value: 26 },
			{ name: 'November', value: 28 },
			{ name: 'December', value: 30 },
		],
	},
];

export const financialWalletData = [
	{
		id: 1,
		cardNumber: '4539 1488 0343 6467',
		money: 25600,
		img: '/assets/other/Visa.png',
	},
	{
		id: 2,
		cardNumber: '5391 0375 9387 5309',
		money: 32200,
		img: '/assets/other/Paypal.png',
	},
	{
		id: 3,
		cardNumber: '6011 6011 6011 6611',
		money: 45122,
		img: '/assets/other/Mastercard.png',
	},
];

export const financialWalletStocks = [
	{
		id: 1,
		img: '/assets/other/google.png',
		stockName: 'Google',
		price: 141.76,
		priceChange: 2.43,
	},
	{
		id: 2,
		img: '/assets/other/facebook.png',
		stockName: 'Facebook',
		price: 473.32,
		priceChange: -11.12,
	},
	{
		id: 3,
		img: '/assets/other/apple.png',
		stockName: 'Apple',
		price: 182.76,
		priceChange: 7.02,
	},
];

export const latestTransfersData = [
	{
		id: 1,
		img: '/assets/other/facebook-circle.png',
		name: 'Facebook',
		invoiceId: 'GSV567489239UI',
		price: 450.54,
		status: 'Delivered',
		date: '15 Jan 2022 - 2:00 AM',
		recipientInfo: {
			email: 'contact@facebook.com',
			address: '1 Hacker Way, Menlo Park, CA 94025',
			phone: '+1 650-543-4800',
		},
		bankDetails: {
			bankName: 'Bank of America',
			bankAddress: '1234 American Way, Freedom City, CA 94016',
			accountNumber: '9876543210',
		},
	},
	{
		id: 2,
		img: '/assets/other/amazon.png',
		name: 'Amazon',
		invoiceId: 'AMZ837489239UI',
		price: 1020.99,
		status: 'Cancelled',
		date: '20 Feb 2022 - 4:30 PM',
		recipientInfo: {
			email: 'support@amazon.com',
			address: '410 Terry Ave N, Seattle, WA 98109',
			phone: '+1 888-280-4331',
		},
		bankDetails: {
			bankName: 'Chase Bank',
			bankAddress: '5678 Freedom Dr, Liberty City, WA 98101',
			accountNumber: '1234567890',
		},
	},
	{
		id: 3,
		img: '/assets/other/dribble.png',
		name: 'Dribble',
		invoiceId: 'DRB123456789UI',
		price: 320.47,
		status: 'Pending',
		date: '05 Mar 2022 - 1:15 PM',
		recipientInfo: {
			email: 'help@dribble.com',
			address: 'Design Street 12, Art City, NY 10001',
			phone: '+1 800-123-4567',
		},
		bankDetails: {
			bankName: 'Wells Fargo',
			bankAddress: 'Artisan Row, Craftsmanship Town, NY 10002',
			accountNumber: '2345678901',
		},
	},
	{
		id: 4,
		img: '/assets/other/google.png',
		name: 'Google',
		invoiceId: 'GGL987654321UI',
		price: 899.99,
		status: 'Delivered',
		date: '18 Apr 2022 - 9:00 AM',
		recipientInfo: {
			email: 'support@google.com',
			address: '1600 Amphitheatre Parkway, Mountain View, CA 94043',
			phone: '+1 650-253-0000',
		},
		bankDetails: {
			bankName: 'Silicon Valley Bank',
			bankAddress: '3003 Tasman Dr., Santa Clara, CA 95054',
			accountNumber: '8765432109',
		},
	},
	{
		id: 5,
		img: '/assets/other/linkedin.png',
		name: 'Linkedin',
		invoiceId: 'LNKD234567890UI',
		price: 760.32,
		status: 'Delivered',
		date: '22 May 2022 - 3:45 PM',
		recipientInfo: {
			email: 'info@linkedin.com',
			address: 'Sunnyvale, California, United States',
			phone: '+1 650-687-3600',
		},
		bankDetails: {
			bankName: 'First Republic Bank',
			bankAddress: '111 Pine Street, San Francisco, CA 94111',
			accountNumber: '7654321098',
		},
	},
	{
		id: 6,
		img: '/assets/other/pinterest.png',
		name: 'Pinterest',
		status: 'Cancelled',
		invoiceId: 'PNT345678901UI',
		price: 500.0,
		date: '30 Jun 2022 - 11:00 PM',
		recipientInfo: {
			email: 'support@pinterest.com',
			address: '505 Brannan St, San Francisco, CA 94107, United States',
			phone: '+1 800-736-3001',
		},
		bankDetails: {
			bankName: 'Bank of the West',
			bankAddress: '180 Montgomery Street, San Francisco, CA 94104',
			accountNumber: '6543210987',
		},
	},
	{
		id: 7,
		img: '/assets/other/mcdonalds.png',
		name: 'McDonalds',
		invoiceId: 'MCD20220730UI',
		price: 75.2,
		status: 'Cancelled',
		date: '30 Jul 2022 - 12:30 PM',
		recipientInfo: {
			email: 'contact@mcdonalds.com',
			address: '1020 N San Fernando Blvd, Burbank, CA 91504, United States',
			phone: '+1 818-555-1234',
		},
		bankDetails: {
			bankName: 'Citi Bank',
			bankAddress: '333 Farrell St, San Francisco, CA 94102',
			accountNumber: '9988776655',
		},
	},
	{
		id: 8,
		img: '/assets/other/starbucks.png',
		name: 'Starbucks',
		invoiceId: 'SBX20220815UI',
		price: 142.55,
		status: 'Pending',
		date: '15 Aug 2022 - 3:45 PM',
		recipientInfo: {
			email: 'support@starbucks.com',
			address: '1912 Pike Pl, Seattle, WA 98101, United States',
			phone: '+1 206-555-6789',
		},
		bankDetails: {
			bankName: 'Bank of America',
			bankAddress: '150 Broadway, New York, NY 10038',
			accountNumber: '1122334455',
		},
	},
	{
		id: 9,
		img: '/assets/other/walmart.png',
		name: 'Walmart',
		invoiceId: 'WMT20220905UI',
		price: 530.4,
		status: 'Pending',
		date: '05 Sep 2022 - 4:00 PM',
		recipientInfo: {
			email: 'help@walmart.com',
			address: '702 SW 8th St, Bentonville, AR 72712, United States',
			phone: '+1 800-555-9876',
		},
		bankDetails: {
			bankName: 'Wells Fargo',
			bankAddress: '420 Montgomery St, San Francisco, CA 94104',
			accountNumber: '6677889900',
		},
	},
	{
		id: 10,
		img: '/assets/other/youtube.png',
		name: 'Youtube',
		invoiceId: 'YT20221020UI',
		price: 1200.0,
		status: 'Delivered',
		date: '20 Oct 2022 - 10:15 AM',
		recipientInfo: {
			email: 'support@youtube.com',
			address: '901 Cherry Ave, San Bruno, CA 94066, United States',
			phone: '+1 650-555-3434',
		},
		bankDetails: {
			bankName: 'Chase Bank',
			bankAddress: '270 Park Ave, New York, NY 10017',
			accountNumber: '5566778899',
		},
	},
];

export const expensesByCategory = [
	{
		id: 1,
		name: 'Health',
		money: 589.99,
		bgColor: '#50D1B2',
	},
	{
		id: 2,
		name: 'Groceries',
		money: 320.47,
		bgColor: '#7364DB',
	},
	{
		id: 3,
		name: 'Utilities',
		money: 176.34,
		bgColor: '#EC8C56',
	},
	{
		id: 4,
		name: 'Transport',
		money: 255.89,
		bgColor: '#ECE663',
	},
	{
		id: 5,
		name: 'Entertainment',
		money: 410.15,
		bgColor: '#BF2323',
	},
	{
		id: 6,
		name: 'Dining Out',
		money: 299.99,
		bgColor: '#08D6F4',
	},
	{
		id: 7,
		name: 'Savings',
		money: 800.0,
		bgColor: '#FB7BB8',
	},
];

export const VisistBySourceData: VisistBySourceDataTypes = {
	series: [30, 55, 35],
	options: {
		labels: ['Direct', 'Social', 'Other'],
		chart: {
			type: 'donut',
			height: 380,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			position: 'bottom',
			fontSize: '14px',
			fontWeight: 500,
			labels: {
				colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
			},
			itemMargin: {
				horizontal: 15,
				vertical: 0,
			},
		},
		stroke: {
			width: 10,
			colors: ['#191919'],
		},
		plotOptions: {
			pie: {
				expandOnClick: false,
				donut: {
					size: '73%',
					labels: {
						show: true,
						name: {
							offsetY: 0,
							color: '#FFF',
						},
						total: {
							show: true,
							fontFamily: 'Poppins, sans-serif',
							fontSize: '20px',
							fontWeight: 500,
							label: '54,098',
							formatter: () => 'Total Visits',
							color: '#FFFFFF',
						},
					},
				},
			},
		},
		states: {
			normal: {
				filter: {
					type: 'none',
				},
			},
			hover: {
				filter: {
					type: 'none',
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: 'none',
				},
			},
		},
		colors: ['#5EEA8D', '#2775FF', '#EC8C56'],
	},
};

export const paymentCards: PaymentCard[] = [
	{
		id: '1',
		type: 'Mastercard',
		balance: '$5,342.55',
		cardNumber: '5522 **** **** 7890',
		expiryDate: '08/26',
		gradientColors: {
			from: '#ea580c',
			to: '#eab308',
		},
		iconPath: '/assets/other/Mastercard.png',
	},
	{
		id: '2',
		type: 'Visa',
		balance: '$3,210.12',
		cardNumber: '4539 **** **** 1234',
		expiryDate: '11/24',
		gradientColors: {
			from: '#3b82f6',
			to: '#4338ca',
		},
		iconPath: '/assets/other/Visa.png',
	},
	{
		id: '3',
		type: 'Paypal',
		balance: '$7,890.00',
		cardNumber: 'PayPal Account',
		expiryDate: '07/26',
		gradientColors: {
			from: '#4338ca',
			to: '#3b82f6',
		},
		iconPath: '/assets/other/Paypal.png',
	},
	{
		id: '4',
		type: 'Bitcoin',
		balance: '₿0.255',
		cardNumber: 'Bitcoin Wallet',
		expiryDate: 'N/A',
		gradientColors: {
			from: '#65a30d',
			to: '#0d9488',
		},
		iconPath: '/assets/other/Bitcoin.png',
	},
];

export const jobListing = [
	{
		id: 1,
		img: '/assets/other/youtube.png',
		positionName: 'Javascript developer',
		location: 'USA',
		company: 'Youtube',
		employmentTime: 'Full time',
		jobListed: '2 days ago',
		salary: '4029 - 5100',
		tags: ['Remote', 'Junior', 'Javascript'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 2,
		img: '/assets/other/amazon.png',
		positionName: 'Backend developer',
		location: 'USA',
		company: 'Amazon',
		employmentTime: 'Part time',
		jobListed: '5 days ago',
		salary: '3600 - 7840',
		tags: ['Senior', 'Remote', 'Backend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 3,
		img: '/assets/other/apple.png',
		positionName: 'Frontend developer',
		location: 'USA',
		company: 'Apple',
		employmentTime: 'Full time',
		jobListed: '5 days ago',
		salary: '3163 - 5740',
		tags: ['Junior', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 4,
		img: '/assets/other/dribble.png',
		positionName: 'React developer',
		location: 'USA',
		company: 'Dribble',
		employmentTime: 'Full time',
		jobListed: '12 days ago',
		salary: '4103 - 8940',
		tags: ['React', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 5,
		img: '/assets/other/facebook-circle.png',
		positionName: 'Javascript developer',
		location: 'USA',
		company: 'Facebook',
		employmentTime: 'Full time',
		jobListed: '2 days ago',
		salary: '4029 - 5100',
		tags: ['Remote', 'Junior', 'Javascript'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 6,
		img: '/assets/other/google.png',
		positionName: 'Backend developer',
		location: 'USA',
		company: 'Google',
		employmentTime: 'Part time',
		jobListed: '5 days ago',
		salary: '3600 - 7840',
		tags: ['Senior', 'Remote', 'Backend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 7,
		img: '/assets/other/linkedin.png',
		positionName: 'Frontend developer',
		location: 'USA',
		company: 'Linkedin',
		employmentTime: 'Full time',
		jobListed: '5 days ago',
		salary: '3163 - 5740',
		tags: ['Junior', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 8,
		img: '/assets/other/mcdonalds.png',
		positionName: 'React developer',
		location: 'USA',
		company: 'Mcdonalds',
		employmentTime: 'Full time',
		jobListed: '12 days ago',
		salary: '4103 - 8940',
		tags: ['React', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 9,
		img: '/assets/other/nvidia.png',
		positionName: 'Javascript developer',
		location: 'USA',
		company: 'Nvidia',
		employmentTime: 'Full time',
		jobListed: '2 days ago',
		salary: '4029 - 5100',
		tags: ['Remote', 'Junior', 'Javascript'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 10,
		img: '/assets/other/pinterest.png',
		positionName: 'Backend developer',
		location: 'USA',
		company: 'Pinterest',
		employmentTime: 'Part time',
		jobListed: '5 days ago',
		salary: '3600 - 7840',
		tags: ['Senior', 'Remote', 'Backend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 11,
		img: '/assets/other/starbucks.png',
		positionName: 'Frontend developer',
		location: 'USA',
		company: 'Starbucks',
		employmentTime: 'Full time',
		jobListed: '5 days ago',
		salary: '3163 - 5740',
		tags: ['Junior', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
	{
		id: 12,
		img: '/assets/other/twitter.png',
		positionName: 'React developer',
		location: 'USA',
		company: 'Twitter',
		employmentTime: 'Full time',
		jobListed: '12 days ago',
		salary: '4103 - 8940',
		tags: ['React', 'Remote', 'Frontend'],
		jobDescription:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste autem itaque nesciunt aut ipsam omnis provident distinctio quia id mollitia sapiente doloremque commodi adipisci pariatur aperiam, labore possimus nam quam dolorem ea tempore rem! Autem deserunt, voluptatibus repellendus velit adipisci consequuntur rem expedita fugiat earum quisquam, vitae nihil iure architecto.',
		qualifications: [
			'5+ years experience',
			'Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design',
			'Ability to autonomously pursue elegant solutions to open-ended problems',
			'ively work on more than one project at a time',
		],
		perks: [
			'Competitive pay',
			'Competitive medical, dental, and vision insurance plans',
			'Paid vacation and sick time',
			'Free snacks and beverages',
		],
	},
];

export const AnalyticsSale: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		height: 200,
		type: 'area',
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 3,
		curve: 'smooth',
	},

	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	grid: {
		show: false,
		padding: {
			left: -10,
			top: -25,
			right: -40,
			bottom: -15,
		},
	},
	fill: {
		opacity: 0.2,
	},
	colors: ['#5EEA8D'],

	tooltip: {
		theme: '#000000',

		marker: {
			show: true,
		},
	},
	responsive: [
		{
			breakpoint: 576,
			options: {
				chart: {
					height: 150,
				},
			},
		},
	],
	series: [
		{
			data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0, 10],
		},
	],
};

export const analyticsData = [
	{
		id: 1,
		title: 'Total Sale',
		totalSale: '$3654.00',
		percentageChange: '+65%',
		chartOptions: AnalyticsSale,
		seriesData: [
			{
				data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0, 10],
			},
		],
		chartColor: '#5415F1',
	},
	{
		id: 2,
		title: 'Total Project',
		totalSale: '12560',
		percentageChange: '+65%',
		chartOptions: AnalyticsSale,
		seriesData: [
			{
				data: [170, 120, 102, 70, 100, 130, 200, 220, 180, 200, 20, 10],
			},
		],
		chartColor: '#2775FF',
	},
	{
		id: 3,
		title: 'Total Product',
		totalSale: '93M',
		percentageChange: '+65%',
		chartOptions: AnalyticsSale,
		seriesData: [
			{
				data: [132, 129, 96, 77, 161, 103, 38, 82, 18, 74, 202, 41],
			},
		],
		chartColor: '#ECE663',
	},
];

export const areaChartOptions = {
	chart: {
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 1,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 0.1,
			type: 'vertical',
			inverseColors: false,
			opacityFrom: 0.5,
			opacityTo: 0,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '45%',
			borderRadius: 4,
		},
	},
	grid: {
		show: true,
		borderColor: '#90A4AE',
		strokeDashArray: 0,
		position: 'back',
		xaxis: {
			lines: {
				show: false,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		row: {
			colors: undefined,
			opacity: 0.5,
		},
		column: {
			colors: undefined,
			opacity: 0.5,
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},

	legend: {
		position: 'bottom',
		fontSize: '12px',
		fontWeight: 500,
		labels: {
			colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
		},
		itemMargin: {
			horizontal: 15,
			vertical: 10,
		},
	},
	colors: ['#2775FF', '#BF2323', '#5EEA8D'],
	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		labels: {
			style: {
				colors: [
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
					'#FFF',
				],
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		tickAmount: 11,
	},
	yaxis: {
		show: false,
	},
};

export const analyticsSalesPerformance: ApexOptions = {
	series: [
		{
			name: 'Profit',
			data: [100, 50, 25, 50, 30, 50, 70, 50, 40, 80, 75, 65],
		},
		{
			name: 'Revenue',
			data: [70, 20, 55, 45, 35, 110, 85, 105, 120, 100, 95, 40],
		},
		{
			name: 'Cash Flow',
			data: [85, 55, 100, 35, 90, 60, 80, 95, 70, 20, 50, 65],
		},
	],
	chart: {
		type: 'bar',
		height: 380,
		toolbar: {
			show: false,
		},
	},
	legend: {
		position: 'bottom',
		fontSize: '14px',
		fontWeight: 500,
		labels: {
			colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
		},
		itemMargin: {
			horizontal: 5,
			vertical: 0,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '50%',
		},
	},
	dataLabels: {
		enabled: false,
	},

	xaxis: {
		categories: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		labels: {
			style: {
				colors: '#FFFFFF',
			},
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		title: {
			text: 'Dollars in thounand',
			style: {
				fontSize: '14px',
				fontWeight: 500,
				color: '#FFFFFF',
			},
		},
	},
	colors: ['#2775FF', '#5EEA8D', '#5415F1'],
	tooltip: {
		y: {
			formatter: function (val: number) {
				return '$ ' + val + ' thousands';
			},
		},
	},
	responsive: [
		{
			breakpoint: 576,
			options: {
				chart: {
					height: 200,
				},
			},
		},
	],
};

export const AnalyticsSaleStatus: ApexOptions = {
	series: [90, 63, 50],
	chart: {
		type: 'radialBar',
		height: 375,
		offsetY: -10,
		offsetX: 10,
	},
	plotOptions: {
		radialBar: {
			inverseOrder: false,
			hollow: {
				margin: 10,
				size: '30%',
				background: 'transparent',
			},
			track: {
				show: true,
				background: '#333',
				strokeWidth: '10%',
				opacity: 1,
				margin: 3,
			},
		},
	},
	labels: ['Approved', 'Pending', 'Cancelled'],
	legend: {
		show: true,
		fontSize: '16px',
		fontWeight: 500,
		position: 'bottom',
		labels: {
			colors: '#FFF',
		},
		markers: {
			width: 86,
			height: 18,
			radius: 3,
		},
	},
	colors: ['#7364DB', '#ECE663', '#BF2323'],
	responsive: [
		{
			breakpoint: 767,
			options: {
				title: {
					style: {
						fontSize: '16px',
					},
				},
				legend: {
					show: true,
					fontSize: '16px',
					fontWeight: 500,
					position: 'bottom',
					labels: {
						colors: '#FFF',
					},
					markers: {
						width: 50,
						height: 10,
						radius: 2,
					},
				},
			},
		},
		{
			breakpoint: 576,
			options: {
				chart: {
					offsetX: 0,
				},
				legend: {
					show: true,
					fontSize: '16px',
					fontWeight: 500,
					position: 'bottom',
					labels: {
						colors: '#FFF',
					},
					markers: {
						width: 20,
						height: 8,
						radius: 2,
					},
				},
			},
		},
	],
};

let optionsProgress1: ApexOptions = {
	chart: {
		height: 70,
		type: 'bar',
		stacked: true,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '20%',
			colors: {
				backgroundBarColors: ['#f2f2f2'],
			},
		},
	},
	colors: ['#148df6'],
	stroke: {
		width: 0,
	},
	fill: {
		colors: ['#148df6'],
		type: 'gradient',
		gradient: {
			gradientToColors: ['#148df6'],
		},
	},
	series: [
		{
			name: 'Process 1',
			data: [44],
		},
	],
	title: {
		floating: true,
		offsetX: -10,
		offsetY: 5,
		text: 'Process 1',
		style: {
			color: '#FFF',
		},
	},
	subtitle: {
		floating: true,
		align: 'right',
		offsetY: 0,
		text: '44%',
		style: {
			fontSize: '20px',
			color: '#FFF',
		},
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		categories: ['Process 1'],
	},
	yaxis: {
		max: 100,
	},
};

let optionsProgress2: ApexOptions = {
	chart: {
		height: 70,
		type: 'bar',
		stacked: true,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '20%',
			colors: {
				backgroundBarColors: ['#f2f2f2'],
			},
		},
	},
	colors: ['#fb2e63'],
	stroke: {
		width: 0,
	},
	series: [
		{
			name: 'Process 2',
			data: [80],
		},
	],
	title: {
		floating: true,
		offsetX: -10,
		offsetY: 5,
		text: 'Process 2',
		style: {
			color: '#FFF',
		},
	},
	subtitle: {
		floating: true,
		align: 'right',
		offsetY: 0,
		text: '80%',
		style: {
			fontSize: '20px',
			color: '#FFF',
		},
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		categories: ['Process 2'],
	},
	yaxis: {
		max: 100,
	},
	fill: {
		colors: ['#fb2e63'],
		type: 'gradient',
		gradient: {
			inverseColors: false,
			gradientToColors: ['#fb2e63'],
		},
	},
};

let optionsProgress3: ApexOptions = {
	chart: {
		height: 70,
		type: 'bar',
		stacked: true,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '20%',
			colors: {
				backgroundBarColors: ['#f2f2f2'],
			},
		},
	},
	colors: ['#51bb25'],
	stroke: {
		width: 0,
	},
	series: [
		{
			name: 'Process 3',
			data: [74],
		},
	],
	fill: {
		colors: ['#51bb25'],
		type: 'gradient',
		gradient: {
			gradientToColors: ['#51bb25'],
		},
	},
	title: {
		floating: true,
		offsetX: -10,
		offsetY: 5,
		text: 'Process 3',
		style: {
			color: '#FFF',
		},
	},
	subtitle: {
		floating: true,
		align: 'right',
		offsetY: 0,
		text: '74%',
		style: {
			fontSize: '20px',
			color: '#FFF',
		},
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		categories: ['Process 3'],
	},
	yaxis: {
		max: 100,
	},
};

let optionsProgress4: ApexOptions = {
	chart: {
		height: 70,
		type: 'bar',
		stacked: true,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '20%',
			colors: {
				backgroundBarColors: ['#f2f2f2'],
			},
		},
	},
	colors: ['#544fff'],
	stroke: {
		width: 0,
	},
	series: [
		{
			name: 'Process 4',
			data: [74],
		},
	],
	fill: {
		colors: ['#544fff'],
		type: 'gradient',
		gradient: {
			gradientToColors: ['#544fff'],
		},
	},
	title: {
		floating: true,
		offsetX: -10,
		offsetY: 5,
		text: 'Process 4',
		style: {
			color: '#FFF',
		},
	},
	subtitle: {
		floating: true,
		align: 'right',
		offsetY: 0,
		text: '74%',
		style: {
			fontSize: '20px',
			color: '#FFF',
		},
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		categories: ['Process 4'],
	},
	yaxis: {
		max: 100,
	},
};

let optionsProgress5: ApexOptions = {
	chart: {
		height: 70,
		type: 'bar',
		stacked: true,
		sparkline: {
			enabled: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '20%',
			colors: {
				backgroundBarColors: ['#f2f2f2'],
			},
		},
	},
	colors: ['#fb740d'],
	stroke: {
		width: 0,
	},
	series: [
		{
			name: 'Process 5',
			data: [74],
		},
	],
	fill: {
		colors: ['#fb740d'],
		type: 'gradient',
		gradient: {
			gradientToColors: ['#fb740d'],
		},
	},
	title: {
		floating: true,
		offsetX: -10,
		offsetY: 5,
		text: 'Process 5',
		style: {
			color: '#FFF',
		},
	},
	subtitle: {
		floating: true,
		align: 'right',
		offsetY: 0,
		text: '74%',
		style: {
			fontSize: '20px',
			color: '#FFF',
		},
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		categories: ['Process 5'],
	},
	yaxis: {
		max: 100,
	},
};

export let AnalyticsOrderStatus = [
	optionsProgress1,
	optionsProgress2,
	optionsProgress3,
	optionsProgress4,
	optionsProgress5,
];

export const projectsManage = [
	{
		id: 1,
		title: 'Dashboard UI Project',
		state: 'In progress',
		manageAvatar: '/assets/people/avatar-10.png',
		manageName: 'Mark Webber, CEO',
		startDate: '12 Jan 2024',
		endDate: '5 May 2024',
		task: 10,
		member: [
			'/assets/people/avatar-2.png',
			'/assets/people/avatar-4.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-9.png',
		],
	},
	{
		id: 2,
		title: 'Custom Software',
		state: 'Done',
		manageAvatar: '/assets/people/avatar-2.png',
		manageName: 'Angela Gray, CEO',
		startDate: '12 March 2024',
		endDate: '5 December 2024',
		task: 7,
		member: [
			'/assets/people/avatar-2.png',
			'/assets/people/avatar-4.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-9.png',
		],
	},
	{
		id: 3,
		title: 'Custom Software',
		state: 'Late',
		manageAvatar: '/assets/people/avatar-2.png',
		manageName: 'Kimberly Smith, CEO',
		startDate: '12 March 2024',
		endDate: '5 December 2024',
		task: 5,
		member: [
			'/assets/people/avatar-2.png',
			'/assets/people/avatar-4.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-9.png',
		],
	},
	{
		id: 4,
		title: 'Cybersecurity Upgrade',
		state: 'Late',
		manageAvatar: '/assets/people/avatar-9.png',
		manageName: 'Jacob Thompson, CEO',
		startDate: '24 January 2024',
		endDate: '05 April 2024',
		task: 10,
		member: [
			'/assets/people/avatar-3.png',
			'/assets/people/avatar-9.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-2.png',
		],
	},
	{
		id: 5,
		title: 'Enterprise Resource Planning',
		state: 'In progress',
		manageAvatar: '/assets/people/avatar-4.png',
		manageName: 'Jacob Thompson, CEO',
		startDate: '24 January 2024',
		endDate: '22 May 2024',
		task: 11,
		member: [
			'/assets/people/avatar-6.png',
			'/assets/people/avatar-1.png',
			'/assets/people/avatar-10.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-5.png',
		],
	},
	{
		id: 6,
		title: 'Mobile App Development',
		state: 'Done',
		manageAvatar: '/assets/people/avatar-3.png',
		manageName: 'Rizky Hasanuddin, CEO',
		startDate: '08 January 2024',
		endDate: '28 May 2024',
		task: 12,
		member: [
			'/assets/people/avatar-9.png',
			'/assets/people/avatar-7.png',
			'/assets/people/avatar-9.png',
			'/assets/people/avatar-10.png',
			'/assets/people/avatar-4.png',
		],
	},
];

export const initialMeetings = [
	{
		id: '1',
		name: 'Team Strategy Workshop',
		title: 'Quarterly Planning Session',
		date: '2024-07-20',
		time: '13:00',
	},
	{
		id: '2',
		name: 'Product Launch Webinar',
		title: 'Introducing Our New Product Line',
		date: '2024-07-22',
		time: '16:00',
	},
	{
		id: '3',
		name: "Sarah's Birthday Celebration",
		title: 'Cake and Coffee Gathering',
		date: '2024-07-24',
		time: '16:00',
	},
	{
		id: '4',
		name: 'Annual General Meeting',
		title: 'Yearly Company Review',
		date: '2024-07-26',
		time: '09:00',
	},
	{
		id: '5',
		name: 'Technology Conference',
		title: 'The Future of Tech',
		date: '2024-07-28',
		time: '17:00',
	},
];

export const invoicesData: InvoiceDataProps[] = [
	{
		id: 'PQ1234',
		clientName: 'John Doe',
		emailAddress: 'john.doe@example.com',
		streetAddress: '123 Main Street',
		city: 'Cityville',
		state: 'CA',
		zipCode: 90210,
		amount: 1500,
		status: 'Paid',
	},
	{
		id: 'PQ5678',
		clientName: 'Jane Smith',
		emailAddress: 'jane.smith@example.com',
		streetAddress: '456 Oak Avenue',
		city: 'Villagetown',
		state: 'NY',
		zipCode: 10001,
		amount: 2000,
		status: 'Pending',
	},
	{
		id: 'PQ9123',
		clientName: 'Bob Johnson',
		emailAddress: 'bob.johnson@example.com',
		streetAddress: '789 Pine Road',
		city: 'Townsville',
		state: 'TX',
		zipCode: 75001,
		amount: 1800,
		status: 'Cancelled',
	},
	{
		id: 'PQ4567',
		clientName: 'Alice Williams',
		emailAddress: 'alice.williams@example.com',
		streetAddress: '101 Cedar Lane',
		city: 'Hamletville',
		state: 'FL',
		zipCode: 33101,
		amount: 2200,
		status: 'Pending',
	},
	{
		id: 'PQ8912',
		clientName: 'Charlie Brown',
		emailAddress: 'charlie.brown@example.com',
		streetAddress: '202 Elm Street',
		city: 'Villagetown',
		state: 'NY',
		zipCode: 10002,
		amount: 1900,
		status: 'Paid',
	},
	{
		id: 'PQ3456',
		clientName: 'Eve Davis',
		emailAddress: 'eve.davis@example.com',
		streetAddress: '303 Maple Avenue',
		city: 'Townsville',
		state: 'TX',
		zipCode: 75002,
		amount: 2100,
		status: 'Pending',
	},
];

export const coinsArray = [
	{
		id: 1,
		market_cap_rank: 1,
		name: 'Bitcoin',
		image:
			'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
		symbol: 'btc',
		current_price: 50000,
		price_change_percentage_24h: 2.5,
		market_cap: 1000000000,
		ath: 60000,
	},
	{
		id: 2,
		market_cap_rank: 2,
		name: 'Ethereum',
		image:
			'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
		symbol: 'eth',
		current_price: 3000,
		price_change_percentage_24h: -1.8,
		market_cap: 350000000,
		ath: 4000,
	},
	{
		id: 3,
		market_cap_rank: 3,
		name: 'Cardano',
		image:
			'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
		symbol: 'ada',
		current_price: 2.5,
		price_change_percentage_24h: 5.2,
		market_cap: 80000000,
		ath: 3.0,
	},
	{
		id: 4,
		market_cap_rank: 4,
		name: 'Binance Coin',
		image:
			'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970',
		symbol: 'bnb',
		current_price: 350,
		price_change_percentage_24h: 0.9,
		market_cap: 55000000,
		ath: 380,
	},
	{
		id: 5,
		market_cap_rank: 5,
		name: 'Solana',
		image:
			'https://assets.coingecko.com/coins/images/4128/large/solana.png?1548384250',
		symbol: 'sol',
		current_price: 150,
		price_change_percentage_24h: -3.5,
		market_cap: 20000000,
		ath: 180,
	},
	{
		id: 6,
		market_cap_rank: 6,
		name: 'XRP',
		image:
			'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
		symbol: 'xrp',
		current_price: 1.2,
		price_change_percentage_24h: 1.0,
		market_cap: 30000000,
		ath: 1.5,
	},
	{
		id: 7,
		market_cap_rank: 7,
		name: 'Polkadot',
		image:
			'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776',
		symbol: 'dot',
		current_price: 30,
		price_change_percentage_24h: -2.0,
		market_cap: 4000000,
		ath: 35,
	},
	{
		id: 8,
		market_cap_rank: 8,
		name: 'Dogecoin',
		image:
			'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
		symbol: 'doge',
		current_price: 0.3,
		price_change_percentage_24h: 2.8,
		market_cap: 2000000,
		ath: 0.35,
	},
	{
		id: 9,
		market_cap_rank: 9,
		name: 'Litecoin',
		image:
			'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
		symbol: 'ltc',
		current_price: 150,
		price_change_percentage_24h: -1.0,
		market_cap: 12000000,
		ath: 170,
	},
	{
		id: 10,
		market_cap_rank: 10,
		name: 'Chainlink',
		image:
			'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
		symbol: 'link',
		current_price: 25,
		price_change_percentage_24h: 4.5,
		market_cap: 5000000,
		ath: 28,
	},
];

export const defaultCols: KanbanColumn[] = [
	{
		id: 'todo',
		title: 'Todo',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'home',
		title: 'Home',
	},
];

export const defaultTasks: KanbanTask[] = [
	{
		id: '1',
		columnId: 'todo',
		content: 'Go to the gym',
	},
	{
		id: '2',
		columnId: 'todo',
		content: 'Make a dinner',
	},
	{
		id: '3',
		columnId: 'todo',
		content: 'Take a shower',
	},
	{
		id: '4',
		columnId: 'work',
		content: 'Make a coffee',
	},
	{
		id: '5',
		columnId: 'work',
		content: 'Order candy',
	},
	{
		id: '6',
		columnId: 'work',
		content: '3rd Task',
	},
	{
		id: '7',
		columnId: 'home',
		content: 'Clean the house',
	},
	{
		id: '8',
		columnId: 'home',
		content: 'Call to mom',
	},
	{
		id: '9',
		columnId: 'home',
		content: 'Go to shopping',
	},
];

export const personsPost = [
	{
		id: 1,
		avatar: '/assets/people/avatar-1.png',
		avatarAlt: 'Mark Webber Photo',
		name: 'Mark Webber',
		status: false,
		sendDate: '3h ago',
		photo:
			'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
		comments: 12,
		share: 3,
		likes: [
			'/assets/people/avatar-2.png',
			'/assets/people/avatar-3.png',
			'/assets/people/avatar-4.png',
		],
	},
	{
		id: 2,
		avatar: '/assets/people/avatar-2.png',
		avatarAlt: 'Angela Gray Photo',
		name: 'Angela Gray',
		status: true,
		sendDate: '17h ago',
		photo: false,
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
		comments: 9,
		share: 1,
		likes: [
			'/assets/people/avatar-3.png',
			'/assets/people/avatar-4.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-6.png',
			'/assets/people/avatar-7.png',
		],
	},
	{
		id: 3,
		avatar: '/assets/people/avatar-3.png',
		avatarAlt: 'Jacob Thompson Photo',
		name: 'Jacob Thompson',
		status: true,
		sendDate: '14h ago',
		photo: false,
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
		comments: 8,
		share: 6,
		likes: [
			'/assets/people/avatar-4.png',
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-6.png',
			'/assets/people/avatar-7.png',
		],
	},
	{
		id: 4,
		avatar: '/assets/people/avatar-4.png',
		avatarAlt: 'Kimberly Smith Photo',
		name: 'Kimberly Smith',
		status: false,
		sendDate: '17h ago',
		photo: false,
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
		comments: 28,
		share: 2,
		likes: [
			'/assets/people/avatar-5.png',
			'/assets/people/avatar-6.png',
			'/assets/people/avatar-7.png',
		],
	},
];

import {
	ArrowUpTrayIcon,
	HeartIcon,
	AtSymbolIcon,
	HandThumbUpIcon,
} from '@heroicons/react/24/outline';

export const lastActivity = [
	{
		id: 1,
		name: 'Kimberly',
		avatar: '/assets/people/avatar-1.png',
		avatarAlt: 'Kimberly Smith Photo',
		when: '5 hours ago',
		icon: EnvelopeIcon,
		color: '#eab308',
		react: 'sent you a message.',
	},
	{
		id: 2,
		name: 'Mark',
		avatar: '/assets/people/avatar-2.png',
		avatarAlt: 'Mark Webber Photo',
		when: '7 hours ago',
		icon: HandThumbUpIcon,
		color: '#0ea5e9',
		react: 'like your photo.',
	},
	{
		id: 3,
		name: 'Jacob',
		avatar: '/assets/people/avatar-3.png',
		avatarAlt: 'Jacob Photo',
		when: '12 hours ago',
		icon: ArrowUpTrayIcon,
		color: '#a855f7',
		react: 'upload a file.',
	},
	{
		id: 4,
		name: 'Kimberly',
		avatar: '/assets/people/avatar-4.png',
		avatarAlt: 'Kimberly Photo',
		when: '10 hours ago',
		icon: HeartIcon,
		color: '#ef4444',
		react: 'follows you.',
	},
	{
		id: 5,
		name: 'Gary',
		avatar: '/assets/people/avatar-5.png',
		avatarAlt: 'Gary Photo',
		when: '4 hours ago',
		icon: AtSymbolIcon,
		color: '#22c55e',
		react: 'sent you an email.',
	},
	{
		id: 6,
		name: 'Kimberly',
		avatar: '/assets/people/avatar-1.png',
		avatarAlt: 'Kimberly Smith Photo',
		when: '5 hours ago',
		icon: EnvelopeIcon,
		color: '#eab308',
		react: 'sent you a message.',
	},
	{
		id: 7,
		name: 'Mark',
		avatar: '/assets/people/avatar-2.png',
		avatarAlt: 'Mark Webber Photo',
		when: '7 hours ago',
		icon: HandThumbUpIcon,
		color: '#0ea5e9',
		react: 'like your photo.',
	},
	{
		id: 8,
		name: 'Jacob',
		avatar: '/assets/people/avatar-3.png',
		avatarAlt: 'Jacob Photo',
		when: '12 hours ago',
		icon: ArrowUpTrayIcon,
		color: '#a855f7',
		react: 'upload a file.',
	},
	{
		id: 9,
		name: 'Kimberly',
		avatar: '/assets/people/avatar-4.png',
		avatarAlt: 'Kimberly Photo',
		when: '10 hours ago',
		icon: HeartIcon,
		color: '#ef4444',
		react: 'follows you.',
	},
	{
		id: 10,
		name: 'Gary',
		avatar: '/assets/people/avatar-5.png',
		avatarAlt: 'Gary Photo',
		when: '4 hours ago',
		icon: AtSymbolIcon,
		color: '#22c55e',
		react: 'sent you an email.',
	},
];
