import React from 'react';
import {
	MapPinIcon,
	BriefcaseIcon,
	ClockIcon,
} from '@heroicons/react/24/outline';
import { JobTypes } from '@/types/types';
import { itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';

interface JobCardProps {
	job: JobTypes;
	onOpenDetailsModal: (job: JobTypes) => void;
	onOpenApplyModal: (job: JobTypes) => void;
	getTagClassName: (tag: string) => string;
}

const JobCard = ({ job, onOpenDetailsModal, onOpenApplyModal, getTagClassName }: JobCardProps) => {
	return (
		<motion.div
			key={job.id}
			className='rounded-lg flex flex-col md:flex-row md:items-start justify-between pt-2 pb-3 px-4 xl:pr-3 bg-myBlack duration-300 transition'
			variants={itemAnimation}
		>
			<div className='flex flex-col 2xl:flex-row 2xl:items-center gap-4 w-full xl:w-1/3'>
				<div className='w-10 h-10 bg-white flex-shrink-0 p-1.5 rounded-full overflow-hidden'>
					<img src={job.img} alt='brand logo' />
				</div>
				<div className='flex flex-col gap-1'>
					<p className='font-semibold text-white mb-1 text-[14px]'>
						{job.positionName}
					</p>
					<div className='flex flex-col md:flex-row gap-3'>
						<p className=' text-emerald-500 text-xs'>{job.company}</p>
						<div className='flex items-center text-myGray gap-0.5'>
							<MapPinIcon className='w-4 h-4' />
							<span className=' text-xs'>{job.location}</span>
						</div>
						<div className='flex items-center text-myGray gap-0.5'>
							<BriefcaseIcon className='w-4 h-4' />
							<span className=' text-xs'>{job.employmentTime}</span>
						</div>
						<div className='flex items-center text-myGray gap-0.5'>
							<ClockIcon className='w-4 h-4' />
							<span className=' text-xs'>{job.jobListed}</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col 2xl:flex-row 2xl:w-2/3 h-full'>
				<div className='w-full flex md:justify-end 2xl:justify-start xl:items-center h-full my-2'>
					<p className='font-semibold text-white text-xl'>{job.salary} $</p>
				</div>
				<div className='flex flex-row 2xl:justify-center gap-2 flex-3 items-start w-full my-2'>
					{job.tags.map((tag) => (
						<p
							key={tag}
							className={`py-1 px-3 text-[14px] rounded-lg font-medium  ${getTagClassName(
								tag
							)}`}
						>
							{tag}
						</p>
					))}
				</div>

				<div className='flex md:justify-end gap-3 w-full mt-4 md:mt-0 2xl:items-center'>
					<button
						onClick={() => onOpenDetailsModal(job)}
						className='h-8 px-3 text-[14px] rounded-lg bg-blue-700 hover:bg-blue-900 text-white font-medium duration-300 transition'
					>
						View Details
					</button>
					<button
						onClick={() => onOpenApplyModal(job)}
						className='h-8 px-3 text-[14px] rounded-lg bg-myViolet hover:bg-myIndigo duration-300 transition text-white font-medium'
					>
						Apply job
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default JobCard;
