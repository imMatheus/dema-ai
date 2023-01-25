import React from 'react'
import { useQuery } from '@/hooks'
import type { Beer } from '@/types'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'
import SkeletonImage from '@/components/skeletons/SkeletonImage'
import SkeletonText from '@/components/skeletons/SkeletonText'

const Beer: React.FC = ({}) => {
	const { id } = useParams()
	const { data: beers, error, loading } = useQuery<Beer[]>('/beers/' + id)
	console.log(beers)

	// if (loading) return <p>loading..</p>

	if (error || (!loading && !beers))
		return (
			<div className="py-20 text-center">
				<h3 className="text-5xl font-bold">404</h3>
				<p>Seems like the beer you are looking for does not exist</p>
				<Link to="/" className="text-violet-600 underline">
					See all our beers here!
				</Link>
			</div>
		)

	// the api returns an array, so we take the first item
	const beer = beers && beers[0]

	return (
		<div className={classNames('mt-10', loading && 'animate-pulse')}>
			<div className="flex gap-5 md:gap-8">
				<div className="aspect-square flex-shrink-0 overflow-hidden rounded-md group-hover:opacity-75 lg:h-96">
					{loading ? (
						<SkeletonImage />
					) : (
						<img
							src={beer?.image_url}
							alt="Front of men&#039;s Basic Tee in black."
							className="h-full w-full object-contain object-center lg:h-full lg:w-full"
						/>
					)}
				</div>
				<div className="flex-1">
					{loading ? (
						<>
							<SkeletonText className="h-6 w-80" />
							<SkeletonText className="mt-2 h-6 w-60" />
							<SkeletonText className="mt-4 h-6 w-96" />
							<SkeletonText className="mt-1 h-6 w-44" />
						</>
					) : (
						<>
							<h2 className="text-2xl font-bold">{beer?.name}</h2>
							<p className="">{beer?.tagline}</p>
							<p className="mt-2 text-gray-500">{beer?.description}</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Beer
