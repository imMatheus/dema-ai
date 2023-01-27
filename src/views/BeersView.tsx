import React, { useMemo } from 'react'
import { useQuery } from '@/hooks'
import { BeerCard, BeerCardSkeleton } from '@/components/BeerCard'
import type { Beer } from '@/types'
import { Link, useSearchParams } from 'react-router-dom'
import { BeersPageLayout } from '@/components/layouts/BeersPageLayout'
import { ErrorDisplay } from '@/components/ErrorDisplay'

export const BeersView: React.FC = ({}) => {
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

	if (error || !beers || beers.length === 0)
		return (
			<ErrorDisplay
				title="Beer overload"
				description="Seems like the page you are looking for does ot exist"
				href="/"
				linkText="See all our beers here!"
			/>
		)

	return (
		<BeersPageLayout beersLength={beers.length}>
			{beers.map((beer) => (
				<BeerCard key={beer.id} beer={beer} />
			))}
		</BeersPageLayout>
	)
}
