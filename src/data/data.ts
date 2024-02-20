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
import {
	IconBarChart,
	IconEconomy,
	IconMoney,
	IconToggle,
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
		avatar: '/assets/people/avatar-4.webp',
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
		avatar: '/assets/people/avatar-1.webp',
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
		avatar: '/assets/people/avatar-2.webp',
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
		avatar: '/assets/people/avatar-3.webp',
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
		avatar: '/assets/people/avatar-6.webp',
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
		avatar: '/assets/people/avatar-5.webp',
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
		avatar: '/assets/people/avatar-4.webp',
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
		avatar: '/assets/people/avatar-1.webp',
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
		avatar: '/assets/people/avatar-2.webp',
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
		avatar: '/assets/people/avatar-3.webp',
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
		avatar: '/assets/people/avatar-6.webp',
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
		avatar: '/assets/people/avatar-5.webp',
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
		avatar: '/assets/people/avatar-4.webp',
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
		avatar: '/assets/people/avatar-1.webp',
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
		avatar: '/assets/people/avatar-10.webp',
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
		avatar: '/assets/people/avatar-2.webp',
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
		avatar: '/assets/people/avatar-3.webp',
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
		avatar: '/assets/people/avatar-6.webp',
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
		avatar: '/assets/people/avatar-5.webp',
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
		avatar: '/assets/people/avatar-8.webp',
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
		avatar: '/assets/people/avatar-9.webp',
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
		avatar: '/assets/people/avatar-10.webp',
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
		img: '/assets/other/Google.png',
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
		date: '15 Jan 2022 - 2:00 AM',
	},
	{
		id: 2,
		img: '/assets/other/amazon.png',
		name: 'Amazon',
		invoiceId: 'AMZ837489239UI',
		price: 1020.99,
		date: '20 Feb 2022 - 4:30 PM',
	},
	{
		id: 3,
		img: '/assets/other/dribble.png',
		name: 'Dribble',
		invoiceId: 'DRB123456789UI',
		price: 320.47,
		date: '05 Mar 2022 - 1:15 PM',
	},
	{
		id: 4,
		img: '/assets/other/google.png',
		name: 'Google',
		invoiceId: 'GGL987654321UI',
		price: 899.99,
		date: '18 Apr 2022 - 9:00 AM',
	},
	{
		id: 5,
		img: '/assets/other/linkedin.png',
		name: 'Linkedin',
		invoiceId: 'LNKD234567890UI',
		price: 760.32,
		date: '22 May 2022 - 3:45 PM',
	},
	{
		id: 6,
		img: '/assets/other/pinterest.png',
		name: 'Pinterest',
		invoiceId: 'PNT345678901UI',
		price: 500.0,
		date: '30 Jun 2022 - 11:00 PM',
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
