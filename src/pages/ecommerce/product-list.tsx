import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import { IconMore } from '../../../public/assets/svg';
import productData from '../../data/products.json';
import { StarIcon } from '@heroicons/react/24/solid';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ButtonAction from '@/components/ui/ButtonAction';
import { FiTrash2, FiEye, FiEdit } from 'react-icons/fi';
const ProductList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 10;
	const router = useRouter();

	const handleRowClick = (asin: string) => {
		router.push(`/ecommerce/product-details/${asin}`);
	};

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{ name: 'Product List', href: '/ecommerce/product-list', current: true },
	];

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = productData.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(productData.length / productsPerPage); i++) {
		pageNumbers.push(i);
	}

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
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Product List
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 overflow-x-auto'>
				<motion.table
					className='w-full table-auto mt-4 font-poppins'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead className='w-full h-12'>
						<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
							<th className='text-left pl-2 hidden xl:table-cell'>Image</th>
							<th className='text-left px-4'>Name</th>
							<th className='text-left px-4'>Brand</th>
							<th className='text-left px-4'>Price</th>
							<th className='text-left px-4'>Status</th>
							<th className='text-left px-4'>Review count</th>
							<th className='text-left px-4'>Rating</th>
							<th className='text-left px-4'>SKU</th>
							<th className='text-right px-4'>Actions</th>
						</tr>
					</thead>
					{currentProducts.map((product, index) => {
						const modelOverviewItem = product.productOverview.find(
							(item) => item.key === 'Model Name'
						);
						const modelName = modelOverviewItem
							? modelOverviewItem.value
							: 'No found';
						return (
							<tbody>
								<motion.tr
									onClick={() => handleRowClick(product.asin)}
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
										<p className='text-sm leading-4 text-myGray'>
											{product.brand}
										</p>
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
													handleRowClick(product.asin);
												}}
											>
												<FiEye className='w-5 h-5' />
											</ButtonAction>
											<ButtonAction
												className='hover:bg-myBlue text-myBlue hover:text-white'
												onClick={(e) => {
													e.stopPropagation();
													handleRowClick(product.asin);
												}}
											>
												<FiEdit className='w-5 h-5' />
											</ButtonAction>
											<ButtonAction
												className='text-myRed hover:bg-myRed hover:text-white'
												onClick={(e) => {
													e.stopPropagation();
													handleRowClick(product.asin);
												}}
											>
												<FiTrash2 className='w-5 h-5' />
											</ButtonAction>
										</div>
									</td>
								</motion.tr>
							</tbody>
						);
					})}
				</motion.table>
			</div>
			<div className='flex pagination text-white'>
				{currentPage > 1 && (
					<button
						className='hidden xs:block border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold mr-4 text-xs text-myGray hover:bg-myIndigo hover:text-white duration-300 transition'
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					>
						Back
					</button>
				)}

				{pageNumbers.map((number) => (
					<button
						key={number}
						onClick={() => paginate(number)}
						className={`w-9 h-9 mx-1 rounded-md font-poppins text-xs font-medium hover:bg-myIndigo hover:text-white duration-300 transition ${
							number === currentPage ? 'bg-myViolet font-semibold' : ''
						}`}
					>
						{number}
					</button>
				))}

				{currentPage < pageNumbers.length && (
					<button
						className='hidden xs:block border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold ml-4 text-xs text-myGray hover:bg-myIndigo hover:text-white duration-300 transition'
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
						}
					>
						Next
					</button>
				)}
			</div>
		</MainLayout>
	);
};

export default ProductList;
