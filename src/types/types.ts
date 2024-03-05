export interface Person {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	workProfile: string;
	email: string;
	role: string;
	react: string;
	message: string;
	checked: boolean;
	lastSeen: string | null | undefined;
	lastSeenDateTime: string | null | undefined;
	content: string;
}
export interface OrdersType {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	orderId: string;
	product: string;
	status: string;
	date: string;
	amount: number;
}
export interface TransactionsType {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	orderId: string;
	product: string;
	status: string;
	date: string;
	amount: number;
}

export interface TransactionDetails {
	id: number;
	img: string;
	name: string;
	invoiceId: string;
	price: number;
	date: string;
	recipientInfo: {
	  email: string;
	  address: string;
	  phone: string;
	};
	bankDetails: {
	  bankName: string;
	  bankAddress: string;
	  accountNumber: string;
	};
  }

import { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';


export interface SellsBoxesTypes {
	id: number;
	title: string;
	price: number;
	percent: number;
	bgColor: string;
	icon: IconType;
}

interface Price {
	value: number;
	currency: string;
}

interface ProductAttribute {
	key: string;
	value: string;
}

interface Product {
	asin: string;
	quantity: number;
}

export interface ProductTypes {
	title: string;
	url: string;
	asin: string;
	inStock: boolean;
	brand: string;
	price: Price;
	stars: number | null;
	reviewsCount: number | null;
	thumbnailImage: string;
	galleryThumbnails: string[];
	highResolutionImages: string[];
	description: string | null;
	features: string[];
	productOverview: ProductAttribute[];
}

export interface ProductDetail extends ProductTypes {
	quantity: number;
	total: number;
}

export interface OrderListTypes {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	phone: string;
	email: string;
	street: string;
	zipCode: string;
	city: string;
	orderId: string;
	online: boolean;
	review: string;
	rating: number;
	joined: string;
	date: string;
	shippingType: string;
	payment: string;
	status: string;
	cardNumber: string;
	products: Product[];
}

export interface ApexOptions {
	annotations?: ApexAnnotations;
	chart?: ApexChart;
	colors?: any[];
	dataLabels?: ApexDataLabels;
	fill?: ApexFill;
	forecastDataPoints?: ApexForecastDataPoints;
	grid?: ApexGrid;
	labels?: string[];
	legend?: ApexLegend;
	markers?: ApexMarkers;
	noData?: ApexNoData;
	plotOptions?: ApexPlotOptions;
	responsive?: ApexResponsive[];
	series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
	states?: ApexStates;
	stroke?: ApexStroke;
	subtitle?: ApexTitleSubtitle;
	theme?: ApexTheme;
	title?: ApexTitleSubtitle;
	tooltip?: ApexTooltip;
	xaxis?: ApexXAxis;
	yaxis?: ApexYAxis | ApexYAxis[];
}
export interface VisistBySourceDataTypes {
	series: number[] | { name: string; data: number[] }[];
	options: ApexOptions;
}


export type PaymentCard = {
	id: string;
	type: string;
	balance: string;
	cardNumber: string;
	expiryDate: string;
	gradientColors: {
	  from: string;
	  to: string;
	};
	iconPath: string;
  };

  export interface JobTypes {
	id: number;
	img: string;
	positionName: string;
	location: string;
	company: string;
	employmentTime: string;
	jobListed: string;
	salary: string;
	tags: string[];
	jobDescription: string;
	qualifications: string[];
	perks: string[];
}


export interface Meeting {
	id: string;
	name: string;
	title: string;
	time: string;
	date: string;
}

export interface MeetingProps {
	meeting: Meeting;
	onDelete: (id: string) => void;
}

export interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	setMeetings: Dispatch<SetStateAction<Meeting[]>>;
}