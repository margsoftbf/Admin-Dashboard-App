import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
interface BreadCrumbProps {
	pathSegments: Array<{
		name: string;
		href?: string;
		current?: boolean;
	}>;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ pathSegments }) => {
	return (
		<span className='pb-6 mt-2 rounded-md text-[14px] flex items-center gap-2'>
			<HomeIcon
				className='h-5 w-5 text-myGray flex-shrink-0'
				aria-hidden='true'
			/>
			{pathSegments.map((item, index) => (
				<span
					key={index}
					className='inline-flex items-center justify-center font-dmSans'
				>
					{item.current ? (
						<span
							className={`text-myViolet font-semibold ${
								index < pathSegments.length - 1 ? 'mr-2' : ''
							}`}
						>
							{item.name}
						</span>
					) : (
						<Link
							href={item.href || '#'}
							className={`text-myGray hover:text-myViolet ${
								index < pathSegments.length - 1 ? 'mr-0' : ''
							}`}
						>
							{item.name}
						</Link>
					)}
					{index < pathSegments.length - 1 && (
						<ChevronRightIcon
							className='h-5 w-5 mt-1 text-myGray'
							aria-hidden='true'
						/>
					)}
				</span>
			))}
		</span>
	);
};

export default BreadCrumb;
