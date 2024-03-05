import React from 'react';

interface ProductMainImageProps {
	imageUrl: string | undefined;
}

const ProductMainImage = ({ imageUrl }: ProductMainImageProps) => {
	return (
		<div className='flex flex-col w-full 3xl:w-2/3'>
			<p className='text-white text-base leading-4 font-poppins  mb-3'>
				Product Main Image
			</p>
			<div className='flex justify-center items-center w-full shadow-sm ring-1 ring-inset ring-white/10 rounded-md p-8'>
				<img
					className='w-full h-full rounded-lg max-w-96 max-h-80'
					src={imageUrl}
					alt='product'
				/>
			</div>
		</div>
	);
};

export default ProductMainImage;
