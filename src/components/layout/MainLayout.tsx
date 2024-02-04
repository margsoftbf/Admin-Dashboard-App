import React, { ReactNode, useState } from 'react';
import Header from './Header';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div>
			<SidebarMobile
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>
			<SidebarDesktop />
			<div className='lg:pl-72 '>
				<Header setSidebarOpen={setSidebarOpen} />
				<main className='py-2'>
					<div className='px-4 sm:px-6 lg:px-8 '>{children}</div>
				</main>
			</div>
		</div>
	);
};
export default MainLayout;
