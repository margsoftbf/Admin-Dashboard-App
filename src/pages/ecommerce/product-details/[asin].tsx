import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BreadCrumb from '@/components/common/Breadcrumb';
import productData from '../../../data/products.json';
import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { ProductTypes } from '@/types/types';
import InputField from '@/components/Ecommerce/ProductDetails/InputField';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import Tags from '@/components/Ecommerce/ProductDetails/Tags';
import ProductActionsButtons from '@/components/Ecommerce/ProductDetails/ProductActionsButtons';
import ProductMainImage from '@/components/Ecommerce/ProductDetails/ProductMainImage';
import UploadImage from '@/components/Ecommerce/ProductDetails/UploadImage';
import GalleryImage from '@/components/Ecommerce/ProductDetails/GalleryImage';
import ProductInfo from '@/components/Ecommerce/ProductDetails/ProductInfo';

const ProductDetails = () => {
	const router = useRouter();
	const { asin } = router.query;
	const [product, setProduct] = useState<ProductTypes | null>(null);
	const [tags, setTags] = useState(['tv', 'phone', 'electronic', 'smartwatch']);
	const [inputTag, setInputTag] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');

	const pathSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Ecommerce', href: '/ecommerce', current: false },
		{
			name: 'Product Details',
			href: `/ecommerce/product-details/${asin}`,
			current: true,
		},
	];

	useEffect(() => {
		if (asin) {
			const foundProduct = productData.find((p) => p.asin === asin);
			if (foundProduct) {
				setProduct(foundProduct);
			} else {
				setProduct(null);
			}
		}
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
		const { name, value, type } = e.target;

		if (type === 'price') {
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

	const handleOpenModal = (action: string) => {
		setModalTitle(`Are you sure you want to ${action}?`);
		setOpenModal(true);
	};

	const handleCloseModal = () => setOpenModal(false);

	const handleConfirmAction = () => {
		setOpenModal(false);
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
				<ProductInfo
					product={product}
					tags={tags}
					inputTag={inputTag}
					handleChange={handleChange}
					handleChangeInStock={handleChangeInStock}
					handleInputChange={handleInputChange}
					addTag={addTag}
					removeTag={removeTag}
				/>
				<div className='w-full 2xl:w-1/2 flex flex-col gap-8 lg:gap-12'>
					<ProductMainImage imageUrl={product?.thumbnailImage} />
					<UploadImage />
					<GalleryImage
						galleryThumbnails={product?.galleryThumbnails || []}
						onOpenModal={handleOpenModal}
					/>
					<ProductActionsButtons onOpenModal={handleOpenModal} />
					<ConfirmationModal
						open={openModal}
						onClose={handleCloseModal}
						onConfirm={handleConfirmAction}
						title={modalTitle}
					/>
				</div>
			</motion.div>
		</MainLayout>
	);
};

export default ProductDetails;
