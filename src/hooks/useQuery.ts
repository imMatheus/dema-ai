import { useEffect, useMemo, useState } from 'react'
import queryString from 'query-string'

interface Data<T> {
	data: T | null
	error: Error | null | unknown
	loading: boolean
}

const BASE_URL = 'https://api.punkapi.com/v2'

export function useQuery<T>(url: string, params?: Record<string, any>): Data<T> {
	const [data, setData] = useState<Data<T>>({
		data: null,
		error: null,
		loading: true
	})
	const memoizedParams = useMemo(() => params, [params])

	const fetchData = async () => {
		setData({ ...data, loading: true })

		try {
			const queryParams = queryString.stringify(params || {}, {
				skipEmptyString: true,
				skipNull: true
			})

			const res = await fetch(`${BASE_URL}${url}${queryParams ? '?' + queryParams : ''}`)
			const json = await res.json()

			// handles edge case of 404
			if (!res.ok) {
				throw new Error('Could not fetch data')
			}

			setData({ data: json, error: null, loading: false })
		} catch (error) {
			setData({ data: null, error, loading: false })
		}
	}

	useEffect(() => {
		fetchData()
	}, [url, memoizedParams])

	return data
}
