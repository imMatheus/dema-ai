import { useQuery } from '@/hooks'

function App() {
    const data = useQuery('/beers')
    console.log(data)

    return <div className='bg-red-500'>hej</div>
}

export default App
