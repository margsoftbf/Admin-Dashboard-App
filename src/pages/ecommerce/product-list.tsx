import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import { IconMore } from '../../../public/assets/svg';
import productData from '../../data/products.json';
import { StarIcon } from '@heroicons/react/24/solid';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const ProductList = () => {
	const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 10;
	const router = useRouter();
	const toggleAction = (id: number) => {
		setActiveMenuId(activeMenuId === id ? null : id);
	};

	const handleRowClick = (asin: string) => {
		router.push(`/ecommerce/product-details/${asin}`);
	};

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
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
					className={i < numRating ? 'text-myYellow' : 'text-myGray'}
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
			<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-5  mb-6 text-white font-poppins'>
				<div className='flex items-center justify-between py-2'>
					<h2 className='text-white font-poppins text-base font-medium'>
						Products
					</h2>
				</div>
				<motion.table
					className='w-full min-w-[900px] mt-4 font-poppins'
					variants={containerAnimation}
					initial='hidden'
					animate='visible'
				>
					<thead>
						<tr className='border-b border-b-myGray/60 text-myGray'>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Image</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Name</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Brand</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Price</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Status</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Review count</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>Rating</span>
								</div>
							</th>
							<th className='pb-4'>
								<div className='flex items-center gap-x-2'>
									<span className='text-xs font-medium'>SKU</span>
								</div>
							</th>
							<th></th>
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
							<tbody
								onClick={() => handleRowClick(product.asin)}
								key={product.asin}
								className='hover:bg-zinc-800 cursor-pointer'
							>
								<motion.tr
									variants={itemAnimation}
									className='border-b border-b-myGray/60 text-myGray'
								>
									<td className='py-7'>
										<div className='w-20 h-20 flex items-center justify-center border border-myGray/60 rounded-lg'>
											<img
												className=' w-16 h-16 rounded-lg object-contain'
												src={product.thumbnailImage}
												alt='product'
											/>
										</div>
									</td>

									<td className='py-7'>
										<div className='flex flex-col gap-y-1 max-w-[250px]'>
											<p className='text-sm leading-4 text-white font-semibold'>
												{modelName}
											</p>
											<p className='text-xs text-myGray'>
												{product.title.slice(0, 70)}
											</p>
										</div>
									</td>
									<td className='py-7'>
										<p className='text-sm leading-4 text-myGray'>
											{product.brand}
										</p>
									</td>
									<td className='py-7'>
										<p className='text-sm leading-4 text-white font-semibold'>
											${product.price?.value.toFixed(2)}
										</p>
									</td>
									<td className='py-7'>
										<div className='flex items-center gap-x-2'>
											<div
												className={`w-2 h-2 rounded-full ${
													product.inStock === true ? 'bg-myEmerald' : 'bg-myRed'
												}`}
											></div>
											<p className='text-sm leading-4 text-myGray'>
												{product.inStock === true ? 'In stock' : 'Out of stock'}
											</p>
										</div>
									</td>
									<td className='py-7'>
										<p className='text-sm leading-4 text-myGray'>
											{product.reviewsCount}
										</p>
									</td>
									<td className='py-7'>
										<div className='flex items-center relative overflow-hidden gap-[3px]'>
											<div className='flex items-center absolute overflow-hidden gap-[3px] w-[100%]'></div>
											{renderStars(product.stars || 0)}
										</div>
									</td>
									<td className='py-7'>
										<p className='text-sm leading-4 font-medium text-white'>
											{product.asin}
										</p>
									</td>
									<td className='py-7 '>
										<button onClick={() => toggleAction(index)}>
											<IconMore className='cursor-pointer' />
										</button>
										{activeMenuId === index && (
											<div className='z-50 absolute mt-2 w-32 right-0 border border-[#313442] bg-myPrimary shadow-lg rounded-lg text-white text-xs '>
												<ul>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															View details
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Edit
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Completed
														</a>
													</li>
													<li className='hover:text-myGray'>
														<a href='#' className='block px-4 py-2'>
															Cancel
														</a>
													</li>
												</ul>
											</div>
										)}
									</td>
								</motion.tr>
							</tbody>
						);
					})}
				</motion.table>
			</div>
			<div className='pagination text-white'>
				{currentPage > 1 && (
					<button
						className='border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold mr-4 text-xs text-myGray'
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					>
						Back
					</button>
				)}

				{pageNumbers.map((number) => (
					<button
						key={number}
						onClick={() => paginate(number)}
						className={`w-9 h-9 rounded-md font-poppins text-xs font-medium ${
							number === currentPage ? 'bg-myViolet font-semibold' : ''
						}`}
					>
						{number}
					</button>
				))}

				{currentPage < pageNumbers.length && (
					<button
						className='border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold ml-4 text-xs text-myGray'
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
