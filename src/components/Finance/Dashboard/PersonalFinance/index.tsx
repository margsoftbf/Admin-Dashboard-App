import 'react-circular-progressbar/dist/styles.css';
import {
	containerAnimation,
} from '@/data/data';
import { motion } from 'framer-motion';
import YourWallet from './YourWallet';
import AllExpenses from './AllExpenses';
import Stocks from './Stocks';



const PersonalFinance = () => {
	return (
		<motion.div
			className='grid grid-cols-1 gap-6 mb-7 2xl:grid-cols-3 text-white'
			variants={containerAnimation}
			initial='hidden'
			animate='visible'
		>
			<YourWallet />
			<AllExpenses />
			<Stocks />
		</motion.div>
	);
};

export default PersonalFinance;
