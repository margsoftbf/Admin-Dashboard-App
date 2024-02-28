import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { TransactionDetails } from '@/types/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IoMdPerson } from 'react-icons/io';
import { BsBank2 } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { MdOutlineFileDownload, MdKeyboardReturn } from 'react-icons/md';
interface ModalProps {
	open: boolean;
	handleClose: () => void;
	transaction: TransactionDetails | null;
}

const TransactionDetailsModal: React.FC<ModalProps> = ({
	open,
	handleClose,
	transaction,
}) => {
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
					<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-80 lg:w-[500px] mx-auto p-4 text-center shadow-lg bg-myPrimary flex flex-col items-center font-poppins'>
						{transaction && (
							<div className='w-full flex flex-col gap-2 my-1'>
								<div className='flex flex-row w-full items-center justify-between text-myGray font-semibold mb-6'>
									<p>Transactions Details</p>
									<XMarkIcon
										className='w-5 h-5 stroke-2 cursor-pointer'
										onClick={handleClose}
									/>
								</div>
								<div className='flex flex-row items-center gap-3 text-white mb-6'>
									<div>
										<div className='w-20 h-20 flex bg-white items-center justify-center p-1.5 rounded-full overflow-hidden'>
											<img
												src={transaction.img}
												alt={`${transaction.name} picture`}
												className='w-16 h-16'
											/>
										</div>
									</div>
									<div className='flex flex-col text-gray-300 text-[14px]'>
										<p className=' text-left'>
											Transfer{' '}
											<span className='text-base font-semibold text-white'>
												${transaction.price.toFixed(2)}
											</span>{' '}
											to {transaction.name}
										</p>
										<p className='text-left'>{transaction.date}</p>
									</div>
								</div>
								<div className='flex items-end justify-between mb-6 text-myGray '>
									<div className='flex items-start gap-x-3'>
										<div className='w-12 h-12 flex items-center justify-center rounded-full bg-myGrayDarker flex-shrink-0'>
											<IoMdPerson className='text-white w-5 h-5' />
										</div>
										<div className='flex flex-col gap-y-1 text-left'>
											<p className='text-sm leading-4 font-semibold text-white mb-2'>
												Send to
											</p>
											<p className='text-sm leading-4'>
												<span className='text-gray-200'>Name: </span>{' '}
												{transaction.name}
											</p>
											<p className='text-sm leading-4'>
												<span className='text-gray-200'>Email: </span>{' '}
												{transaction.recipientInfo.email}
											</p>
											<p className='text-sm leading-4'>
												<span className='text-gray-200'>Phone: </span>{' '}
												{transaction.recipientInfo.phone}
											</p>
										</div>
									</div>
									<div className='hidden lg:flex text-xs  py-2 rounded-lg px-3 bg-myGrayDarker max-w-24 text-myYellow'>
										$ {transaction.price.toFixed(2)}
									</div>
								</div>
								<div className='flex items-end justify-between mb-6 text-myGray '>
									<div className='flex items-start gap-x-3'>
										<div className='w-12 h-12 flex items-center justify-center rounded-full bg-myGrayDarker flex-shrink-0'>
											<BsBank2 className='text-white w-5 h-5' />
										</div>
										<div className='flex flex-col gap-y-1 text-left'>
											<p className='text-sm leading-4 font-semibold text-white mb-2'>
												Bank details
											</p>
											<p className='text-sm leading-4'>
												<span className='text-gray-200'>Name: </span>{' '}
												{transaction.bankDetails.bankName}
											</p>
											<p className='text-sm leading-4 line-clamp-1 pr-12'>
												<span className='text-gray-200'>Address: </span>{' '}
												{transaction.bankDetails.bankAddress}
											</p>
											<p className='text-sm leading-4'>
												<span className='text-gray-200'>Account number: </span>
												{transaction.bankDetails.accountNumber}
											</p>
										</div>
									</div>
								</div>
								<div className='w-full bg-myGray/50 h-[1px] mb-2'></div>
								<div className='flex items-center justify-between flex-wrap gap-3 text-xs font-poppins text-white font-medium'>
									<button className='px-6 py-3 bg-myGrayDarker rounded-lg flex items-center  gap-2 hover:bg-zinc-900 transition duration-300'>
										Print <FiPrinter className='w-4 h-4' />
									</button>
									<button className='px-4 py-3 bg-myGrayDarker rounded-lg flex items-center  gap-2 hover:bg-zinc-900 transition duration-300'>
										Download <MdOutlineFileDownload className='w-4 h-4' />
									</button>
									<button className='px-6 py-3 bg-myGrayDarker rounded-lg flex items-center  gap-2 hover:bg-zinc-900 transition duration-300'>
										Refund <MdKeyboardReturn className='w-4 h-4' />
									</button>
								</div>
							</div>
						)}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default TransactionDetailsModal;
