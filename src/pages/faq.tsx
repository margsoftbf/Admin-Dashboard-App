import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { faqs } from '../data/data';

const FaqHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Faq', href: '/faq', current: true },
	];
	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Faq
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins overflow-x-auto'>
				<div className='space-y-6 divide-y divide-white/10'>
					{faqs.map((faq) => (
						<Disclosure as='div' key={faq.question} className='pt-6'>
							{({ open }) => (
								<>
									<dt>
										<Disclosure.Button className='flex w-full items-start justify-between text-left text-white'>
											<span className='text-base font-semibold leading-7'>
												{faq.question}
											</span>
											<span className='ml-6 flex h-7 items-center'>
												{open ? (
													<MinusSmallIcon
														className='h-6 w-6'
														aria-hidden='true'
													/>
												) : (
													<PlusSmallIcon
														className='h-6 w-6'
														aria-hidden='true'
													/>
												)}
											</span>
										</Disclosure.Button>
									</dt>
									<Disclosure.Panel as='dd' className='mt-2 pr-12'>
										<p className='text-base leading-7 text-gray-300'>
											{faq.answer}
										</p>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default FaqHomePage;
