import React from 'react'
import type { Beer } from '@/types'
import { Link } from 'react-router-dom'
import SkeletonImage from '@/components/skeletons/SkeletonImage'
import SkeletonText from '@/components/skeletons/SkeletonText'

interface BeerCardProps {
	beer: Beer
}

export const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
	return (
		<Link to={`/beers/${beer.id}`} className={'group relative'}>
			<div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 transition-opacity group-hover:opacity-75 lg:h-80">
				<img
					// some beers did not have an image, this will default it
					src={beer.image_url || 'https://images.punkapi.com/v2/keg.png'}
					alt={`Image of ${beer.name}`}
					className="h-full w-full object-contain object-center py-6 lg:h-full lg:w-full"
				/>
			</div>
			<div className="mt-4 flex justify-between text-xs sm:text-sm">
				<div>
					<h3 className="text-gray-700">{beer.name}</h3>
					<p className="mt-1 text-gray-500">{beer.tagline}</p>
				</div>
				<p className="font-medium">
					{beer.abv}
					<span className="text-xs text-gray-700">/ABV</span>
				</p>
			</div>
		</Link>
	)
}

export const BeerCardSkeleton: React.FC = () => {
	return (
		<div>
			<div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 transition-opacity group-hover:opacity-75 lg:h-80">
				<SkeletonImage />
			</div>
			<div className="mt-4 flex justify-between text-xs sm:text-sm">
				<div>
					<SkeletonText className="h-3.5 w-28" />
					<SkeletonText className="mt-1 h-3.5 w-16" />
				</div>

				<SkeletonText className="h-3.5 w-10" />
			</div>
		</div>
	)
}
