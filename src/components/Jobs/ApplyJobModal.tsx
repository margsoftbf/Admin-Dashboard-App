import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { XMarkIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { JobTypes } from '@/types/types';
interface ModalProps {
	open: boolean;
	handleClose: () => void;
	job: JobTypes | null;
}

const ApplyJobModal: React.FC<ModalProps> = ({ open, handleClose, job }) => {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white w-80 xs:w-96 md:w-[600px] lg:mx-auto p-4 shadow-lg  dark:bg-myPrimary flex flex-col font-poppins'>
						<XMarkIcon
							className='w-7 h-7 text-white absolute right-2 top-2 cursor-pointer'
							onClick={handleClose}
						/>
						<div className='flex flex-row items-center gap-4 w-full my-4 pt-4'>
							<div className='w-10 h-10 bg-white flex-shrink-0 p-1.5 rounded-full overflow-hidden'>
								<img src={job?.img} alt='brand logo' />
							</div>
							<div className='flex flex-col'>
								<p className='font-semibold text-white mb-1 text-[14px]'>
									{job?.positionName}
								</p>
								<p className='text-left text-myGray mb-1 text-xs'>
									{job?.company}
								</p>
							</div>
						</div>
						<form>
							<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
								<div className='sm:col-span-3'>
									<label
										htmlFor='first-name'
										className='block text-sm font-medium leading-6 text-white'
									>
										First name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='first-name'
											id='first-name'
											autoComplete='given-name'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-3'>
									<label
										htmlFor='last-name'
										className='block text-sm font-medium leading-6 text-white'
									>
										Last name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='last-name'
											id='last-name'
											autoComplete='family-name'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='email'
										className='block text-sm font-medium leading-6 text-white'
									>
										Email address
									</label>
									<div className='mt-2'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='cover-photo'
										className='block text-sm font-medium leading-6 text-white'
									>
										Your CV
									</label>
									<div className='mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10'>
										<div className='text-center'>
											<DocumentIcon
												className='mx-auto h-12 w-12 text-gray-500'
												aria-hidden='true'
											/>
											<div className='mt-4 flex text-sm leading-6 text-gray-400'>
												<label
													htmlFor='file-upload'
													className='relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500'
												>
													<span>Upload a file</span>
													<input
														id='file-upload'
														name='file-upload'
														type='file'
														className='sr-only'
													/>
												</label>
												<p className='pl-1'>or drag and drop</p>
											</div>
											<p className='text-xs leading-5 text-gray-400'>
												PDF up to 10MB
											</p>
										</div>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='street-address'
										className='block text-sm font-medium leading-6 text-white'
									>
										Street address
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='street-address'
											id='street-address'
											autoComplete='street-address'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2 sm:col-start-1'>
									<label
										htmlFor='city'
										className='block text-sm font-medium leading-6 text-white'
									>
										City
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='city'
											id='city'
											autoComplete='address-level2'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										htmlFor='region'
										className='block text-sm font-medium leading-6 text-white'
									>
										State / Province
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='region'
											id='region'
											autoComplete='address-level1'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										htmlFor='postal-code'
										className='block text-sm font-medium leading-6 text-white'
									>
										ZIP / Postal code
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='postal-code'
											id='postal-code'
											autoComplete='postal-code'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
							</div>

							<div className='mt-6 flex items-center justify-end gap-x-6'>
								<button
									type='button'
									className='text-sm font-semibold leading-6 text-white'
								>
									Cancel
								</button>
								<button
									type='submit'
									className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
								>
									Apply
								</button>
							</div>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default ApplyJobModal;
