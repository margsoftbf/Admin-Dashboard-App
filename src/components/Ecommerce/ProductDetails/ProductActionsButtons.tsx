import Button from '@/components/ui/Button';
import React from 'react';

interface ProductDetailActionsProps {
	onOpenModal: (action: 'update' | 'delete' | 'cancel') => void;
}

const ProductActionsButtons = ({ onOpenModal }: ProductDetailActionsProps) => {
	return (
		<div className='flex items-center justify-between xs:justify-end gap-x-4 flex-wrap gap-y-4 w-full 3xl:w-2/3'>
			<Button
				className='bg-myViolet hover:bg-myIndigo'
				onClick={() => onOpenModal('update')}
			>
				Update
			</Button>

			<Button
				className='bg-myRed hover:bg-red-800'
				onClick={() => onOpenModal('delete')}
			>
				Delete
			</Button>
			<Button
				className='bg-myGrayDarker hover:bg-zinc-900'
				onClick={() => onOpenModal('cancel')}
			>
				Cancel
			</Button>
		</div>
	);
};

export default ProductActionsButtons;
