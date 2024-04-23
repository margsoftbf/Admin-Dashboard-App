import React from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import PostInput from '@/components/Social/PostInput';
import GroupVideo from '@/components/Social/GroupVideo';
import Posts from '@/components/Social/Posts';
import { motion } from 'framer-motion';
import { containerAnimation, itemAnimation } from '@/data/data';
import Activity from '@/components/Social/Activity';
const SocialHomePage = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Social Network', href: '/social', current: true },
	];
	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Social Network
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='grid grid-cols-1 md:grid-cols-8 gap-5'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<motion.div
					className='md:col-span-5 lg:col-span-8 xl:col-span-5'
					variants={itemAnimation}
				>
					<PostInput />
					<GroupVideo />
					<Posts />
				</motion.div>
				<motion.div
					className='md:col-span-3 lg:col-span-8 xl:col-span-3'
					variants={itemAnimation}
				>
					<Activity />
				</motion.div>
			</motion.div>
		</MainLayout>
	);
};

export default SocialHomePage;
