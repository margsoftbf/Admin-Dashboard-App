import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';

interface ConfirmationModalProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#FFF',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ConfirmationModal = ({
	open,
	onClose,
	onConfirm,
	title,
}: ConfirmationModalProps) => {
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{ timeout: 500 }}
		>
			<Fade in={open}>
				<Box sx={style}>
					<Typography
						id='transition-modal-title'
						variant='h6'
						component='h2'
						className='font-poppins p-2 text-[14px] text-center'
					>
						{title}
					</Typography>
					<Typography id='transition-modal-description' sx={{ mt: 2 }}>
						<div className='flex w-full gap-4 justify-center'>
							<button
								className='px-4 py-2 bg-green-600 rounded-md text-white'
								onClick={onConfirm}
							>
								Yes
							</button>
							<button
								className='px-4 py-2 bg-red-600 rounded-md text-white'
								onClick={onClose}
							>
								No
							</button>
						</div>
					</Typography>
				</Box>
			</Fade>
		</Modal>
	);
};

export default ConfirmationModal;
