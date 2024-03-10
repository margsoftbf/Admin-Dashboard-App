import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { containerAnimation, itemAnimation } from '@/data/data';
import MailboxNavigation from '@/components/Mailbox/MailboxNavigation';
import Mails from '@/components/Mailbox/Mails';
const MailboxHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Mailbox', href: '/mailbox', current: true },
	];

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Mailbox
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='grid grid-cols-1 md:grid-cols-6 gap-5'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<motion.div className='md:col-span-1' variants={itemAnimation}>
					<MailboxNavigation />
				</motion.div>
				<motion.div className='md:col-span-5' variants={itemAnimation}>
                    <Mails />
				</motion.div>
			</motion.div>
		</MainLayout>
	);
};

export default MailboxHomePage;
