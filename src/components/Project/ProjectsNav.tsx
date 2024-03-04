import Button from '@/components/ui/Button';
import { containerAnimation } from '@/data/data';
import {
	CheckCircleIcon,
	ClockIcon,
	Bars3Icon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AddProjectModal from './AddProjectModal';

interface ProjectsNavProps {
	filter: string;
	setFilter: (filter: string) => void;
}

const ProjectsNav = ({ filter, setFilter }: ProjectsNavProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<motion.div
				className='flex flex-col md:flex-row justify-between gap-3 rounded-lg border border-[#313442] bg-myPrimary py-4 flex-1 px-5 font-poppins text-white mb-6'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<div className='hidden md:flex items-center justify-center gap-6 lg:gap-8 text-[14px]'>
					<button
						className='flex gap-1.5 items-center hover:text-myVioletLight'
						onClick={() => setFilter('All')}
					>
						<Bars3Icon className='w-5 h-5' />
						All
					</button>
					<button
						className='flex gap-1.5 items-center hover:text-myVioletLight'
						onClick={() => setFilter('In progress')}
					>
						<ClockIcon className='w-5 h-5' />
						In progress
					</button>
					<button
						className='flex gap-1.5 items-center hover:text-myVioletLight'
						onClick={() => setFilter('Late')}
					>
						<ExclamationTriangleIcon className='w-5 h-5' />
						Late
					</button>
					<button
						className='flex gap-1.5 items-center hover:text-myVioletLight'
						onClick={() => setFilter('Done')}
					>
						<CheckCircleIcon className='w-5 h-5' />
						Done
					</button>
				</div>
				<Button className='bg-myViolet hover:bg-myIndigo' onClick={openModal}>
					+ Add new project
				</Button>
			</motion.div>
			<AddProjectModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
};

export default ProjectsNav;
