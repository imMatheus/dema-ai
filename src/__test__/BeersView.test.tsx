import { BeersView } from '@/views/BeersView'
import { describe, expect, it } from 'vitest'
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('BeerCard component', () => {
	it('should render 20 skeletons to begin with, then 20 normal cards', async () => {
		render(
			<BrowserRouter>
				<BeersView />
			</BrowserRouter>
		)

		const skeletons = await waitFor(() => screen.getAllByTestId('beer-card-skeleton'))
		expect(skeletons).toHaveLength(20)

		await waitForElementToBeRemoved(skeletons)

		const cards = await waitFor(() => screen.queryAllByTestId('beer-card'))
		expect(cards).toHaveLength(20)
	})
})
