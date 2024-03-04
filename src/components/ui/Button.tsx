import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
	const baseClasses =
		'h-10 flex items-center justify-center px-4 rounded-md font-poppins text-[14px] font-medium duration-300 transition';
	const classes = `${baseClasses} ${className}`;
	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

