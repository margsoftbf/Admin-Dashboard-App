import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { initialMeetings } from '@/data/data';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
import MeetingComponent from '../components/Calendar/Meeting';
import { Meeting } from '../types/types';
import CalendarModal from '@/components/Calendar/CalendarModal';
import CalendarHeader from '@/components/Calendar/CalendarHeader';

const pathSegments = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Calendar', href: '/calendar', current: true },
];
const CalendarHomePage = () => {
	const [modalOpen, setOpenModal] = useState(false);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);
	const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);

	let today = startOfToday();
	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

	let days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
	});

	function previousMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
		setSelectedDay(firstDayNextMonth);
	}

	function nextMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
		setSelectedDay(firstDayNextMonth);
	}

	let selectedDayMeetings = meetings.filter((meeting) =>
		isSameDay(parseISO(meeting.date), selectedDay)
	);

	const handleDelete = (meetingId: string) => {
		const updatedMeetings = meetings.filter(
			(meeting) => meeting.id !== meetingId
		);
		setMeetings(updatedMeetings);
	};

	useEffect(() => {
		let newFirstDayCurrentMonth = parse(
			format(selectedDay, 'MMM-yyyy'),
			'MMM-yyyy',
			new Date()
		);
		setCurrentMonth(format(newFirstDayCurrentMonth, 'MMM-yyyy'));
	}, [selectedDay]);

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Calendar
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='lg:flex lg:h-full lg:flex-col flex flex-col gap-3 rounded-lg border border-[#313442] bg-myPrimary pb-10 flex-1 px-5'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			>
				<CalendarModal
					isOpen={modalOpen}
					closeModal={closeModal}
					setMeetings={setMeetings}
				/>
				<CalendarHeader
					currentMonth={firstDayCurrentMonth}
					onPreviousMonth={previousMonth}
					onNextMonth={nextMonth}
					onAddEvent={openModal}
					onToday={() => setSelectedDay(today)}
				/>
				<div className='bg-[#282a33] text-black md:grid md:grid-cols-1 rounded-md'>
					<div>
						<div className='grid grid-cols-7 gap-px bg-myViolet text-center text-xs font-semibold leading-6 text-white lg:flex-none rounded-t-md'>
							<div className=' py-2'>
								S<span className='sr-only sm:not-sr-only'>un</span>
							</div>
							<div className=' py-2'>
								M<span className='sr-only sm:not-sr-only'>on</span>
							</div>
							<div className=' py-2'>
								T<span className='sr-only sm:not-sr-only'>ue</span>
							</div>
							<div className=' py-2'>
								W<span className='sr-only sm:not-sr-only'>ed</span>
							</div>
							<div className=' py-2'>
								T<span className='sr-only sm:not-sr-only'>hu</span>
							</div>
							<div className=' py-2'>
								F<span className='sr-only sm:not-sr-only'>ri</span>
							</div>
							<div className=' py-2'>
								S<span className='sr-only sm:not-sr-only'>at</span>
							</div>
						</div>
						<div className=''>
							<div className='grid grid-cols-7 text-sm'>
								{days.map((day, dayIdx) => (
									<div
										key={day.toString()}
										className={`
									${dayIdx === 0 && colStartClasses[getDay(day)]}
									py-4 md:py-6 lg:py-8 border border-myGray  relative
									${
										!isEqual(day, selectedDay) &&
										!isToday(day) &&
										!isSameMonth(day, firstDayCurrentMonth) &&
										'bg-zinc-900'
									}
								  `}
									>
										<button
											type='button'
											onClick={() => setSelectedDay(day)}
											className={`
  mx-auto flex h-8 w-8 items-center justify-center rounded-md
  ${isEqual(day, selectedDay) && 'font-semibold text-white '}
  ${
		isToday(day)
			? 'bg-myViolet text-white'
			: isEqual(day, selectedDay)
			? 'bg-gray-500'
			: ''
	}
  ${
		!isEqual(day, selectedDay) && isSameMonth(day, firstDayCurrentMonth)
			? 'text-white'
			: ''
	}
  ${
		!isEqual(day, selectedDay) && !isSameMonth(day, firstDayCurrentMonth)
			? 'text-gray-300'
			: ''
	}
  ${!isEqual(day, selectedDay) ? 'hover:bg-gray-400 hover:text-white' : ''}
`}
										>
											<time dateTime={format(day, 'yyyy-MM-dd')}>
												{format(day, 'd')}
											</time>
										</button>
										<div className='w-3 h-1 mx-auto mt-1'>
											{meetings.some((meeting) =>
												isSameDay(parseISO(meeting.date), day)
											) && (
												<div className='w-3 h-3 rounded-full bg-myYellow'></div>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<section className='mt-6'>
						<h2 className='text-base font-sans font-semibold text-center leading-6 text-white'>
							Schedule for{' '}
							<time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
								{format(selectedDay, 'MMM dd, yyy')}
							</time>
						</h2>
						<ol className='my-4 pb-1 space-y-1 text-sm leading-6 text-gray-300'>
							{selectedDayMeetings.length > 0 ? (
								selectedDayMeetings.map((meeting) => (
									<MeetingComponent
										meeting={meeting}
										key={meeting.id}
										onDelete={handleDelete}
									/>
								))
							) : (
								<p className='mb-4 text-center text-white'>
									No meetings for today.
								</p>
							)}
						</ol>
					</section>
				</div>
			</motion.div>
		</MainLayout>
	);
};

let colStartClasses = [
	'col-start-1',
	'col-start-2',
	'col-start-3',
	'col-start-4',
	'col-start-5',
	'col-start-6',
	'col-start-7',
];

export default CalendarHomePage;
