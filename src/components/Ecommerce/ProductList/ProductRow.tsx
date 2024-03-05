import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
import { ProductTypes } from '@/types/types';
import { itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';

interface ProductRowProps {
	product: ProductTypes;
	onRowClick: (asin: string) => void;
}

const ProductRow = ({ product, onRowClick }: ProductRowProps) => {
	const modelName =
		product.productOverview.find((item) => item.key === 'Model Name')?.value ||
		'Not found';

	const renderStars = (rating: number = 0) => {
		const numRating = rating;
		let stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span
					key={i}
					className={i < numRating ? 'text-[#FEA73E]' : 'text-myGray'}
				>
					<StarIcon className='w-3 h-3' />
				</span>
			);
		}
		return stars;
	};

	return (
		<tbody key={product.asin}>
			<motion.tr
				onClick={() => onRowClick(product.asin)}
				key={product.asin}
				variants={itemAnimation}
				className={`border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer `}
			>
				<td className='text-left pl-2 py-3 hidden xl:table-cell whitespace-nowrap'>
					<div className='w-20 h-20 flex items-center justify-center border bg-zinc-900 border-myGray/60 rounded-lg'>
						<img
							className=' w-16 h-16 rounded-lg object-contain'
							src={product.thumbnailImage}
							alt='product'
						/>
					</div>
				</td>

				<td className='px-4 py-2'>
					<div className='flex flex-col gap-y-1 max-w-[250px]'>
						<p className='text-sm leading-4 text-white line-clamp-1 font-semibold'>
							{modelName}
						</p>
						<p className='text-xs text-myGray hidden xl:flex'>
							{product.title.slice(0, 70)}
						</p>
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<p className='text-sm leading-4 text-myGray'>{product.brand}</p>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<p className='text-sm leading-4 text-white font-semibold'>
						${product.price?.value.toFixed(2)}
					</p>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center gap-x-2'>
						<div
							className={`w-2 h-2 rounded-full ${
								product.inStock === true ? 'bg-green-500' : 'bg-myRed'
							}`}
						></div>
						<p className='text-sm leading-4 text-myGray'>
							{product.inStock === true ? 'In stock' : 'Out of stock'}
						</p>
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<p className='text-sm leading-4 text-myGray'>
						{product.reviewsCount}
					</p>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<div className='flex items-center relative overflow-hidden gap-[3px]'>
						<div className='flex items-center absolute overflow-hidden gap-[3px] w-[100%]'></div>
						{renderStars(product.stars || 0)}
					</div>
				</td>
				<td className='px-4 whitespace-nowrap'>
					<p className='text-sm leading-4 font-medium text-white'>
						{product.asin}
					</p>
				</td>
				<td className='px-4'>
					<div className='relative w-full flex justify-end gap-4'>
						<ButtonAction
							className='hover:bg-white hover:text-black'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(product.asin);
							}}
						>
							<FiEye className='w-5 h-5' />
						</ButtonAction>
						<ButtonAction
							className='hover:bg-myBlue text-myBlue hover:text-white'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(product.asin);
							}}
						>
							<FiEdit className='w-5 h-5' />
						</ButtonAction>
						<ButtonAction
							className='text-myRed hover:bg-myRed hover:text-white'
							onClick={(e) => {
								e.stopPropagation();
								onRowClick(product.asin);
							}}
						>
							<FiTrash2 className='w-5 h-5' />
						</ButtonAction>
					</div>
				</td>
			</motion.tr>
		</tbody>
	);
};

export default ProductRow;
