import React, { useMemo } from 'react'
import { useQuery } from '@/hooks'
import { BeerCard, BeerCardSkeleton } from '@/components/BeerCard'
import type { Beer } from '@/types'
import { useSearchParams } from 'react-router-dom'
import { BeersPageLayout } from '@/components/layouts/BeersPageLayout'

const Beers: React.FC = ({}) => {
	const [searchParams] = useSearchParams({ page: '1' })
	const currentPage = Number(searchParams.get('page')) || 1

	const memoizedQueryParams = useMemo(() => ({ page: currentPage, per_page: 20 }), [currentPage])
	// const memoizedQueryParams = { page: currentPage, per_page: 20, beer_name: searchParam }
	const { data: beers, error, loading } = useQuery<Beer[]>(`/beers`, memoizedQueryParams)

	if (loading)
		return (
			<BeersPageLayout beersLength={0}>
				{Array(20) // little trick to easy generate 20 items in array
					.fill(0)
					.map((_, i) => (
						<BeerCardSkeleton key={i} />
					))}
			</BeersPageLayout>
		)

	if (error || !beers)
		return (
			<div>
				<p>err</p>
			</div>
		)

	return (
		<BeersPageLayout beersLength={beers.length}>
			{beers.map((beer) => (
				<BeerCard key={beer.id} beer={beer} />
			))}
		</BeersPageLayout>
	)
}

export default Beers
