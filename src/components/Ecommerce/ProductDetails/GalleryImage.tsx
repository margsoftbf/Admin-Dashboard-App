import React from 'react';
import { IconCheck, IconDelete } from '../../../../public/assets/svg';

interface GalleryImageProps {
	galleryThumbnails: string[] | undefined;
	onOpenModal: (action: string) => void;
}

const GalleryImage = ({
	galleryThumbnails,
	onOpenModal,
}: GalleryImageProps) => {
	return (
		<div className='flex flex-col w-full 3xl:w-2/3'>
			<p className='text-white text-base leading-4 font-poppins  mb-3'>
				Images
			</p>
			<div className='flex flex-col gap-3'>
				{galleryThumbnails
					?.slice(0, 4)
					.map((thumbnail: string, index: number) => (
						<div
							key={index}
							className='flex items-center flex-row gap-2 justify-between border pl-3 pr-3 transition-all duration-300 border-[#313442] rounded-md hover:shadow-xl overflow-hidden py-3'
						>
							<img
								className='w-16 h-16 rounded-md'
								src={thumbnail}
								alt={`Gallery thumbnail ${index + 1}`}
							/>
							<div className='flex flex-col flex-1 gap-y-3 pl-2 overflow-hidden'>
								<div className='flex items-center justify-between'>
									<span className='text-myGray text-xs leading-4'>
										{`Product_thumbnail_${index + 1}.png`}
									</span>
								</div>
							</div>
							<IconCheck
								onClick={() => onOpenModal('set this image as a primary')}
								className='w-5 h-5 md:w-8 md:h-8 cursor-pointer'
							/>
							<IconDelete
								onClick={() => onOpenModal('delete this image')}
								className='w-5 h-5 md:w-8 md:h-8 cursor-pointer'
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default GalleryImage;
