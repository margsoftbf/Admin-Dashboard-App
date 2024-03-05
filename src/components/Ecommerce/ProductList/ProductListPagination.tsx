interface ProductListPaginationProps {
	currentPage: number;
	paginate: (pageNumber: number) => void;
	totalPages: number;
}

const ProductListPagination = ({
	currentPage,
	totalPages,
	paginate,
}: ProductListPaginationProps) => {
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='flex pagination text-white'>
			{currentPage > 1 && (
				<button
					className='hidden xs:block border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold mr-4 text-xs text-myGray hover:bg-myIndigo hover:text-white duration-300 transition'
					 onClick={() => paginate(currentPage - 1)}
				>
					Back
				</button>
			)}

			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => paginate(number)}
					className={`w-9 h-9 mx-1 rounded-md font-poppins text-xs font-medium hover:bg-myIndigo hover:text-white duration-300 transition ${
						number === currentPage ? 'bg-myViolet font-semibold' : ''
					}`}
				>
					{number}
				</button>
			))}

			{currentPage < pageNumbers.length && (
				<button
					className='hidden xs:block border border-[#313442] rounded-lg w-20 h-10 font-poppins font-semibold ml-4 text-xs text-myGray hover:bg-myIndigo hover:text-white duration-300 transition'
                    onClick={() => paginate(currentPage + 1)}
				>
					Next
				</button>
			)}
		</div>
	);
};

export default ProductListPagination;
