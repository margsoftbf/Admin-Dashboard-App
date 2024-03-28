import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ModalProps } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';

const CalendarModal = ({ isOpen, closeModal, setMeetings }: ModalProps) => {
	const [newMeeting, setNewMeeting] = useState({
		date: '',
		time: '',
		name: '',
		title: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewMeeting({
			...newMeeting,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!newMeeting.name ||
			!newMeeting.title ||
			!newMeeting.date ||
			!newMeeting.time
		) {
			alert('Please fill in all fields.');
			return;
		}

		setMeetings((prevMeetings) => [
			...prevMeetings,
			{
				...newMeeting,
				id: uuidv4(),
			},
		]);
		setNewMeeting({
			date: '',
			time: '',
			name: '',
			title: '',
		});
		closeModal();
	};

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={isOpen}
				onClose={closeModal}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={isOpen}>
					<Box className='py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] rounded-lg w-80 xs:w-96 md:w-[600px] lg:mx-auto p-4 shadow-lg flex flex-col font-poppins overflow-y-auto bg-white justify-center items-center z-70'>
						<XMarkIcon
							className='w-7 h-7 text-white absolute right-2 top-2 cursor-pointer'
							onClick={closeModal}
						/>
						<form onSubmit={handleSubmit}>
							<div className='space-y-12 sm:space-y-16'>
								<div>
									<h2 className='text-base font-semibold leading-7 text-gray-900'>
										Personal Information
									</h2>
									<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-600'>
										Use a full info about visit.
									</p>

									<div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
										<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
											<label
												htmlFor='name'
												className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
											>
												Name
											</label>
											<div className='mt-2 sm:col-span-2 sm:mt-0'>
												<input
													type='text'
													name='name'
													value={newMeeting.name || ''}
													onChange={handleInputChange}
													maxLength={20}
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
												/>
											</div>
										</div>

										<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
											<label
												htmlFor='title'
												className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
											>
												Reason for visit
											</label>
											<div className='mt-2 sm:col-span-2 sm:mt-0'>
												<input
													type='text'
													name='title'
													value={newMeeting.title || ''}
													onChange={handleInputChange}
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
										<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
											<label
												htmlFor='date'
												className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
											>
												Date
											</label>
											<div className='mt-2 sm:col-span-2 sm:mt-0'>
												<input
													type='date'
													name='date'
													value={newMeeting.date || ''}
													onChange={handleInputChange}
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
										<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
											<label
												htmlFor='time'
												className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
											>
												Hour
											</label>
											<div className='mt-2 sm:col-span-2 sm:mt-0'>
												<input
													type='time'
													name='time'
													value={newMeeting.time || ''}
													onChange={handleInputChange}
													className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
									</div>
								</div>

								<div>
									<h2 className='text-base font-semibold leading-7 text-gray-900'>
										Notifications
									</h2>
									<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-600'>
										We'll always let you know about important changes.
									</p>
								</div>
							</div>

							<div className='mt-6 flex items-center justify-end gap-x-6'>
								<button
									onClick={closeModal}
									type='button'
									className='text-sm font-semibold leading-6 text-gray-900'
								>
									Cancel
								</button>
								<button
									type='submit'
									className='inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Add Visit
								</button>
							</div>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CalendarModal;
