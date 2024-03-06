import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { PlusSmallIcon } from '@heroicons/react/20/solid';
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
			const newInvoice: InvoiceDataProps = { id: newInvoiceId, ...invoice };
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
			<div className='w-full flex justify-center'>
				<motion.div
					className='rounded-xl bg-myPrimary text-white  flex flex-col font-poppins relative overflow-hidden w-full max-w-[900px] p-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
				>
					<div className='flex md:items-center justify-between mb-4'>
						<div className='min-w-0 flex-1'>
							<h2 className='text-3xl font-bold leading-7 text-white sm:truncate  sm:tracking-tight'>
								Invoices
							</h2>
						</div>
						<div className='flex md:ml-4'>
							<button
								onClick={openModal}
								type='button'
								className='ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								<PlusSmallIcon className='-ml-1.5 h-5 w-5' aria-hidden='true' />
								New invoice
							</button>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<div>
							{invoices.map((invoice, index) => (
								<motion.div
									key={invoice.id}
									initial={{ opacity: 0, y: -50 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: { delay: index * 0.2 },
									}}
									exit={{ opacity: 0, y: 50 }}
									transition={{ duration: 0.5 }}
								>
									<InvoiceCard
										key={invoice.id}
										invoice={invoice}
										onEdit={handleEditInvoice}
										onDelete={handleDeleteInvoice}
									/>
								</motion.div>
							))}
						</div>
						<InvoiceForm
							isOpen={modalOpen}
							closeModal={closeModal}
							onSave={handleSaveInvoice}
							editedInvoice={editedInvoice}
							onClearEdit={handleClearEdit}
						/>
					</div>
				</motion.div>
			</div>
		</MainLayout>
	);
};

export default InvoicesHomePage;
