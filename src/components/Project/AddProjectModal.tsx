import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AddProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const AddProjectModal = ({ isOpen, onClose }: AddProjectModalProps) => {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={isOpen}
				onClose={onClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={isOpen}>
					<Box className='py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto rounded-lg bg-white w-80 xs:w-96 md:w-[600px] lg:mx-auto p-4 shadow-lg  dark:bg-myPrimary flex flex-col font-poppins overflow-y-auto'>
						<XMarkIcon
							className='w-7 h-7 text-white absolute right-2 top-2 cursor-pointer'
							onClick={onClose}
						/>
						<form>
							<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
								<div className='col-span-full'>
									<label
										htmlFor='project-name'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-name'
											id='project-name'
											autoComplete='given-name'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='project-author'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project Author
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-author'
											id='project-author'
											autoComplete='family-name'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='project-description'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project Description
									</label>
									<div className='mt-2'>
										<textarea
											id='project-description'
											name='project-description'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
								<div className='col-span-full'>
									<label
										htmlFor='project-member'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project Members
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-member'
											id='project-member'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2 sm:col-start-1'>
									<label
										htmlFor='project-start'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project Start
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-start'
											id='project-start'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										htmlFor='project-end'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project End
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-end'
											id='project-end'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										htmlFor='project-status'
										className='block text-sm font-medium leading-6 text-white'
									>
										Project Status
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='project-status'
											id='project-status'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
							</div>

							<div className='mt-6 flex items-center justify-end gap-x-6 mb-2'>
								<button
									type='button'
									className='text-sm font-semibold leading-6 text-white'
									onClick={onClose}
								>
									Cancel
								</button>
								<button
									type='submit'
									className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
								>
									Add
								</button>
							</div>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default AddProjectModal;
