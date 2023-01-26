import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { BeersView } from '@/views/BeersView'
import { BeerView } from '@/views/BeerView'

function App() {
	return (
		<div className="px-4 pb-20">
			<div className="mx-auto max-w-7xl">
				<Navbar />
				<Routes>
					<Route path="/" element={<BeersView />} />
					<Route path="/beers/:id" element={<BeerView />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
