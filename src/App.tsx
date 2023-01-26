import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Beers from '@/views/Beers'
import Beer from '@/views/Beer'

function App() {
	return (
		<div className="px-4 pb-20">
			<div className="mx-auto max-w-7xl">
				<Navbar />
				<Routes>
					<Route path="/" element={<Beers />} />
					<Route path="/beers/:id" element={<Beer />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
