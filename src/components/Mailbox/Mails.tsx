import MailsSearchAndPagination from './MailsSearchAndPagination';
import EmailCategoriesHeader from './EmailCategoriesHeader';
import MailsList from './MailsList';

const Mails = () => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-3 px-5  mb-6 text-white font-poppins overflow-x-auto'>
			<MailsSearchAndPagination />
			<EmailCategoriesHeader />
			<MailsList />
		</div>
	);
};

export default Mails;
