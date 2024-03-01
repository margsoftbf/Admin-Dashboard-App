import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import {
	MagnifyingGlassIcon,
	MapPinIcon,
	BriefcaseIcon,
	ClockIcon,
} from '@heroicons/react/24/outline';
import { jobListing, containerAnimation, itemAnimation } from '@/data/data';
import JobDetailsModal from '@/components/Jobs/JobDetailsModal';
import ApplyJobModal from '@/components/Jobs/ApplyJobModal';
import { JobTypes } from '@/types/types';
import { motion } from 'framer-motion';
const JobsHomePage = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedJob, setSelectedJob] = useState<JobTypes | null>(null);
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
	const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Jobs', href: '/jobs', current: true },
	];

	const getTagClassName = (tag: string): string => {
		const tagStyles: { [key: string]: string } = {
			Remote: 'bg-purple-500/20 text-purple-500',
			Junior: 'bg-green-500/20 text-green-500',
			Javascript: 'bg-yellow-500/20 text-yellow-500',
			Senior: 'bg-red-500/20 text-red-500',
			Backend: 'bg-fuchsia-500/20 text-fuchsia-500',
			Frontend: 'bg-slate-500/20 text-slate-300',
			React: 'bg-cyan-500/20 text-cyan-500',
		};

		if (tag in tagStyles) {
			return tagStyles[tag];
		}
		return 'bg-gray-500';
	};

	const handleOpenDetailsModal = (job: JobTypes) => {
		setSelectedJob(job);
		setIsDetailsModalOpen(true);
	};

	const handleOpenApplyModal = (job: JobTypes) => {
		setSelectedJob(job);
		setIsApplyModalOpen(true);
	};

	const handleCloseDetailsModal = () => setIsDetailsModalOpen(false);
	const handleCloseApplyModal = () => setIsApplyModalOpen(false);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const filteredJobListing = jobListing.filter(
		(job) =>
			job.positionName.toLowerCase().includes(searchQuery) ||
			job.company.toLowerCase().includes(searchQuery)
	);

	return (
		<MainLayout>
			<h1 className='my-2 ml-1 font-poppins text-2xl text-white  font-bold'>
				Jobs
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='w-[1200px] mx-auto'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<div className='relative flex flex-1 items-center h-full w-full mb-6'>
					<label htmlFor='search-field' className='sr-only'>
						Search
					</label>
					<MagnifyingGlassIcon
						className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-4'
						aria-hidden='true'
					/>
					<input
						id='search-field'
						className='block h-12 w-full rounded-xl bg-myPrimary border-0 py-0 pl-12 pr-3  placeholder:text-[#64646F] font-poppins font-medium text-white focus:ring-0 sm:text-sm'
						placeholder='Search job...'
						type='search'
						name='search'
						value={searchQuery}
						onChange={handleSearchChange}
					/>
				</div>
			</motion.div>
			<motion.div
				className='flex flex-col gap-3 rounded-lg border border-[#313442] bg-myPrimary py-4 flex-1 px-5'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				{filteredJobListing.map((job) => (
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
								<p className='font-semibold text-white text-xl'>
									{job.salary} $
								</p>
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
									onClick={() => handleOpenDetailsModal(job)}
									className='h-8 px-3 text-[14px] rounded-lg bg-blue-700 hover:bg-blue-900 text-white font-medium duration-300 transition'
								>
									View Details
								</button>
								<button
									onClick={() => handleOpenApplyModal(job)}
									className='h-8 px-3 text-[14px] rounded-lg bg-myViolet hover:bg-myIndigo duration-300 transition text-white font-medium'
								>
									Apply job
								</button>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
			<JobDetailsModal
				open={isDetailsModalOpen}
				handleClose={handleCloseDetailsModal}
				job={selectedJob}
			/>
			<ApplyJobModal
				open={isApplyModalOpen}
				handleClose={handleCloseApplyModal}
				job={selectedJob}
			/>
		</MainLayout>
	);
};

export default JobsHomePage;
