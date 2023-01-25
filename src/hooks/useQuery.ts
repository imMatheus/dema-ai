import { useEffect, useState } from 'react'

interface Data<T> {
    data: T
    error: Error | null | unknown
    loading: boolean
}

const BASE_URL = 'https://api.punkapi.com/v2'

export function useQuery<T>(url: string) {
    const [data, setData] = useState<Data<T | null>>({
        data: null,
        error: null,
        loading: true,
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${BASE_URL}${url}`)
                const json = await res.json()
                setData({ data: json, error: null, loading: false })
            } catch (error) {
                setData({ data: null, error, loading: false })
            }
        }
        fetchData()
    }, [url])

    return data
}
