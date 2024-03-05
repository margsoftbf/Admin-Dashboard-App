import React, { ChangeEvent, KeyboardEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TagsProps{
    tags: string[];
    inputTag: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddTag: (e: KeyboardEvent<HTMLInputElement>) => void;
    onRemoveTag: (index: number) => void;
}
const Tags = ({tags, inputTag, onInputChange, onAddTag, onRemoveTag}: TagsProps) => {
	return (
		<div className='flex flex-col w-full 3xl:w-2/3 '>
			<p className='text-white text-base leading-4 font-poppins  mb-3'>Tags</p>
			<div className='font-inter py-2 w-full rounded-md border-0 bg-transparent text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 h-32 flex gap-x-4 flex-wrap'>
				{tags.length > 0 ? (
					<div className='flex gap-x-2 gap-y-2 flex-wrap px-2'>
						{tags.map((tag, index) => (
							<p
								key={index}
								className='font-poppins bg-[#313442] p-2 h-6 rounded-lg flex items-center justify-center gap-1 text-gray-300'
							>
								{tag}

								<button
									aria-label='Delete tag'
									type='button'
									onClick={() => onRemoveTag(index)}
								>
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
				className='block font-inter py-2 my-2 w-48 rounded-md border-0 bg-white text-black placeholder:text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
				value={inputTag}
				onChange={onInputChange}
				onKeyDown={onAddTag}
				placeholder='Add a tag...'
			/>
		</div>
	);
};

export default Tags;
