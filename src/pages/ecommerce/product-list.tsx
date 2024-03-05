import BreadCrumb from '@/components/common/Breadcrumb';
import MainLayout from '@/components/layout/MainLayout';
import React, { useState } from 'react';
import productData from '../../data/products.json';
import { StarIcon } from '@heroicons/react/24/solid';
import { containerAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ProductListPagination from '@/components/Ecommerce/ProductList/ProductListPagination';
import ProductRow from '@/components/Ecommerce/ProductList/ProductRow';
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

	const totalPages = Math.ceil(productData.length / productsPerPage);

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
					{currentProducts.map((product) => (
						<ProductRow
							key={product.asin}
							product={product}
							onRowClick={handleRowClick}
						/>
					))}
				</motion.table>
			</div>
			<ProductListPagination
				currentPage={currentPage}
				paginate={paginate}
				totalPages={totalPages}
			/>
		</MainLayout>
	);
};

export default ProductList;
