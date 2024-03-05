import React, { ChangeEvent } from 'react';
import InputField from '@/components/Ecommerce/ProductDetails/InputField';
import Tags from '@/components/Ecommerce/ProductDetails/Tags';
import { ProductTypes } from '@/types/types';

interface ProductInfoProps {
	product: ProductTypes | null;
	tags: string[];
	inputTag: string;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => void;
	handleChangeInStock: (e: ChangeEvent<HTMLSelectElement>) => void;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	addTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	removeTag: (index: number) => void;
}

const ProductInfo = ({
	product,
	tags,
	inputTag,
	handleChange,
	handleChangeInStock,
	handleInputChange,
	addTag,
	removeTag,
}: ProductInfoProps) => {
	return (
		<div className='w-full 2xl:w-1/2 flex flex-col gap-8 lg:gap-12'>
			<div className='flex flex-col w-full 3xl:w-2/3'>
				<InputField
					label='Product Title'
					name='title'
					type='text'
					value={product?.title || 'Please fill title'}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-col w-full 3xl:w-2/3'>
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
			<div className='flex flex-col w-full 3xl:w-2/3'>
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
			<div className='flex flex-col w-full 3xl:w-2/3'>
				<InputField
					label='Brand'
					name='brand'
					type='text'
					value={product?.brand || 'Please fill title'}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-col xl:flex-row 3xl:w-2/3 gap-6'>
				<div className='flex flex-col w-full 2xl:w-1/2'>
					<InputField
						label='SKU'
						name='asin'
						type='text'
						value={product?.asin || 'Please fill title'}
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
			<div className='flex flex-col xl:flex-row w-full 3xl:w-2/3 gap-6'>
				<div className='flex flex-col w-full 2xl:w-1/2'>
					<InputField
						label='Regular Price'
						name='price'
						type='number'
						value={product?.price?.value || ''}
						onChange={handleChange}
					/>
				</div>
				<div className='flex flex-col w-full 2xl:w-1/2'>
					<InputField
						label='Sale Price'
						name='sale'
						type='number'
						value={0}
						onChange={handleChange}
					/>
				</div>
			</div>
			<Tags
				tags={tags}
				inputTag={inputTag}
				onInputChange={handleInputChange}
				onAddTag={addTag}
				onRemoveTag={removeTag}
			/>
		</div>
	);
};

export default ProductInfo;
