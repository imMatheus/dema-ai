import React from 'react'

interface BeerPageLayoutProps {
	children: React.ReactNode
}

export const BeerPageLayout: React.FC<BeerPageLayoutProps> = ({ children }) => {
	return (
		<div className="mt-10">
			<div className="flex flex-col gap-5 md:flex-row md:gap-8">{children}</div>
		</div>
	)
}
