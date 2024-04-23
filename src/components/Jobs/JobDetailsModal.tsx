import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { JobTypes } from '@/types/types';

interface ModalProps {
	open: boolean;
	handleClose: () => void;
	job: JobTypes | null;
}

const JobDetailsModal = ({ open, handleClose, job }: ModalProps) => {
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
					<Box className='py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto rounded-lg bg-white w-80 xs:w-96 md:w-[600px] lg:mx-auto p-12 shadow-lg  dark:bg-myPrimary flex flex-col font-poppins overflow-y-auto'>
						<XMarkIcon
							className='w-6 h-6 text-white absolute right-2 top-2 cursor-pointer'
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
						<div className='flex flex-col w-full my-2 gap-6 text-gray-300 text-[14px]'>
							<div className='flex flex-col gap-1'>
								<p className='font-semibold'>Job Description:</p>
								<p className='text-xs tracking-wide leading-4'>
									{job?.jobDescription}
								</p>
							</div>
							<div className='flex flex-col gap-1'>
								<p className='font-semibold'>Qualifications:</p>
								<ul className='list-disc list-inside '>
									{job?.qualifications.map((qualification, index) => (
										<li key={index} className='text-xs tracking-wide leading-4'>
											{qualification}
										</li>
									))}
								</ul>
							</div>
							<div className='flex flex-col gap-1'>
								<p className='font-semibold'>Perks:</p>
								<ul className='list-disc list-inside '>
									{job?.perks.map((perk, index) => (
										<li key={index} className='text-xs tracking-wide leading-4'>
											{perk}
										</li>
									))}
								</ul>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default JobDetailsModal;
