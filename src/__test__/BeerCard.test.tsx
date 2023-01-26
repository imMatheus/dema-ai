import { BeerCard, type MinifiedBeer } from '@/components/BeerCard'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const mockBeer: MinifiedBeer = {
	id: 1,
	name: 'Buzz',
	tagline: 'A Real Bitter Experience.',
	image_url: 'https://images.punkapi.com/v2/keg.png',
	abv: 4.5
}

describe('BeerCard component', () => {
	it('should render with correct content', () => {
		render(
			<BrowserRouter>
				<BeerCard beer={mockBeer} />
			</BrowserRouter>
		)
		expect(screen.getByText(mockBeer.name)).toBeTruthy()
		expect(screen.getByRole('img')).toBeTruthy()
		expect(screen.getByText(mockBeer.tagline)).toBeTruthy()
		expect(screen.getByText(mockBeer.abv)).toBeTruthy()
		const card = screen.getByRole('link')
		expect(card.getAttribute('href')).toBe(`/beers/${mockBeer.id}`)
	})
})
