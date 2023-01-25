import React from 'react'
import { useQuery } from '@/hooks'
import BeerCard from '@/components/BeerCard'
import type { Beer } from '@/types'

const Beers: React.FC = ({}) => {
	const { data: beers, error, loading } = useQuery<Beer[]>('/beers')
	console.log(beers)

	if (error || (!loading && !beers))
		return (
			<div>
				<p>err</p>
			</div>
		)

	return (
		<div>
			<h2>All beers</h2>

			<div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
				{loading
					? [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <BeerCard loading={true} />)
					: beers?.map((beer) => <BeerCard beer={beer} />)}
				{/* The "?" above is only */}
			</div>
		</div>
	)
}

export default Beers
