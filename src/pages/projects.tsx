import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import { projectsManage, containerAnimation, itemAnimation } from '@/data/data';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectsNav from '@/components/Project/ProjectsNav';
import ProjectCard from '@/components/Project/ProjectCard';
const pathSegments = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Project Manage', href: '/projects', current: true },
];

const ProjectsHomePage = () => {
	const [filter, setFilter] = useState('All');

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'In progress':
				return '#EAB308';
			case 'Done':
				return '#22c55e';
			case 'Late':
				return '#ef4444';
			default:
				return '#6b7280';
		}
	};

	const filteredProject = projectsManage.filter((project) => {
		if (filter === 'All') {
			return true;
		}
		return project.state === filter;
	});
	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Project Manage
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<ProjectsNav filter={filter} setFilter={setFilter} />
			<motion.div
				className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				{filteredProject.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						getStatusColor={getStatusColor}
					/>
				))}
			</motion.div>
		</MainLayout>
	);
};

export default ProjectsHomePage;
