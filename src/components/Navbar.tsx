import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'react-feather'
import { useDebounce, useQuery } from '@/hooks'
import type { Beer } from '@/types'

export const Navbar: React.FC = ({}) => {
	const [searchQuery, setSearchQuery] = useState('')
	const debouncedSearchQuery = useDebounce(searchQuery, 500)
	const memoizedQueryParams = useMemo(
		() => ({ beer_name: debouncedSearchQuery, per_page: 4 }),
		[debouncedSearchQuery]
	)

	const { data: beers, loading, error } = useQuery<Beer[]>('/beers', memoizedQueryParams)

	return (
		<nav className="flex flex-wrap justify-between gap-3 py-3">
			<Link to="/" className="text-2xl font-black tracking-wider">
				The Beer Bible
			</Link>

			<div className="group relative flex items-center gap-2 rounded-md border border-black py-1 px-5 text-sm focus-within:border-primary">
				<Search className="h-5 w-5 group-focus-within:text-primary" />
				<input
					type="text"
					name="navbar-search-input"
					id="navbar-search-input"
					className="outline-none"
					placeholder="search for a beer..."
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value)
					}}
				/>

				<div className="absolute top-full z-10 hidden max-w-sm translate-y-2 rounded-md border bg-gray-50 group-focus-within:block sm:right-0 sm:w-max">
					{/* spinning icon*/}
					{loading || debouncedSearchQuery !== searchQuery ? (
						<div className="mx-auto h-5 w-5 animate-spin rounded-full border-4 border-gray-800 border-t-primary"></div>
					) : error || !beers || beers.length === 0 ? (
						<p className="px-5 text-center">Seems like we could not find what you are looking for</p>
					) : (
						<div className="space-y-3">
							{beers.map((beer) => (
								<Link
									to={`/beers/${beer.id}`}
									className="flex gap-2 py-2 px-5 transition-colors hover:bg-gray-100"
								>
									<div className="h-20 w-12 flex-shrink-0">
										<img src={beer.image_url} alt="" className="h-full w-full object-contain" />
									</div>
									<div className="text-sm">
										<h3 className="font-semibold">{beer.name}</h3>
										<p className="text-gray-500">{beer.tagline}</p>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
