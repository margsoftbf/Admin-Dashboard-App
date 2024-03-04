import React from 'react';
import { motion } from 'framer-motion';
import { itemAnimation } from '@/data/data';

interface ProjectCardProps {
	project: {
		id: number;
		title: string;
		state: string;
		manageAvatar: string;
		manageName: string;
		startDate: string;
		endDate: string;
		task: number;
		member: string[];
	};
	getStatusColor: (status: string) => string;
}

const ProjectCard = ({ project, getStatusColor }: ProjectCardProps) => {
	return (
		<motion.div
			key={project.id}
			className='rounded-lg border border-[#313442] bg-myPrimary py-4 px-5 font-poppins text-white relative'
			variants={itemAnimation}
		>
			<div className='flex flex-col gap-3 mt-1 text-myGray'>
				<div className='flex gap-3 text-white'>
					<p className='font-semibold '>{project.title}</p>
					<div
						className='text-xs font-medium text-black bg-yellow-500 px-2 py-1 rounded-lg'
						style={{
							backgroundColor: `${getStatusColor(project.state)}`,
						}}
					>
						{project.state}
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<img
						className='w-8 h-8 rounded-full'
						src={project.manageAvatar}
						alt='Manager photo'
					/>
					<p className=' font-medium text-[14px]'>{project.manageName}</p>
				</div>
				<p className='text-xs my-2 font-medium'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nam
					soluta sapiente ratione ipsa nulla illo fugiat, repellendus eius
					animi.
				</p>
				<div className='dates flex gap-6 '>
					<div className='flex flex-col'>
						<p className='text-xs font-medium '>Start Date</p>
						<p className='text-[14px] font-semibold text-white'>12 Jan 2024</p>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs font-medium'>End Date</p>
						<p className='text-[14px] font-semibold text-white'>12 Jan 2024</p>
					</div>
				</div>
				<div className='flex flex-col w-full gap-x-[14px] mt-1'>
					<div className='w-full flex items-center gap-2'>
						<div className='w-full rounded-full h-2.5 bg-black'>
							<div
								className={`h-2.5 rounded-full w-full`}
								style={{
									width: `${Math.floor((project.task / 15) * 100)}%`,
									backgroundColor: `${getStatusColor(project.state)}`,
								}}
							></div>
						</div>
						<p className='text-[14px] font-medium text-white'>
							{Math.floor((project.task / 15) * 100)}%
						</p>
					</div>
					<p className='text-xs font-medium mt-1'>
						{project.task}/15 Task Completed
					</p>
				</div>

				<div className='w-full bg-myGray/50 h-[1px] mt-3'></div>
				<div className='flex flex-col gap-3'>
					<p className='text-[14px] font-medium'>Assigned To</p>
					<div className='flex gap-2'>
						{project.member.map((avatar, index) => (
							<img
								key={index}
								className='w-8 h-8 rounded-full'
								src={avatar}
								alt={`Member ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
