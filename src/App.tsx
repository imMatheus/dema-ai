import { useQuery } from '@/hooks'
import Navbar from '@/components/Navbar'

function App() {
	const data = useQuery('/beers')
	console.log(data)

	return (
		<div className="px-4">
			<div className="mx-auto max-w-7xl">
				<Navbar />
				<h2>hek</h2>
			</div>
		</div>
	)
}

export default App
