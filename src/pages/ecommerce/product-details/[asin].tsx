import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import productData from '../../../data/products.json';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { IconCheck, IconImage } from '../../../../public/assets/svg';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';

const ProductDetails = () => {
	const router = useRouter();
	const { asin } = router.query;
	const [product, setProduct] = useState<any | null>(null);
	const [tags, setTags] = useState(['tv', 'phone', 'electronic', 'smartwatch']);
	const [inputTag, setInputTag] = useState('');

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Dashboard', href: '/ecommerce', current: false },
		{
			name: 'Product Details',
			href: `/ecommerce/product-details/${asin}`,
			current: true,
		},
	];

	useEffect(() => {
		const foundProduct = productData.find((p) => p.asin === asin);
		setProduct(foundProduct);
	}, [asin]);

	const handleChangeInStock = (e: ChangeEvent<HTMLSelectElement>) => {
		const isInStock = e.target.value === 'True';
		setProduct((prevProduct: any) => ({
			...prevProduct,
			inStock: isInStock,
		}));
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;

		if (name === 'price') {
			setProduct((prevProduct: any) => ({
				...prevProduct,
				price: {
					...prevProduct.price,
					value: parseFloat(value) || 0,
				},
			}));
		} else {
			setProduct((prevProduct: any) => ({
				...prevProduct,
				[name]: value,
			}));
		}
	};

	const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && inputTag) {
			e.preventDefault();

			if (!tags.includes(inputTag)) {
				setTags([...tags, inputTag]);
				setInputTag('');
			}
		}
	};

	const removeTag = (index: number) => {
		setTags(tags.filter((_, idx) => idx !== index));
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTag(e.target.value);
	};

	return (
		<MainLayout>
			<h1 className='my-2 font-poppins text-2xl ml-1 text-white font-bold'>
				Product Details
			</h1>
			<BreadCrumb pathSegments={pathSegments} />
			<motion.div
				className='rounded-2xl relative border border-[#313442] bg-myPrimary py-2 px-6 lg:px-12  mb-6 text-white font-poppins flex gap-x-12 justify-between flex-col gap-y-12  border-neutral pt-6 pb-6 lg:flex-row lg:gap-y-0'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<motion.div
					className='w-full 2xl:w-1/2 flex flex-col gap-8 lg:gap-12'
					variants={itemAnimation}
				>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<label
							htmlFor='product-title'
							className='text-white text-base leading-4 font-poppins  mb-3'
						>
							Product Title
						</label>
						<input
							id='product-title'
							name='title'
							type='text'
							className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
							value={product?.title || 'Please fill title'}
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<label
							htmlFor='description'
							className='text-white text-base leading-4 font-poppins  mb-3'
						>
							Description
						</label>
						<textarea
							id='description'
							name='description'
							className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 h-32 xl:h-64'
							value={product?.description || 'Please fill the description.'}
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<label
							htmlFor='category'
							className='text-white text-base leading-4 font-poppins  mb-3'
						>
							Category
						</label>
						<select
							id='category'
							name='category'
							className='block font-inter w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
						>
							<option>Laptop</option>
							<option>TV</option>
							<option>Smartphones</option>
							<option>Smartwatches</option>
						</select>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<label
							htmlFor='brand'
							className='text-white text-base leading-4 font-poppins  mb-3'
						>
							Brand
						</label>
						<input
							id='brand'
							name='brand'
							type='text'
							className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
							value={product?.brand || 'Please fill brand'}
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col xl:flex-row 2xl:w-2/3 gap-6'>
						<div className='flex flex-col w-full 2xl:w-1/2'>
							<label
								htmlFor='sku'
								className='text-white text-base leading-4 font-poppins  mb-3'
							>
								SKU
							</label>
							<input
								id='sku'
								name='asin'
								type='text'
								className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGrayshadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
								value={product?.asin || 'Please fill brand'}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col w-full 2xl:w-1/2'>
							<label
								htmlFor='in-stock'
								className='text-white text-base leading-4 font-poppins  mb-3'
							>
								In stock
							</label>
							<select
								id='in-stock'
								name='in-stock'
								className='block font-inter w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
								value={product?.inStock ? 'True' : 'False'}
								onChange={handleChangeInStock}
							>
								<option value='True'>True</option>
								<option value='False'>False</option>
							</select>
						</div>
					</div>
					<div className='flex flex-col xl:flex-row w-full 2xl:w-2/3 gap-6'>
						<div className='flex flex-col w-full 2xl:w-1/2'>
							<label
								htmlFor='price'
								className='text-white text-base leading-4 font-poppins  mb-3'
							>
								Regular Price
							</label>
							<input
								id='price'
								name='price'
								type='number'
								className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
								value={product?.price?.value || ''}
								onChange={handleChange}
							/>
						</div>
						<div className='flex flex-col w-full 2xl:w-1/2'>
							<label
								htmlFor='sale-price'
								className='text-white text-base leading-4 font-poppins  mb-3'
							>
								Sale Price
							</label>
							<input
								id='sale-price'
								name='salePrice'
								type='number'
								className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
								value={0}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3 '>
						<p className='text-white text-base leading-4 font-poppins  mb-3'>
							Tags
						</p>
						<div className='font-inter py-2 w-full rounded-md border-0 bg-transparent text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 h-32 flex gap-x-4 flex-wrap'>
							{tags.length > 0 ? (
								<div className='flex gap-x-2 gap-y-2 flex-wrap px-2'>
									{tags.map((tag, index) => (
										<p
											key={index}
											className='font-poppins bg-[#313442] p-2 h-6 rounded-lg flex items-center justify-center gap-1 text-myGray'
										>
											{tag}

											<button type='button' onClick={() => removeTag(index)}>
												<XMarkIcon className='w-3 h-3' />
											</button>
										</p>
									))}
								</div>
							) : (
								<p>No tags</p>
							)}
						</div>
						<input
							type='text'
							className='block font-inter py-2 my-2 w-48 rounded-md border-0 bg-myGray text-white placeholder:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
							value={inputTag}
							onChange={handleInputChange}
							onKeyDown={addTag}
							placeholder='Add a tag...'
						/>
					</div>
				</motion.div>
				<motion.div
					className='w-full 2xl:w-1/2 flex flex-col gap-8 lg:gap-12'
					variants={itemAnimation}
				>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<p className='text-white text-base leading-4 font-poppins  mb-3'>
							Product Main Image
						</p>
						<div className='flex justify-center items-center w-full shadow-sm ring-1 ring-inset ring-white/10 rounded-md p-8'>
							<img
								className='w-full h-full rounded-lg max-w-96 max-h-80'
								src={product?.thumbnailImage}
								alt='product'
							/>
						</div>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<p className='text-white text-base leading-4 font-poppins  mb-3'>
							Upload image
						</p>
						<div className='flex flex-col justify-center items-center w-full shadow-sm border-dashed border-2 border-[#313442] rounded-md p-8'>
							<IconImage className='w-8 h-8 mb-6 cursor-pointer' />
							<p className='text-sm leading-6 text-gray-500 font-normal mb-1 text-center'>
								Drop your image here, or browse
							</p>
							<p className='leading-6 text-gray-400 text-[14px] text-center'>
								JPG,PNG and GIF files are allowed
							</p>
						</div>
					</div>
					<div className='flex flex-col w-full 2xl:w-2/3'>
						<p className='text-white text-base leading-4 font-poppins  mb-3'>
							Images
						</p>
						<div className='flex flex-col gap-3'>
							{product?.galleryThumbnails
								?.slice(0, 4)
								.map((thumbnail: string, index: number) => (
									<div
										key={index}
										className='flex items-center flex-col xs:flex-row gap-2 justify-between border pl-3 pr-3 transition-all duration-300 border-[#313442] rounded-md hover:shadow-xl overflow-hidden py-3'
									>
										<img
											className='w-16 h-16 rounded-md'
											src={thumbnail}
											alt={`Gallery thumbnail ${index + 1}`}
										/>
										<div className='flex flex-col flex-1 gap-y-3 pl-2'>
											<div className='flex items-center justify-between'>
												<span className='text-myGray text-xs leading-4'>
													Product_thumbnail_1.png
												</span>
											</div>
										</div>
										<IconCheck className='w-5 h-5' />
									</div>
								))}
						</div>
					</div>
					<div className='flex items-center justify-end gap-x-4 flex-wrap gap-y-4 w-full 2xl:w-2/3'>
						<button className='transition-all duration-300 bg-myViolet hover:bg-myIndigo px-6 py-3 rounded-md'>
							Update
						</button>
						<button className='transition-all duration-300 bg-myRed hover:bg-red-800 px-6 py-3 rounded-md'>
							Delete
						</button>
						<button className=' bg-[#E8EDF2] text-myViolet transition-all duration-300 hover:bg-gray-400 hover:text-white  px-6 py-3 rounded-md'>
							Cancel
						</button>
					</div>
				</motion.div>
			</motion.div>
		</MainLayout>
	);
};

export default ProductDetails;
