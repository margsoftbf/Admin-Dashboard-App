import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { InvoiceFormProps } from '../../types/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
const InvoiceForm = ({
	onSave,
	editedInvoice,
	onClearEdit,
	isOpen,
	closeModal,
}: InvoiceFormProps) => {
	const [formData, setFormData] = useState({
		clientName: editedInvoice?.clientName || '',
		emailAddress: editedInvoice?.emailAddress || '',
		streetAddress: editedInvoice?.streetAddress || '',
		city: editedInvoice?.city || '',
		state: editedInvoice?.state || '',
		zipCode: editedInvoice?.zipCode || '',
		amount: editedInvoice?.amount?.toString() || '0',
		status: editedInvoice?.status || 'Paid',
	});

	const [error, setError] = useState<Record<string, string>>({});
	const validateForm = (): boolean => {
		const newError: Record<string, string> = {};
		if (!formData.clientName) {
			newError.clientName = 'Name is required';
		}
		if (!formData.emailAddress) {
			newError.emailAddress = 'Email is required';
		}
		if (formData.amount === '0') {
			newError.amount = 'Amount is required';
		}
		if (Object.keys(newError).length > 0) {
			setError(newError);
			return false;
		}
		setError({});
		return true;
	};

	useEffect(() => {
		if (editedInvoice) {
			setFormData({
				clientName: editedInvoice.clientName,
				emailAddress: editedInvoice.emailAddress,
				streetAddress: editedInvoice.streetAddress,
				city: editedInvoice.city,
				state: editedInvoice.state,
				zipCode: editedInvoice.zipCode,
				amount: editedInvoice.amount.toString(),
				status: editedInvoice.status,
			});
		}
	}, [editedInvoice]);

	const handleSave = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		onSave({
			...formData,
			zipCode: Number(formData.zipCode),
			amount: Number(formData.amount),
		});
		setFormData({
			clientName: '',
			emailAddress: '',
			streetAddress: '',
			city: '',
			state: '',
			zipCode: 0,
			amount: '',
			status: 'Paid',
		});
		onClearEdit();
		closeModal();
	};

	return (
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
				<Box className='py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] rounded-lg w-80 xs:w-96 md:w-[600px] lg:mx-auto p-4 shadow-lg flex flex-col font-poppins overflow-y-auto bg-black justify-center items-center z-70'>
					<form className=' bg-lightGray p-2 rounded-md lg:max-w-[80%] max-h-[80%] overflow-auto'>
						<div className='border-b border-white/10 pb-12'>
							<h2 className='text-base font-semibold leading-7 text-white'>
								Bill To
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-400'>
								Use a permanent address where you can receive mail.
							</p>

							<div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
								<div className='col-span-2 lg:col-span-4'>
									<label
										htmlFor='first-name'
										className='block text-sm font-medium leading-6 text-white'
									>
										Client Name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='first-name'
											id='first-name'
											autoComplete='given-name'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
											onChange={(e) =>
												setFormData({ ...formData, clientName: e.target.value })
											}
											value={formData.clientName}
										/>
										{error.clientName && (
											<p className='text-xs font-semibold text-red-500 mt-1'>
												{error.clientName}
											</p>
										)}
									</div>
								</div>
								<div className='col-span-2 lg:col-span-4'>
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
											onChange={(e) =>
												setFormData({
													...formData,
													emailAddress: e.target.value,
												})
											}
											value={formData.emailAddress}
										/>
										{error.emailAddress && (
											<p className='text-xs font-semibold text-red-500 mt-1'>
												{error.emailAddress}
											</p>
										)}
									</div>
								</div>
								<div className='col-span-2 lg:col-span-2'>
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
											onChange={(e) =>
												setFormData({
													...formData,
													streetAddress: e.target.value,
												})
											}
											value={formData.streetAddress}
										/>
									</div>
								</div>

								<div className='col-span-2 lg:col-span-2'>
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
											onChange={(e) =>
												setFormData({ ...formData, city: e.target.value })
											}
											value={formData.city}
										/>
									</div>
								</div>

								<div className='col-span-2 lg:col-span-2'>
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
											onChange={(e) =>
												setFormData({ ...formData, state: e.target.value })
											}
											value={formData.state}
										/>
									</div>
								</div>

								<div className='col-span-2 lg:col-span-2'>
									<label
										htmlFor='postal-code'
										className='block text-sm font-medium leading-6 text-white'
									>
										ZIP / Postal code
									</label>
									<div className='mt-2'>
										<input
											type='number'
											name='postal-code'
											id='postal-code'
											autoComplete='postal-code'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
											onChange={(e) =>
												setFormData({ ...formData, zipCode: e.target.value })
											}
											value={formData.zipCode}
										/>
									</div>
								</div>

								<div className='col-span-2 lg:col-span-2'>
									<label
										htmlFor='country'
										className='block text-sm font-medium leading-6 text-white'
									>
										Status
									</label>
									<div className='mt-2'>
										<select
											id='status'
											name='status'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
											onChange={(e) =>
												setFormData({ ...formData, status: e.target.value })
											}
											value={formData.status}
										>
											<option>Paid</option>
											<option>Pending</option>
											<option>Cancelled</option>
										</select>
									</div>
								</div>
								<div className='col-span-2 lg:col-span-2'>
									<label
										htmlFor='amount'
										className='block text-sm font-medium leading-6 text-white'
									>
										Amount
									</label>
									<div className='mt-2'>
										<input
											type='number'
											name='amount'
											id='amount'
											className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
											onChange={(e) =>
												setFormData({ ...formData, amount: e.target.value })
											}
											value={formData.amount}
										/>
										{error.amount && (
											<p className='text-xs font-semibold text-red-500 mt-1'>
												{error.amount}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className='mt-6 flex items-center justify-end gap-x-6'>
							<button
								onClick={closeModal}
								type='button'
								className='rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500'
							>
								Cancel
							</button>
							<button
								onClick={handleSave}
								type='submit'
								className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								{editedInvoice ? 'Update Invoice' : 'Add Invoice'}
							</button>
						</div>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default InvoiceForm;
