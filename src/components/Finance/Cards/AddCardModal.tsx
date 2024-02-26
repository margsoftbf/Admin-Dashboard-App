import React, { useState } from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { Balance, CreditCard, Time } from '../../../../public/assets/svg';

interface ModalProps {
	open: boolean;
	handleClose: () => void;
}

const AddCardModal: React.FC<ModalProps> = ({ open, handleClose }) => {
	const [accountType, setAccountType] = useState('');
	const [formData, setFormData] = React.useState({
		cardNumber: '',
		expiryDate: '',
		balance: '',
		bitcoinAmount: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setAccountType(value);

		setFormData({
			cardNumber: '',
			expiryDate: '',
			balance: '',
			bitcoinAmount: '',
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		handleClose();
	};
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
					<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white w-80 lg:w-96 mx-auto p-4 text-center shadow-lg max-w-96 dark:bg-myPrimary flex flex-col items-center font-poppins'>
						<div className='flex flex-col items-center gap-2 my-3 '>
							<img src='/assets/other/add-card.png' alt='card picture' />
							<h2 className='text-white font-bold text-2xl'>Add new card</h2>
							<p className='text-myGray text-[14px]'>Write all info below.</p>
						</div>
						<form onSubmit={handleSubmit} className='space-y-8 mt-4 w-full'>
							<div className='flex flex-col gap-1'>
								<label
									htmlFor='accountType'
									className='block mb-2 text-sm font-medium text-white text-left ml-1'
								>
									Account Type
								</label>
								<select
									id='accountType'
									name='accountType'
									value={accountType}
									onChange={handleSelectChange}
									className=' border  text-sm rounded-lg  block w-full p-2.5 bg-myGrayDarker border-zinc-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
								>
									<option value='Mastercard'>Mastercard</option>
									<option value='Visa'>Visa</option>
									<option value='Paypal'>Paypal</option>
									<option value='Bitcoin'>Bitcoin Wallet</option>
								</select>
							</div>
							{accountType === 'Bitcoin' ? (
								<div>
									<label className='block mb-2 text-sm font-medium text-white text-left ml-1'>
										Your Bitcoin Amount
									</label>
									<div className='relative mb-6'>
										<input
											type='number'
											id='input-group-1'
											className='border  text-sm rounded-lg  block w-full p-2.5 bg-myGrayDarker border-zinc-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
											placeholder='Amount'
										/>
										<div className='absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none'>
											<CreditCard className='w-6 h-6 text-white font-bold stroke-2' />
										</div>
									</div>
								</div>
							) : (
								<>
									<div>
										<label
											htmlFor='cardNumber'
											className='block mb-2 text-sm font-medium text-white text-left ml-1'
										>
											Card Number
										</label>
										<div className='relative mb-6'>
											<input
												type='text'
												id='cardNumber'
												name='cardNumber'
												value={formData.cardNumber}
												onChange={handleInputChange}
												className='border  text-sm rounded-lg  block w-full p-2.5 bg-myGrayDarker border-zinc-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
											/>
											<div className='absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none'>
												<CreditCard className='w-6 h-6 text-white font-bold stroke-2' />
											</div>
										</div>
									</div>
									{accountType !== 'Paypal' && (
										<div>
											<label
												htmlFor='expiryDate'
												className='block mb-2 text-sm font-medium text-white text-left ml-1'
											>
												Expiry Date
											</label>
											<div className='relative mb-6'>
												<input
													type='text'
													id='expiryDate'
													name='expiryDate'
													value={formData.expiryDate}
													onChange={handleInputChange}
													className='border  text-sm rounded-lg  block w-full p-2.5 bg-myGrayDarker border-zinc-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
												/>
												<div className='absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none'>
													<Time className='w-6 h-6 text-white font-bold stroke-2' />
												</div>
											</div>
										</div>
									)}
									<div>
										<label
											htmlFor='balance'
											className='block mb-2 text-sm font-medium text-white text-left ml-1'
										>
											Current Balance
										</label>
										<div className='relative mb-6'>
											<input
												type='text'
												id='balance'
												name='balance'
												value={formData.balance}
												onChange={handleInputChange}
												className='border  text-sm rounded-lg  block w-full p-2.5 bg-myGrayDarker border-zinc-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
											/>
											<div className='absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none'>
												<Balance className='w-6 h-6 text-white font-bold stroke-2' />
											</div>
										</div>
									</div>
								</>
							)}
							<button
								type='submit'
								className='w-full hover:bg-myBlue bg-[#1d4ed8] text-white h-10 flex items-center justify-center px-4 rounded-md font-poppins text-[14px] font-medium duration-300 transition'
							>
								Add card
							</button>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default AddCardModal;
