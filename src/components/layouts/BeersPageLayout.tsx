import React from 'react'
import { PaginationNavbar } from '../PaginationNavbar'

interface BeersPageLayoutProps {
	children: React.ReactNode
	beersLength: number
}

export const BeersPageLayout: React.FC<BeersPageLayoutProps> = ({ children, beersLength }) => {
	return (
		<>
			<h2 className="mb-4 text-xl font-semibold">All beers</h2>
			<div className="mb-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
				{children}
			</div>
			<PaginationNavbar beersLength={beersLength} />
		</>
	)
}
