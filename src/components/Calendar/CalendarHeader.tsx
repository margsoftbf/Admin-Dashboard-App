import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import {
	containerAnimation,
	itemAnimation,
	initialMeetings,
} from '@/data/data';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfMonth,
	startOfToday,
	startOfWeek,
	endOfWeek,
} from 'date-fns';
import MeetingComponent from '@/components/Calendar/Meeting';
import { Meeting } from '@/types/types';
import CalendarModal from '@/components/Calendar/CalendarModal';

interface CalendarHeaderProps {
	currentMonth: Date;
	onPreviousMonth: () => void;
	onNextMonth: () => void;
	onToday: () => void;
	onAddEvent: () => void;
}

const CalendarHeader = ({
	currentMonth,
	onPreviousMonth,
	onNextMonth,
	onToday,
	onAddEvent,
}: CalendarHeaderProps) => {
	return (
		<header className='flex items-center justify-between border-b border-myViolet md:px-6 py-2 lg:flex-none'>
			<h1 className='text-xs md:text-2xl font-semibold leading-6 text-white'>
				{format(currentMonth, 'MMMM yyyy')}
			</h1>
			<div className='flex items-center'>
				<div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
					<button
						onClick={onPreviousMonth}
						type='button'
						className='flex h-9 w-9 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50'
					>
						<span className='sr-only'>Previous month</span>
						<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
					</button>
					<button
						onClick={onToday}
						type='button'
						className='hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'
					>
						Today
					</button>
					<span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
					<button
						onClick={onNextMonth}
						type='button'
						className='flex h-9 w-9 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50'
					>
						<span className='sr-only'>Next month</span>
						<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
					</button>
				</div>
				<div className='ml-4 flex items-center'>
					<div className='h-6 w-px bg-gray-300' />
					<button
						onClick={onAddEvent}
						type='button'
						className='ml-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Add event
					</button>
				</div>
			</div>
		</header>
	);
};

export default CalendarHeader;
