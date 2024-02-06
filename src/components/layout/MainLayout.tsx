import React, { ReactNode, useState } from 'react';
import Header from './Header';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

	const toggleSubMenu = (name: string) => {
		setExpandedMenu(expandedMenu === name ? null : name);
	};
	return (
		<div>
			<SidebarMobile
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				expandedMenu={expandedMenu}
				toggleSubMenu={toggleSubMenu}
			/>
			<SidebarDesktop
				expandedMenu={expandedMenu}
				toggleSubMenu={toggleSubMenu}
			/>
			<div className='lg:pl-72'>
				<Header setSidebarOpen={setSidebarOpen} />
				<main className='py-2'>
					<div className='px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden'>
						{children}
					</div>
				</main>
			</div>
		</div>
	);
};
export default MainLayout;
