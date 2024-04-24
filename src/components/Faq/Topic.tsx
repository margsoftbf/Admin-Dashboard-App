import React from 'react';

interface TopicProps {
    faqTopic: {id: number, color: string, title: string}[]
    activeId: number | null;
    handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
}

const Topic = ({faqTopic, activeId, handleLinkClick}: TopicProps) => {
	return (
		<div className='rounded-2xl relative border border-[#313442] bg-myPrimary py-5 px-4  mb-6 text-white font-poppins overflow-x-auto'>
			<ul className='flex flex-col gap-4'>
				{faqTopic.map((topic) => (
					<li key={topic.id} className='flex flex-row gap-2 items-center py-1'>
						<div
							className={`w-3 h-3 rounded-full `}
							style={{
								background:
									activeId === topic.id ? topic.color : `${topic.color}30`,
							}}
						></div>
						<a
							href=''
							className={`font-poppins text-gray-400 pl-1 font-medium hover:text-white text-[14px] ${
								activeId === topic.id ? 'text-white' : ''
							}`}
							onClick={(e) => handleLinkClick(e, topic.id)}
						>
							{topic.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Topic;
