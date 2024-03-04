import React from 'react';

interface ButtonActionProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	className?: string;
	children: React.ReactNode;
}
const ButtonAction = ({
	children,
	onClick,
	className,
}: ButtonActionProps) => {
	const baseClasses =
		'py-1 px-1.5 rounded-md transition duration-150';
	const classes = `${baseClasses} ${className}`;

	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export default ButtonAction;
