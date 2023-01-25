import React from 'react'
import type { Beer } from '@/types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import SkeletonImage from '@/components/skeletons/SkeletonImage'
import SkeletonText from '@/components/skeletons/SkeletonText'

interface BeerCardProps {
	beer?: Beer
	loading?: boolean
}

const BeerCard: React.FC<BeerCardProps> = ({ beer, loading }) => {
	return (
		<Link to={`/beers/${beer?.id}`} className={classNames('group relative', loading && 'animate-pulse')}>
			<div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 transition-opacity group-hover:opacity-75 lg:h-80">
				{loading ? (
					<SkeletonImage />
				) : (
					<img
						src={beer?.image_url}
						alt="Front of men&#039;s Basic Tee in black."
						className="h-full w-full object-contain object-center py-6 lg:h-full lg:w-full"
					/>
				)}
			</div>
			<div className="mt-4 flex justify-between text-xs sm:text-sm">
				<div>
					{loading ? (
						<>
							<SkeletonText className="h-3.5 w-28" />
							<SkeletonText className="mt-1 h-3.5 w-16" />
						</>
					) : (
						<>
							<h3 className="text-gray-700">{beer?.name}</h3>
							<p className="mt-1 text-gray-500">{beer?.tagline}</p>
						</>
					)}
				</div>
				{loading ? (
					<SkeletonText className="h-3.5 w-10" />
				) : (
					<p className="font-medium text-gray-900">{beer?.abv}</p>
				)}
			</div>
		</Link>
	)
}

export default BeerCard
