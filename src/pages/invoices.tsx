import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';

const pathSegments = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Invoices', href: '/invoices', current: true },
];

const InvoicesHomePage = () => {
	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Invoices
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div>ss</div>
		</MainLayout>
	);
};

export default InvoicesHomePage;
