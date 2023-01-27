import React from 'react'
import { useQuery } from '@/hooks'
import type { Beer } from '@/types'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'
import SkeletonImage from '@/components/skeletons/SkeletonImage'
import SkeletonText from '@/components/skeletons/SkeletonText'
import { BeerPageLayout } from '@/components/layouts/BeerPageLayout'
import { ErrorDisplay } from '@/components/ErrorDisplay'

export const BeerView: React.FC = ({}) => {
	const { id } = useParams()
	const { data: beers, error, loading } = useQuery<Beer[]>('/beers/' + id)

	if (loading)
		return (
			<BeerPageLayout>
				<div className="aspect-square flex-shrink-0 overflow-hidden rounded-md group-hover:opacity-75 max-sm:w-full lg:h-96">
					<SkeletonImage />
				</div>
				<div className="flex-1">
					<SkeletonText className="h-6 w-80" />
					<SkeletonText className="mt-2 h-6 w-60" />
					<SkeletonText className="mt-4 h-6 w-96" />
					<SkeletonText className="mt-1 h-6 w-44" />
					<div className="mt-5 flex flex-wrap gap-10 md:mt-10 md:gap-20">
						<div>
							<SkeletonText className="h-10 w-24" />
							<SkeletonText className="mt-2 h-6 w-10" />
						</div>
						<div>
							<SkeletonText className="h-10 w-24" />
							<SkeletonText className="mt-2 h-6 w-10" />
						</div>
						<div>
							<SkeletonText className="h-10 w-24" />
							<SkeletonText className="mt-2 h-6 w-10" />
						</div>
					</div>
				</div>
			</BeerPageLayout>
		)

	const beer = beers && beers[0]

	if (error || !beer)
		return (
			<ErrorDisplay
				title="404"
				description="Seems like the beer you are looking for does not exist"
				href="/"
				linkText="See all our beers here!"
			/>
		)

	// the api returns an array, so we take the first item

	return (
		<BeerPageLayout>
			<div className="aspect-square flex-shrink-0 overflow-hidden rounded-md group-hover:opacity-75 max-sm:w-full lg:h-96">
				<img
					// some beers did not have an image, this will default it
					src={beer.image_url || 'https://images.punkapi.com/v2/keg.png'}
					alt={`Image of ${beer.name}`}
					className="h-full w-full object-contain object-center lg:h-full lg:w-full"
				/>
			</div>
			<div className="flex-1">
				<h2 className="text-2xl font-bold">{beer.name}</h2>
				<p>{beer.tagline}</p>
				<p className="mt-2 text-gray-500">{beer.description}</p>

				<div className="mt-5 flex flex-wrap gap-10 md:mt-10 md:gap-20">
					<div className="border-l-4 border-l-primary pl-4">
						<h3 className="text-3xl font-bold italic">{beer.abv}%</h3>
						<p className="text-gray-700">ABV</p>
					</div>
					<div className="border-l-4 border-l-primary pl-4">
						<h3 className="text-3xl font-bold italic">{beer.volume.value}</h3>
						<p className="text-gray-700">{beer.volume.unit}</p>
					</div>
					{/* Some beers don't have the srm field */}
					{beer?.srm && (
						<div className="border-l-4 border-l-primary pl-4">
							<h3 className="text-3xl font-bold italic">{beer.srm}</h3>
							<p className="text-gray-700">SRM</p>
						</div>
					)}
					{/* Some beers don't have the ph field */}
					{beer?.ph && (
						<div className="border-l-4 border-l-primary pl-4">
							<h3 className="text-3xl font-bold italic">{beer.ph}</h3>
							<p className="text-gray-700">PH</p>
						</div>
					)}
				</div>
			</div>
		</BeerPageLayout>
	)
}
