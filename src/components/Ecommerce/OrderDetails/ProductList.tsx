import { containerAnimation, itemAnimation } from '@/data/data';
import { motion } from 'framer-motion';
import { ProductDetail } from '@/types/types';
interface ProductListProps {
	productsDetails: ProductDetail[];
	onNavigate: (asin: string) => void;
}

const ProductList = ({ productsDetails, onNavigate }: ProductListProps) => {
	return (
		<div className='flex flex-col mt-6 overflow-x-auto'>
			<p>Products</p>
			<motion.table
				className='w-full mt-8 font-poppins'
				variants={containerAnimation}
				initial='hidden'
				animate='visible'
			>
				<thead className='w-full h-12'>
					<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-[14px] text-white whitespace-nowrap'>
						<th className='text-left pl-2'>
							<label htmlFor='selectAll' className='sr-only'>
								Select All
							</label>
							<input
								id='selectAll'
								className='rounded border-2 w-4 h-4 mb-2'
								type='checkbox'
							/>
						</th>
						<th className='text-left px-4'>Product Name</th>
						<th className='text-left px-4'>Price</th>
						<th className='text-left px-4'>Quantity</th>
						<th className='text-left px-4'>Total</th>
					</tr>
				</thead>
				<tbody>
					{productsDetails.map((product, index) => (
						<motion.tr
							key={index}
							variants={itemAnimation}
							className='border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer'
							onClick={() => onNavigate(product.asin)}
						>
							<td className='text-left pl-2 py-4'>
								<label htmlFor={`checkbox-${product.asin}`} className='sr-only'>
									Select order {product.asin}
								</label>
								<input
									id={`checkbox-${product.asin}`}
									className='rounded border-2 w-4 h-4'
									type='checkbox'
								/>
							</td>
							<td className='text-left text-xs py-6 lg:py-8 px-2 flex gap-4 items-center'>
								<img
									src={product.thumbnailImage}
									alt='Product image'
									className='hidden md:flex w-12 h-12 rounded-md'
								/>
								{product.title.slice(0, 20)}
							</td>
							<td className='px-4 py-2'>${product.price.value.toFixed(2)}</td>
							<td className='px-4 whitespace-nowrap '>{product.quantity}</td>
							<td className='px-4 py-2'>${product.total.toFixed(2)}</td>
						</motion.tr>
					))}
				</tbody>
			</motion.table>
		</div>
	);
};

export default ProductList;
