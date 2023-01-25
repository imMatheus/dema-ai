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
			<h2 className="mb-4 text-xl font-semibold">All beers</h2>

			<div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
				{loading
					? Array(20) // little trick to easy generate 20 items in array
							.fill(0)
							.map(() => <BeerCard loading={true} />)
					: beers?.map((beer) => <BeerCard beer={beer} />)}
				{/* The "?" above is only */}
			</div>
		</div>
	)
}

export default Beers
