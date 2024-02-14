import React, { ChangeEvent } from 'react';

interface InputFieldProps {
	label: string;
	type?: 'text' | 'number' | 'email';
	name: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type = 'text',
	name,
	value,
	onChange,
}) => {
	return (
		<div className='flex flex-col'>
			<label
				htmlFor={name}
				className='text-white text-base leading-4 font-poppins mb-3'
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				className='block font-inter py-2 w-full rounded-md border-0 bg-transparent text-myGray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputField;
