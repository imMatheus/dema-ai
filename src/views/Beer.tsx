import React from 'react'
import { useQuery } from '@/hooks'
import type { Beer } from '@/types'
import { useParams } from 'react-router-dom'

const Beer: React.FC = ({}) => {
	const { id } = useParams()
	const { data: beers, error, loading } = useQuery<Beer[]>('/beers/' + id)
	console.log(beers)

	if (loading) return <p>loading..</p>

	if (error || !beers)
		return (
			<div>
				<p>err</p>
			</div>
		)

	const beer = beers[0]

	return (
		<div>
			<div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
				<img
					src={beer?.image_url}
					alt="Front of men&#039;s Basic Tee in black."
					className="h-full w-full object-contain object-center lg:h-full lg:w-full"
				/>
			</div>
		</div>
	)
}

export default Beer
