import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { faqTopic, faqs } from '../data/data';
import React, { useState } from 'react';
import Topic from '@/components/Faq/Topic';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';

const FaqHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Faq', href: '/faq', current: true },
	];
	const [activeId, setActiveId] = useState<number | null>(1);

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: number
	) => {
		e.preventDefault();
		setActiveId(id);
	};

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Faq
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='grid grid-cols-1 md:grid-cols-8 gap-5'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<motion.div
					className='md:col-span-2 lg:col-span-8 xl:col-span-2'
					variants={itemAnimation}
				>
					<div className='flex flex-col'>
						<Topic
							faqTopic={faqTopic}
							activeId={activeId}
							handleLinkClick={handleLinkClick}
						/>

						<div className='bg-gray-500'>B</div>
					</div>
				</motion.div>
				<motion.div
					className='md:col-span-6 lg:col-span-8 xl:col-span-6'
					variants={itemAnimation}
				>
					<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-5 px-5  mb-6 text-white font-poppins overflow-x-auto'>
						<div className='space-y-6 divide-y divide-white/10'>
							{faqs.map((faq) => (
								<Disclosure as='div' key={faq.question} className='pt-6'>
									{({ open }) => (
										<>
											<div>
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
											</div>
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
				</motion.div>
			</motion.div>
		</MainLayout>
	);
};

export default FaqHomePage;
