import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import BreadCrumb from '@/components/common/Breadcrumb';
import {
	MagnifyingGlassIcon,

} from '@heroicons/react/24/outline';
import { jobListing, containerAnimation} from '@/data/data';
import JobDetailsModal from '@/components/Jobs/JobDetailsModal';
import ApplyJobModal from '@/components/Jobs/ApplyJobModal';
import { JobTypes } from '@/types/types';
import { motion } from 'framer-motion';
import JobCard from '@/components/Jobs/JobCard';
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
					<JobCard
					key={job.id}
					job={job}
					onOpenDetailsModal={handleOpenDetailsModal}
					onOpenApplyModal={handleOpenApplyModal}
					getTagClassName={getTagClassName}
				  />
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
