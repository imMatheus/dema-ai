import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useSearchParams } from 'react-router-dom'

interface PaginationNavbarProps {
	// this prop is needed to determine if user should be able to go to next page
	beersLength: number
}

export const PaginationNavbar: React.FC<PaginationNavbarProps> = ({ beersLength }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const currentPage = Number(searchParams.get('page')) || 1

	return (
		<nav className="inline-flex -space-x-px" aria-label="Pagination">
			<button
				disabled={currentPage < 2}
				onClick={() => {
					setSearchParams({ page: (currentPage - 1).toString() })
				}}
				className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
			>
				<span className="sr-only">Previous</span>
				<ChevronLeft className="h-5 w-5" />
			</button>
			<div
				aria-current="page"
				className="relative z-10 inline-flex items-center border border-primary bg-primary/10  px-4 py-2 text-sm font-medium text-primary"
			>
				{currentPage}
			</div>
			<span className="sr-only">Next</span>
			<button
				disabled={beersLength < 20}
				onClick={() => {
					setSearchParams({ page: (currentPage + 1).toString() })
				}}
				className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
			>
				<span className="sr-only">Previous</span>
				<ChevronRight className="h-5 w-5" />
			</button>
		</nav>
	)
}
