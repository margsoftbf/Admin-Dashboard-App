import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { ordersList, containerAnimation} from '@/data/data';
import { useRouter } from 'next/router';
import CustomerRow from '@/components/Ecommerce/CustomerList/CustomerRow';
const CustomerList = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{ name: 'Customer List', href: '/ecommerce/customer-list', current: true },
	];

	const router = useRouter();
	const handleRowClick = (orderId: string) => {
		router.push(`/ecommerce/customer-review/${orderId}`);
	};

	const getOnlineStatusColor = (status: boolean) => {
		switch (status) {
			case true:
				return 'bg-myGreen';
			default:
				return 'bg-gray-400';
		}
	};
	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Customer List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins overflow-x-auto'>
				<motion.table
					className='w-full table-auto mt-2 font-poppins'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
							<th className='text-left pl-2'>
								<label htmlFor='selectAllCheckbox' className='sr-only'>
									Select all customers
								</label>
								<input
									id='selectAllCheckbox'
									className='rounded border-2 w-4 h-4 mb-2'
									type='checkbox'
								/>
							</th>
							<th className='text-left px-4'>Name</th>
							<th className='text-left px-4'>Email</th>
							<th className='text-left px-4'>Phone</th>
							<th className='text-left px-4'>Billing Address</th>
							<th className='text-left px-4'>Status</th>
							<th className='text-left px-4'>Joined</th>
							<th className='text-right px-4'>Actions</th>
						</tr>
					</thead>
					{ordersList.map((order) => (
						<CustomerRow
							key={order.id}
							order={order}
							onRowClick={handleRowClick}
							getOnlineStatusColor={getOnlineStatusColor}
						/>
					))}				
				</motion.table>
			</div>
			;
		</MainLayout>
	);
};

export default CustomerList;
