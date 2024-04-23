import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from 'uuid';
import { InvoiceDataProps } from '../types/types';
import { invoicesData } from '@/data/data';
import InvoiceCard from '@/components/Invoices/InvoiceCard';
import InvoiceForm from '@/components/Invoices/InvoiceForm';

const pathSegments = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Invoices', href: '/invoices', current: true },
];

const InvoicesHomePage = () => {
	const [modalOpen, setOpenModal] = useState(false);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);
	const [invoices, setInvoices] = useState<InvoiceDataProps[]>([
		...invoicesData,
	]);
	const [editedInvoice, setEditedInvoice] = useState<
		InvoiceDataProps | undefined
	>(undefined);
	const handleSaveInvoice = (invoice: {
		clientName: string;
		emailAddress: string;
		streetAddress: string;
		city: string;
		state: string;
		zipCode: number;
		amount: number;
		status: string;
	}) => {
		if (editedInvoice) {
			setInvoices((prevInvoices) =>
				prevInvoices.map((prevInvoice) =>
					prevInvoice.id === editedInvoice.id
						? { ...prevInvoice, ...invoice }
						: prevInvoice
				)
			);
			setEditedInvoice(undefined);
		} else {
			const newInvoiceId = uuidv4();
			const newInvoice: InvoiceDataProps = {
				id: newInvoiceId,
				avatar: '',
				avatarAlt: `${invoice.clientName} photo`,
				...invoice,
			};
			setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
		}
	};

	const handleEditInvoice = (id: string) => {
		const invoiceToEdit = invoices.find((invoice) => invoice.id === id);
		if (invoiceToEdit) {
			openModal();
			setEditedInvoice(invoiceToEdit);
		}
	};

	const handleDeleteInvoice = (id: string) => {
		setInvoices((prevInvoices) =>
			prevInvoices.filter((invoice) => invoice.id !== id)
		);
		setEditedInvoice(undefined);
	};

	const handleClearEdit = () => {
		setEditedInvoice(undefined);
	};

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Invoices
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 overflow-x-auto'>
				<motion.div
					className='rounded-xl bg-myPrimary text-white  flex flex-col font-poppins relative overflow-x-auto w-full'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
				>
					<div className='flex md:items-center justify-end my-2'>
						<div className='flex md:ml-4'>
							<button
								onClick={openModal}
								type='button'
								className='ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								<PlusIcon className='-ml-1.5 h-5 w-5' aria-hidden='true' />
								New invoice
							</button>
						</div>
					</div>
					<table className='w-full table-auto my-4 font-poppins'>
						<thead className='w-full h-12'>
							<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
								<th className='text-left pl-2 '>
									<label htmlFor='selectAll' className='sr-only'>
										Select All
									</label>
									<input
										id='selectAll'
										className='rounded border-2 w-4 h-4'
										type='checkbox'
									/>
								</th>
								<th className='text-left px-4'>Invoice number</th>
								<th className='text-left px-4'>Amount</th>
								<th className='text-left px-4'>Name</th>
								<th className='text-left px-4'>Email</th>
								<th className='text-left px-4'>Address</th>
								<th className='text-left px-4'>Status</th>
								<th className='text-right px-4'>Action</th>
							</tr>
						</thead>
						<tbody>
							{invoices.length === 0 ? (
								<tr>
									<td className='font-medium pt-4'>No invoices</td>
								</tr>
							) : (
								invoices.map((invoice, index) => (
									<InvoiceCard
										key={invoice.id}
										invoice={invoice}
										avatar={invoice.avatar}
										index={index}
										onEdit={handleEditInvoice}
										onDelete={handleDeleteInvoice}
									/>
								))
							)}
						</tbody>
					</table>
				</motion.div>
				<InvoiceForm
					isOpen={modalOpen}
					closeModal={closeModal}
					onSave={handleSaveInvoice}
					editedInvoice={editedInvoice}
					onClearEdit={handleClearEdit}
				/>
			</div>
		</MainLayout>
	);
};

export default InvoicesHomePage;
