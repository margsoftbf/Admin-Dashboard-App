import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import ToggleMenu from '@/components/ui/ToggleMenu';
import React, { useState } from 'react';
import { IconToggle } from '../../../public/assets/svg';
import { containerAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import YourCards from '@/components/Finance/Cards/YourCards';
import Transfers from '@/components/Finance/Cards/Transfers';

const Cards = () => {
	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Finance', href: '/finance', current: false },
		{ name: 'Cards', href: '/cards', current: true },
	];
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	const toggleMenu = (menuId: string) => {
		if (activeMenuId === menuId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(menuId);
		}
	};

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white font-bold'>
				Cards
			</h1>
			<BreadCrumb pathSegments={pathSegments} />

			<YourCards />
			<Transfers />
		</MainLayout>
	);
};

export default Cards;
